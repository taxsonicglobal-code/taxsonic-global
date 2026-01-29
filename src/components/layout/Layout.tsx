import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />

      <main className="pt-20 min-h-screen bg-background">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppFloating />
    </>
  );
}
