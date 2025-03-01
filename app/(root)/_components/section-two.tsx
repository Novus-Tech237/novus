"use client";

import { motion, useInView } from "framer-motion";
import InfoCard from "@/components/info";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CarouselSize } from "@/components/carousel-cards";

const SectionTwo = () => {
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
            animateValue(0, 7, 2000, setArticleCount);
            animateValue(0, 95, 1900, setAchievementCount);
        }
    }, [inView]);

    return (
        <>
            <div className="h-full md:px-2 overflow-hidden">
                <div className="md:px-32 md:py-10 px-10 py-5">
                    <div className="mb-[60px]">
                        <span className="subheading">Projects</span>
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
                                        src={"/Ex.png"}
                                        alt="achidi-malik-novus"
                                        width={500}
                                        height={600}

                                    />
                                </motion.div>
                                <div className="md:w-[600px] flex flex-col gap-8">
                                    <h1 className="text-4xl font-bold">Discover Our Impressive Achievements in the Tech Industry</h1>
                                    <p>With over 5+ successful projects completed, we pride ourselves on our expertise. Our clients consistently rate their satisfaction at an outstanding 95%.</p>
                                    <motion.div
                                        ref={ref} // Attach the ref to the motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="flex gap-8 items-center flex-col md:flex-row justify-start"
                                    >
                                        <InfoCard
                                            counters={articleCount}
                                            description="Projects completed with excellence and dedication"
                                        />
                                        <InfoCard
                                            counters={achievementCount}
                                            description="Satisfaction rate of our clients after delivering top-notch solutions"
                                            suffix="%"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                            <CarouselSize />


                        </div>

                    </div>
                </div>

            </div>

        </>

    );
}

export default SectionTwo;