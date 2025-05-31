import SideBar from "@/components/admin/SideBar";
import TopBar from "@/components/admin/TopBar";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Admin | Mz-Hears",
  description: "Mz-hears admin panel",
};

export default function StaffMemberLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full flex flex-row gap-1 bg-slate-50 overflow-hidden">
      <div className="hidden md:flex md:w-[20%]">
        <SideBar />
      </div>
      <main className="h-screen overflow-hidden w-full md:w-[80%] bg-slate-50">
        <TopBar />
        {children}
      </main>
    </div>
  );
}