import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth | Mz-Hears",
  description: "Sign in to Mz-Hears",
};

export default function StaffMemberLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen overflow-auto scroll-container bg-slate-50">
      {children}
    </main>
  );
}
