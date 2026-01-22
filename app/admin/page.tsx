import type { Metadata } from "next";
import { revalidatePath } from "next/cache";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { createAdminToken } from "@/lib/adminToken";
import type { EngagementSubmission } from "@/lib/convexAdmin";
import {
  listEngagementSubmissions,
  updateEngagementSubmission,
} from "@/lib/convexAdmin";

export const metadata: Metadata = {
  title: "TRSN LLC Admin Console",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

const statusOptions = ["new", "reviewed", "qualified", "archived"];

const isAdminEmail = (email: string | undefined, adminEmail: string) => {
  if (!email) {
    return false;
  }

  return email.toLowerCase() === adminEmail.trim().toLowerCase();
};

async function updateSubmissionAction(formData: FormData) {
  "use server";
  const adminEmail = process.env.ADMIN_EMAIL;
  const { userId } = await auth();
  if (!userId || !adminEmail) {
    throw new Error("Unauthorized.");
  }

  const user = await clerkClient.users.getUser(userId);
  const primaryEmail = user.emailAddresses.find(
    (email) => email.id === user.primaryEmailAddressId,
  );
  const emailValue =
    primaryEmail?.emailAddress ?? user.emailAddresses[0]?.emailAddress;

  if (!isAdminEmail(emailValue, adminEmail)) {
    throw new Error("Unauthorized.");
  }

  const { token } = createAdminToken(userId);
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  const internalNotes = String(formData.get("internalNotes") ?? "");

  await updateEngagementSubmission(token, {
    id,
    status,
    internalNotes,
  });

  revalidatePath("/admin");
}

export default async function AdminPage({
}: {
  searchParams?: { error?: string };
}) {
  const adminEmail = process.env.ADMIN_EMAIL;
  const { userId } = await auth();

  if (!adminEmail) {
    return (
      <div className="min-h-screen bg-zinc-950 px-6 py-16 text-zinc-100">
        <div className="mx-auto flex w-full max-w-xl flex-col gap-4">
          <h1 className="text-2xl font-semibold">Admin console</h1>
          <p className="text-sm text-zinc-300">
            Admin authentication is not configured. Set ADMIN_EMAIL.
          </p>
        </div>
      </div>
    );
  }

  if (!userId) {
    const error = searchParams?.error === "invalid";

    return (
      <div className="min-h-screen bg-zinc-950 px-6 py-16 text-zinc-100">
        <div className="mx-auto flex w-full max-w-xl flex-col gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              Admin
            </p>
            <h1 className="text-3xl font-semibold">TRSN LLC Console</h1>
            <p className="mt-2 text-sm text-zinc-400">
              Restricted access. Authentication is required.
            </p>
          </div>
          {error ? (
            <div className="rounded-xl border border-rose-400/40 bg-rose-500/10 p-4 text-sm text-rose-100">
              Access is denied.
            </div>
          ) : null}
          <SignedOut>
            <div className="flex flex-wrap gap-3">
              <SignInButton mode="redirect">
                <button
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-zinc-900"
                  type="button"
                >
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="redirect">
                <button
                  className="inline-flex items-center justify-center rounded-md border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-100"
                  type="button"
                >
                  Request access
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
        </div>
      </div>
    );
  }

  const user = await clerkClient.users.getUser(userId);
  const primaryEmail = user.emailAddresses.find(
    (email) => email.id === user.primaryEmailAddressId,
  );
  const emailValue =
    primaryEmail?.emailAddress ?? user.emailAddresses[0]?.emailAddress;
  const isAdmin = isAdminEmail(emailValue, adminEmail);

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-zinc-950 px-6 py-16 text-zinc-100">
        <div className="mx-auto flex w-full max-w-xl flex-col gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              Admin
            </p>
            <h1 className="text-3xl font-semibold">TRSN LLC Console</h1>
            <p className="mt-2 text-sm text-zinc-400">
              Access is denied for this account.
            </p>
          </div>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    );
  }

  let submissions: EngagementSubmission[] = [];
  let loadError: string | null = null;

  try {
    const { token } = createAdminToken(userId);
    submissions = await listEngagementSubmissions(token);
  } catch (error) {
    console.error("Admin list failed.", error);
    loadError = "Failed to load submissions.";
  }

  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              Admin Console
            </p>
            <h1 className="text-3xl font-semibold">Engagement submissions</h1>
          </div>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>

        <section className="flex flex-col gap-6">
          {loadError ? (
            <div className="rounded-xl border border-rose-500/40 bg-rose-500/10 p-6 text-sm text-rose-100">
              {loadError}
            </div>
          ) : submissions.length === 0 ? (
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 text-sm text-zinc-300">
              No submissions yet.
            </div>
          ) : (
            submissions.map((submission) => (
              <article
                key={submission._id}
                className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                      {submission.sourcePage}
                    </p>
                    <h2 className="text-lg font-semibold text-zinc-100">
                      {submission.name}
                    </h2>
                    <p className="text-sm text-zinc-300">{submission.email}</p>
                    {submission.company ? (
                      <p className="text-sm text-zinc-400">
                        {submission.company}
                      </p>
                    ) : null}
                  </div>
                  <div className="text-xs text-zinc-400">
                    <p>
                      Submitted: {new Date(submission.submittedAt).toLocaleString()}
                    </p>
                    {submission.lastReviewedAt ? (
                      <p>
                        Reviewed: {new Date(submission.lastReviewedAt).toLocaleString()}
                      </p>
                    ) : null}
                  </div>
                </div>

                <p className="mt-4 whitespace-pre-wrap text-sm text-zinc-200">
                  {submission.message}
                </p>

                <form className="mt-4 grid gap-4" action={updateSubmissionAction}>
                  <input name="id" type="hidden" value={submission._id} />
                  <label className="flex flex-col gap-2 text-sm text-zinc-200">
                    Status
                    <select
                      className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100"
                      defaultValue={submission.status}
                      name="status"
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-zinc-200">
                    Internal notes
                    <textarea
                      className="min-h-[120px] rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100"
                      defaultValue={submission.internalNotes ?? ""}
                      name="internalNotes"
                      placeholder="Notes for internal review."
                    />
                  </label>
                  <div>
                    <button
                      className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-zinc-900"
                      type="submit"
                    >
                      Update submission
                    </button>
                  </div>
                </form>
              </article>
            ))
          )}
        </section>
      </div>
    </div>
  );
}
