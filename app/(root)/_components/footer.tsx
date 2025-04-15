import { FacebookIcon, InstagramIcon, LocateFixed, MailOpenIcon, MessageCircleMore, Phone } from "lucide-react";
import NovusLogo from "./logo";
import Link from "next/link";

const NovusFooter = () => {
    return (
        <>
            <footer className="container flex md:flex-row flex-col gap-8 items-center justify-around text-white py-20 px-16 pt-8 ">
                <div className="pt-4 md:w-[600px] w-full flex flex-col gap-8">
                    <NovusLogo />
                    <h2 className="text-2xl font-semibold">About Novus Technologies</h2>
                    <span className="md:w-[350px]">We are a team of passionate individuals who are dedicated to creating innovative solutions for the modern world.</span>
                </div>
                <div className="flex md:items-center items-start justify-center md:flex-row flex-col gap-20">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                            <LocateFixed className="mr-2" />
                            Our Office
                        </div>
                        Nkolfoulou - Soa Yaounde
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                            <Phone className="mr-2" />
                            Phone
                        </div>
                        +237 6 71 40 03 46
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                            <MailOpenIcon className="mr-2" />
                            E-Mail
                        </div>
                        <a href={"mailto: novustechnologies7@gmail.com"}>novustechnologies7@gmail.com</a>
                    </div>
                </div>
            </footer>
            <div className="flex flex-col gap-8 items-center justify-center border-t border-white p-4">
                <div className="flex gap-4">
                <div className="flex items-center justify-center pt-4">
                    <Link href={"https://www.instagram.com/novus.technologies/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"}>
                        <div className="p-2 rounded-full bg-gray-100 hover:bg-blue-500 text-black hover:text-pink-600">
                            <InstagramIcon/>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center justify-center pt-4">
                    <Link href={"https://www.instagram.com/novus.technologies/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"}>
                        <div className="p-2 rounded-full bg-gray-100 text-black hover:bg-pink-600 hover:text-blue-500">
                            <MessageCircleMore />
                        </div>
                    </Link>
                </div>

                </div>
                
                <span className="text-slate-500">&copy; {new Date().getFullYear()} Novus Technologies. All rights reserved.</span>
            </div>
        </>

    );
}

export default NovusFooter;