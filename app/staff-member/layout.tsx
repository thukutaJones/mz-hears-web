import SideBar from "@/components/responder/SideBar";

export default function StaffMemberLayout({
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