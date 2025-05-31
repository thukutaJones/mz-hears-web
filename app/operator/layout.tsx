import SideBar from "@/components/operator/SideBar";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Operator | Mz-Hears",
  description: "Mz-hears health facility operator panel",
};

export default function OperatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen bg-primary w-full flex flex-row">
      <div className="hidden md:flex md:w-[6%]">
        <SideBar />
      </div>
      <main className="h-screen overflow-hidden w-full md:w-[94%] bg-slate-50 rounded-l-4xl">
        {children}
      </main>
    </div>
  );
}
