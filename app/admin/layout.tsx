import SideBar from "@/components/responder/SideBar";

export default function StaffMemberLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full flex flex-row">
      <div className="hidden md:flex md:w-[15%]">
        <SideBar />
      </div>
      <main className="h-screen overflow-hidden w-full md:w-[85%] bg-slate-50">
        {children}
      </main>
    </div>
  );
}