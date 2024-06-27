import * as React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Series1Img from "@/public/imgs/series-1.png";
import Series2Img from "@/public/imgs/series-2.png";
import Series3Img from "@/public/imgs/series-3.png";

type ProgramCardProps = {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string | StaticImageData;
  titleColor: string;
  href: string;
  descriptionHighlight: string;
  className?: string;
  blockClassName?: string;
};

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  titleColor,
  descriptionHighlight,
  className,
  href,
  blockClassName,
}) => (
  <section
    className={cn(
      "flex gap-10 px-16 pb-20 w-full bg-white max-md:px-5 max-md:max-w-full",
      className
    )}
  >
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto text-base max-md:max-w-full">
        <div
          className={cn("w-6 h-6 rotate-45 mb-4 bg-zinc-300", blockClassName)}
        />
        <h2
          className={`text-4xl font-bold leading-10 ${titleColor} max-md:max-w-full`}
        >
          {title}
        </h2>
        <p className="mt-6 leading-7 text-sky-950 max-md:max-w-full">
          <span className={`text-xl font-bold ${titleColor}`}>
            {descriptionHighlight}
          </span>{" "}
          <span className=" whitespace-pre-wrap">{description}</span>
        </p>
        <Link href={href} className="self-start px-9 py-2 mt-10 border border-solid border-sky-950 leading-[150%] text-sky-950 hover:bg-sky-950 hover:text-white max-md:px-5">
          {buttonText}
        </Link>
      </div>
    </div>
    <div className="flex flex-col w-6/12 max-md:w-full">
      <Image
        src={imageSrc}
        alt={`Illustration for ${title}`}
        width={500}
        height={375}
        className="grow w-full aspect-[1.33] max-md:mt-10 max-md:max-w-full"
      />
    </div>
  </section>
);

const MyComponent: React.FC = () => {
  const programs = [
    {
      title: "AI Impact Series",
      description:
        "the tangible impact of AI on society and industries, emphasizing how AI innovations are shaping our world for the better. By showcasing real-world applications and discussing their societal implications, we aim to raise awareness about the transformative potential of AI for human betterment.",
      buttonText: "View More",
      imageSrc: Series1Img,
      titleColor: "text-emerald-500",
      descriptionHighlight: "Explore",
      blockClassName: "bg-emerald-500",
      href: "/programs/ai-impact-series",
    },
    {
      title: "AI Master & Guest Speaker Series",
      description:
        "deep into the world of AI through advanced training, expert insights, and thought-provoking discussions. This series empowers individuals with the knowledge and skills needed to leverage AI for positive societal change while providing opportunities to learn from influential voices and thought leaders in the field.",
      buttonText: "View More",
      imageSrc: Series2Img,
      titleColor: "text-slate-600",
      descriptionHighlight: "Delve",
      className: "flex-row-reverse",
      blockClassName: "bg-slate-600",
      href: "/programs/ai-master-guest-speaker-series",
    },
    {
      title: "Change Maker Tour and Learn",
      description:
        "in the dynamic world of AI through our expansive series, designed to educate and inspire by connecting them with the forefront of technological innovation. Beyond traditional site visits to research labs and innovation centers, our program includes interactions with leading multinational corporations, venture capital insights, and engagements with groundbreaking startups and industry practitioners. \nBy witnessing AI in action and interacting with experts in the field, participants gain first-hand experience and are motivated to contribute to AI development efforts that drive positive societal impact, fulfilling our mission to empower individuals to harness the transformative potential of AI.",
      buttonText: "View More",
      imageSrc: Series3Img,
      titleColor: "text-purple-400",
      descriptionHighlight: "Immerse",
      blockClassName: "bg-purple-400",
      href: "/programs/change-maker-tour-and-learn",
    },
  ];

  return (
    <main className="flex flex-col bg-white">
      <Breadcrumb className="my-14 ml-14">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>Programs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>All Series</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {programs.map((program, index) => (
        <ProgramCard key={index} {...program} />
      ))}
    </main>
  );
};

export default MyComponent;
