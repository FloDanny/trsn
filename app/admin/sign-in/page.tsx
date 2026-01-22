import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Admin Sign In | TRSN LLC",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminSignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 py-16">
      <SignIn routing="path" path="/admin/sign-in" />
    </div>
  );
}
