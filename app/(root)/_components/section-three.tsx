"use client";

import { motion, useInView } from "framer-motion";
import InfoCard from "@/components/info";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CarouselSize } from "@/components/carousel-cards";
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

const SectionThree = () => {
    const [articleCount, setArticleCount] = useState<number>(0);
    const [achievementCount, setAchievementCount] = useState<number>(0);
    const [growthRate, setGrowthRate] = useState<number>(0);
    const [creativeEvent, setCreativeEvent] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: false }); // Allow multiple triggers

    useEffect(() => {
        if (inView) {
            const animateValue = (
                start: number,
                end: number,
                duration: number,
                setValue: React.Dispatch<React.SetStateAction<number>>
            ) => {
                const increment = end / (duration / 5);
                let current = start;

                const updateCount = () => {
                    current += increment;
                    if (current < end) {
                        setValue(Math.floor(current));
                        requestAnimationFrame(updateCount);
                    } else {
                        setValue(end);
                    }
                };

                updateCount();
            };

            // Reset counts if they need to animate again
            setArticleCount(0);
            setAchievementCount(0);

            // Animate each value
            animateValue(0, 708, 8000, setArticleCount);
            animateValue(0, 87.6, 1900, setAchievementCount);
        }
    }, [inView]);

    return (
        <>
            <div className="h-full md:px-2 overflow-hidden">
                <div className="md:px-32 md:py-10 px-10 py-5">
                    <div className="mb-[60px]">
                        <span className="subheading">What is new ?</span>
                    </div>
                    <div className="mt-10">
                        <div className="flex flex-col md:justify-between items-center p-8">
                            <div className="flex md:flex-row flex-col items-center md:gap-[10rem] gap-[4rem] justify-around">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.0, ease: "easeOut" }}
                                >
                                    <Image
                                        src={"/group.png"}
                                        alt="achidi-malik-novus"
                                        width={500}
                                        height={600}

                                    />
                                </motion.div>
                                <div className="md:w-[600px] flex flex-col gap-8">
                                    <h1 className="text-4xl font-bold">Discover Our ATS Friendly CV Builder powered by <span className="text-purple-800">ANA A.I.</span></h1>
                                    <p> In Novus Technologies, Create professional, tailored CVs that stand out in Applicant Tracking Systems (ATS) and increase your chances of landing your dream job. Our user-friendly interface and smart suggestions ensure that your CV is not only visually appealing but also optimized for success.</p>
                                    <motion.div
                                        ref={ref} // Attach the ref to the motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="flex gap-8 items-center flex-col md:flex-row justify-start"
                                    >
                                        <InfoCard
                                            counters={articleCount}
                                            description="CV built with Novus ATS Friendly CV Builder"
                                        />
                                        <InfoCard
                                            counters={achievementCount}
                                            description="Satisfaction rate based on 842+ users reviews"
                                            suffix="%"
                                        />
                                    </motion.div>

                                    <div className="flex items-center gap-4 pt-[3rem]">
                                        <Button className="bg-purple-800 text-white hover:bg-purple-800">
                                            <RegisterLink>Get Started</RegisterLink>
                                        </Button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-white text-purple-800 border border-purple-800 p-[5px] px-[1rem]  rounded">
                                            Follow Us
                                        </motion.button>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </div>

        </>

    );
}

export default SectionThree;