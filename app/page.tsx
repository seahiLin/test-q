import * as React from "react";
import Image from "next/image";
import HeroImg from "@/public/imgs/hero.png";

type MissionStatementProps = {
  content: Array<React.ReactNode>;
};

const MissionStatement: React.FC<MissionStatementProps> = ({ content }) => (
  <div className="flex flex-col grow self-stretch pb-4 text-lg leading-8 text-sky-950 max-md:text-base max-md:max-w-full">
    {content.map((paragraph, index) => (
      <p
        key={index}
        className={
          index === 0
            ? "text-base leading-7 max-md:max-w-full"
            : "mt-4 max-md:max-w-full"
        }
      >
        {paragraph}
      </p>
    ))}
  </div>
);

export default async function AGIIWebsite() {
  const missionContent = [
    <>
      <span className="text-2xl font-bold leading-10 text-sky-950">AGII </span>
      <span className="text-lg text-sky-950">
        is to bridge the gap between AI innovation and societal impact by
        creating a vibrant community dedicated to educating, inspiring, and
        empowering individuals to harness the transformative potential of AI for
        human betterment.
      </span>
    </>,
    "We aim to engage the younger generation and foster an environment of learning and exchange, enabling them to adapt to and participate in the development of AI technologies.",
    "AGII is committed to building a diverse and inclusive space that promotes lifelong learning, entrepreneurship, and philanthropy, empowering members to navigate the complexities of AI development effectively.",
  ];

  return (
    <div className="flex flex-col bg-white relative">
      <Image
        src={HeroImg}
        alt="AGII Banner"
        width={1200}
        height={456}
        className="w-full aspect-[2.63] max-md:max-w-full"
      />
      <main className="flex justify-center items-center px-16 py-20 w-full bg-white max-1200:px-5 max-md:py-5 max-md:max-w-full">
        <section className="w-full max-w-[1200px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col max-md:ml-0 max-md:w-full">
              <div className="grow self-stretch px-5 pb-20 text-4xl font-bold border-r border-solid border-sky-950 leading-[60px] text-sky-950 max-md:mt-5 max-md:pb-5 max-md:leading-8">
                <span className="text-6xl font-black text-sky-950 max-md:text-4xl">
                  MISSION
                </span>
                <br />
                <span className="font-medium max-md:text-3xl">STATEMENT</span>
              </div>
            </div>
            <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
              <MissionStatement content={missionContent} />
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}
