import Card from "@/components/card";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const ServicePage = () => {
    return (

        <>
           
            <div className="h-full md:px-2 overflow-hidden">
                <div className="md:px-32 px-10 ">
                    <div className="md:py-10">
                        <div className="flex flex-col md:justify-center items-center md:p-8 p-4">
                            <div className="text-center md:px-[10rem] ">
                                <div className="flex items-center justify-center">
                                <span className="subheading">Innovate</span><div className="subheading ml-2"/>

                                </div>
                                <h1 className="text-4xl font-bold pt-[4rem]">Transforming Ideas into Digital Reality</h1>
                                <p className="pt-[4rem]">Our expertise lies in crafting bespoke websites that not only look stunning but also function seamlessly. We ensure your online presence is impactful and engaging.</p>
                            </div>
                            <motion.div 
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="grid md:grid-cols-3 gap-4 justify-evenly items-center pt-[4rem]">
                                <Card
                                    src={"/designer.jpg"}
                                    title={"Custom Logo Design Tailored for Your Brand"}
                                    description={"Stand out with a unique logo that captures your brand's essence."}
                                />
                               
                                <Card
                                    src={"/group.jpg"}
                                    title={"Why Choose Us for Your Digital Needs?"}
                                    description={"We combine creativity and technology to deliver exceptional results."}
                                />
                                 <Card
                                    src={"/web-dev.jpg"}
                                    title={"Creative Graphic Design to Elevate Your Business"}
                                    description={"Our graphic design services enhance your visual storytelling."}
                                />
                            </motion.div>
                            <div className="py-5 md:pt-[8rem]">
                        <h1 className="text-2xl font-bold text-center py-8">Novus Technologies Board Of Trustees</h1>
                        <div className="flex flex-col md:flex-row gap-8">
                            <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.0, ease: "easeOut" }}>
                            <Card src={"/Malik.jpg"} title={"Achidi Malik-Al Fayçal"} description={"Founder & CEO - Frontend Developer"} />

                            </motion.div>
                            <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.0, ease: "easeOut" }}
                            >
                            <Card src={"/Stini.jpg"} title={"Fopa Lilian Agaustini"} description={"Co Founder - Graphic Designer"} />

                            </motion.div>

                        </div>

                    </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ServicePage;