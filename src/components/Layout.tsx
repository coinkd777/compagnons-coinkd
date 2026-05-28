import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingPhone from "./FloatingPhone";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <FloatingPhone />
  </div>
);

export default Layout;
