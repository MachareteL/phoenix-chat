import Image from "next/image";
import Phoenix from "@/public/phoenix_logo.png";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center h-screen">
      {/* Include shared UI here e.g. a header or sidebar */}
      <Image src={Phoenix} alt="logo" className="w-96" />
      <div className="w-full h-full flex pt-24 justify-center">
        {children}
      </div>
    </div>
  );
}
