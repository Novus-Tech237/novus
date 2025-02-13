import Image from "next/image";

interface CardProps{
    src: string,
    title: string,
    description: string,
}

const Card = ({src, title, description}: CardProps) => {
    return ( 
        <div className="flex flex-col items-center justify-around">
            <Image
                src={src}
                height={100}
                width={400}
                alt={title}
                className="rounded"
            />
            <h3 className="font-bold pt-8 px-10 text-center text-xl">{title}</h3>
            <p className="pt-4 text-center text-xs w-[250px]">{description}</p>
        </div>
     );
}
 
export default Card;