"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen border-s-gray-50">
      <Header />
      <main className="flex-1 px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
}
