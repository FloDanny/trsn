import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Admin Access | TRSN LLC",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminSignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 py-16">
      <SignUp routing="path" path="/admin/sign-up" />
    </div>
  );
}
