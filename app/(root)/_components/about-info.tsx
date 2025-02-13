import { LucideIcon } from "lucide-react";

interface AboutInfoProps{
    title: string
    description: string
    icon: LucideIcon
}
const AboutInfo = ({ title, description, icon: Icon }: AboutInfoProps) => {

    return ( 
        <div className="mb-10">
            <div className="flex gap-8">
                <Icon className="text-purple-600"/>
                <span className="font-bold dark:text-black">{title}</span>
            </div>
            <p className="ml-14 md:w-[520px] whitespace-pre-line dark:text-black">{description}</p>
        </div>
     );
}
 
export default AboutInfo;