"use client"
import { motion } from "framer-motion";
import { ArrowBigDown } from "lucide-react";

const NovusHeader = () => {
    return (
        <section>
            <div className="flex items-center justify-center h-[80vh] flex-col ">
                <motion.div

                    className="flex flex-col items-center justify-center flex-grow md:w-[1200px]">
                    <motion.span initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-white pb-8">
                        Welcome to Novus Technologies
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl text-center md:text-6xl font-bold text-white ">
                        Innovative Software and Technology Startup
                    </motion.h1>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="md:mt-4 text-center mt-8"
                    >
                        <span className="text-white">Dedicated to helping businesses succeed online through bespoke web designing services, graphic designing, and web applications.</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default NovusHeader;