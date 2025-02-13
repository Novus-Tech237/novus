
interface InfoCardProps {
    title ?: string;
    description ?: string;
    counters ?: number;
    suffix ?: string;
}
const InfoCard = ({title, description, counters, suffix}:InfoCardProps) => {
    return ( 
        <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <h2 className="md:text-6xl text-4xl font-semibold">{counters?.toLocaleString()} {suffix} </h2>
            <span>{description}</span>

        </div>
     );
}
 
export default InfoCard;