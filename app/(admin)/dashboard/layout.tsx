import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Sidebar from "@/app/_components/Sidebar";
import clsx from "clsx";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container">
      <div className="grid grid-cols-[200px_1fr]">
        <Sidebar />

        <div>{children}</div>
      </div>
    </div>
  );
}
