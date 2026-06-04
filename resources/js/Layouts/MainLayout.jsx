import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ui/ScrollToTop";

export default function MainLayout({ children }) {
    useEffect(() => {
        document.documentElement.classList.add("dark");
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 antialiased">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}
