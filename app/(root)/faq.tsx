"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation"; // Import usePathname

const faqs = [
    {
        question: "What services does Novus Technologies offer?",
        answer:
            "Novus Technologies specializes in web application, web design, graphic design and Logo creation. We aim to provide innovative tech solutions and creative services that cater to the unique needs of startups and established businesses alike.",
    },
    {
        question: "How does Novus Technologies ensure the quality of its products?",
        answer:
            "We implement a rigorous quality assurance process that includes automated testing, code reviews, and user feedback. Our dedicated QA team works closely with developers and designers to ensure that all products and designs meet your high standards before delivering to the customer.",
    },
    {
        question: "What industries does Novus Technologies serve?",
        answer:
            "We serve a wide range of industries, including healthcare, education, e-commerce, and creative sectors. Our adaptable technology solutions and design services are tailored to meet the specific requirements of various sectors.",
    },
    {
        question: " Can Novus Technologies help with digital transformation and branding?",
        answer:
            "Yes, we specialize in helping businesses undergo digital transformation by integrating advanced technologies into their operations. Additionally, our graphic design team creates compelling branding materials, including logos, to enhance your corporate identity.",
    },
    {
        question: " How can I get in touch with Novus Technologies for a consultation?",
        answer:
            "You can contact us through our website's contact form, or by email at info@novustechnologies.com. We also offer free initial consultations to discuss your needs in technology solutions and creative services.",
    },
];

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const pathname = usePathname(); // Get the current pathname

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Determine the background class based on the URL
    const bgClass = pathname === "/" ? "bg-white" : "bg-slate-900";
    const textClass = pathname === "/" ? "text-black" : "text-white";
    return ( 
        <section className={`dark:${bgClass} py-8`}>
            <div className="container mx-auto px-6 text-center">
                <h2 className={`dark:${textClass} font-bold mb-8 text-3xl`}>
                    Frequently Asked Questions
                </h2>
                <p className="mb-12">
                    Here are some common questions we receive. If you have any other inquiries, feel free to reach out to us!
                </p>
                <div className="max-w-2xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <motion.button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full bg-white border border-gray-300 p-4 rounded-t-lg shadow-md text-left focus:outline-none"
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                                <span className="ml-4 text-gray-600">
                                    {openIndex === index ? "-" : "+"}
                                </span>
                            </motion.button>
                            {/* Answer Section */}
                            {openIndex === index && (
                                <motion.div
                                    className="p-4 bg-gray-100 rounded-b-lg"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="text-gray-700">{faq.answer}</p>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQPage;