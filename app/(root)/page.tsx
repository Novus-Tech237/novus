"use client"

import { useState, useEffect } from "react";
import NovusContactUs from "./_components/contact";
import NovusFooter from "./_components/footer";
import NovusHeader from "./_components/header";
import NavigationBar from "./_components/navbar";
import SectionOne from "./_components/section-one";
import SectionTwo from "./_components/section-two";
import ServicePage from "./_components/services";
import FAQPage from "./faq";
import { ChevronUp } from "lucide-react";
import SectionThree from "./_components/section-three";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-purple-900 text-white border-none rounded-full p-3 cursor-pointer"
                >
                    <ChevronUp />
                </button>
            )}
        </>
    );
};

const NovusHomePage = () => {
    return (
        <div className="h-full overflow-x-hidden">
            <div className="sub_page">
                <div className="hero_area relative">
                    <video
                        autoPlay
                        muted
                        loop
                        className="absolute inset-0 w-full h-full object-cover -z-10 bg-blue-200/20"
                        src="/vfootage.mp4"
                        typeof="video/mp4"
                    />
                    <div className="relative z-20 p-2 pt-8">
                        <NavigationBar />
                    </div>
                    <NovusHeader />
                </div>
                <section className="min-h-[720px] bg-[#d0e5fd77] w-full">
                    <SectionOne />
                </section>
                <section className="min-h-[720px] w-full" id="service">
                    <ServicePage />
                </section>
                <section className="min-h-[720px] bg-[#f9eafdb0] w-full">
                    <SectionThree />
                </section>
                <section className="min-h-[720px] bg-[#f9eafdb0] w-full">
                    <SectionTwo />
                </section>
                <section className="min-h-[720px] w-full">
                    <FAQPage />
                </section>
                <section className="min-h-[650px] bg-[#f9eafdb0] w-full" id="contact">
                    <NovusContactUs />
                </section>
                <section className="min-h-[450px] bg-[#080729] w-full">
                    <NovusFooter />
                </section>
            </div>
            <ScrollToTopButton />
        </div>
    );
};

export default NovusHomePage;