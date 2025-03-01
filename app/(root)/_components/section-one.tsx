"use client"

import { motion } from "framer-motion";
import InfoCard from "@/components/info";
import Image from "next/image";
import { Info } from "lucide-react";

const SectionOne = () => {
    return (
        <>
            <div className="h-full md:px-2 overflow-hidden">
                <div className="md:px-32 md:py-10 px-10 py-5">
                    <div className="mb-[60px]">
                        <span className="subheading">Starter </span>
                    </div>
                    <div className="mt-10">
                        <div className="flex md:flex-row flex-col md:justify-evenly items-center p-8">
                        <motion.div initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="md:hidden block">
                                <Image
                                    src={"/Graphics.jpg"}
                                    alt="achidi-malik-novus"
                                    width={500}
                                    height={600}
                                    className="rounded-lg"
                                />
                            </motion.div>
                            <div className="p-6 md:w-[600px] w-[410px] flex flex-col gap-8">
                                <h1 className="text-4xl font-bold">Transforming Ideas into Digital Experiences: Web, App and Graphic Design Solutions</h1>
                                <p>At our firm, we specialise in creating stunning websites, innovative applications, and captivating graphic designs. Our dedicated team is committed to bringing your vision to life with precision and creativity.</p>
                                <div className="flex md:flex-row flex-col gap-8 items-center justify-start">
                                    <InfoCard
                                        title="Web Design"
                                        description="Crafting responsive and visually appealing websites that engage and convert visitors."
                                    />
                                    <InfoCard
                                        title="App Development"
                                        description="Building user-friendly applications tailored to enhance your business functionality and reach."
                                    />

                                </div>
                            </div>
                            <motion.div initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="hidden md:block">
                                <Image
                                    src={"/Graphics.jpg"}
                                    alt="achidi-malik-novus"
                                    width={500}
                                    height={600}
                                    className="rounded-lg"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>



        </>

    );
}

export default SectionOne;