"use client";
import { motion } from "framer-motion";
import AboutInfo from "./about-info";
import { Clock, LocateFixed, Phone, } from "lucide-react";
import Image from "next/image";
const NovusContactUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="md:flex md:justify-evenly items-center h-full">
      
        <div className="p-8">
          
          <h1 className="font-bold text-4xl md:text-6xl mt-10 md:w-[600px] w-[300px] dark:text-black">
            Contact Us & Exchange together
          </h1>
          
          <div className="mt-10 flex-col items-center gap-y-8">
            <AboutInfo
              title={"Open Hours"}
              description={
                "Monday - Friday \n 8:00 a.m to 5:00 p.m"    
              }
              icon={Clock}
            />
            <AboutInfo
              title={"Our Address"}
              description={
                "Nkolfoulou - Centre, Cameroun"
              }
              icon={LocateFixed}
            />
            <AboutInfo
              title={"Our Contacts"}
              description={
                "+237 6 71 40 03 46"
              }
              icon={Phone}
            />
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <Image
            src={"/contact.jpg"}
            width={600}
            height={600}
            alt="Header"
            className="md:rounded pb-8 md:pb-0"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default NovusContactUs;
