import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface CardProps {
  src: string
  title: string
  description: string
}

const CustomCard = ({ src, title, description }: CardProps) => {
  return (
    <Card className="w-full max-w-[400px]">
      <CardContent className="flex flex-col items-center justify-around p-6">
        <Image
          src={src || "/placeholder.svg"}
          height={150}
          width={400}
          alt={title}
          className="rounded  "
        />
        <h3 className="font-semibold pt-4 text-center text-lg">{title}</h3>
        <p className="pt-2 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}

export function CarouselSize() {
  const items = [
    {
      src: "/projects/solux.png",
      title: "Solux - Online | IT E Learning Platform",
      description:
        "Solux the IT E Learning Platform that helps young developers to illuminate their journey in the aspect of project development and coding",
    },
    {
        src: "/projects/DGital.png",
        title: "DGital - Landing Page",
        description:
          "DGital is a dynamic graphic design firm dedicated to bringing your visual ideas to life. Specialized in logo creation and amazing graphic solutions.",
      },
      {
        src: "/projects/logo.png",
        title: "Centre Médical AFUNA - HMS",
        description:
          "CMA is a Medical Center found in Yaounde. This center is well known for its health services and equiped with cutting edge medical tools",
      },
    {
      src: "/projects/Mycar.png",
      title: "MYCAR Ingineering - Official Website",
      description:
        "MYCAR is a firm based in the construction of Access roads, bridge and excavations of rural areas in Cameroon",
    },
    {
      src: "/projects/Skill_Center.png",
      title: "Skill Aquisition Center - Logo Design",
      description:
        "Skill Acquisition Center - is one of the best center of the region where youth can acquire skills, Logo built by Novus Technologies",
    },
    {
      src: "/projects/spooky.png",
      title: "Unigine Squad TV - Streaming App",
      description:
        "Unigine Squad TV is a streaming website for gamers, All Interesting Streams and Tournaments will be ",
    },
    {
      src: "/projects/logo1.jpeg",
      title: "NkapLock",
      description: "Participated in the development of NkapLock Landing page. This is an App to secure your future savings and investments",
    },
    {
      src: "/projects/Tantorial.jpg",
      title: "Tantorial - Landing Page",
      description:
        "Tantorial is an E-Learning Platform that connects Skillful Teachers to students in order to share a similar goal",
    },
  ]

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-[1200px] mt-[8rem]"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {items.map((item, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
            <CustomCard src={item.src} title={item.title} description={item.description} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

