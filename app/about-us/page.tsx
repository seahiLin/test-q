import * as React from "react";
import Image from "next/image";
import AgiiHero from "@/public/imgs/agii-hero.png";
import { cn } from "@/lib/utils";
import JoinUsIcon from "@/public/imgs/join-us.svg";

type SectionProps = {
  title: React.ReactNode;
  content: React.ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ title, content, className }) => (
  <section
    className={cn(
      "flex gap-5 justify-between max-md:flex-wrap px-10 py-20 mt-7 rounded-[32px] max-md:px-5 max-md:max-w-full",
      className
    )}
  >
    <h2 className="px-5 text-5xl font-black leading-[150%] max-md:text-4xl">
      {title}
    </h2>
    <div className="h-auto w-[1px] bg-sky-950" />
    <p className="flex-1 text-lg leading-8 max-md:max-w-full flex flex-col justify-center">
      {content}
    </p>
  </section>
);

export default async function AGIIWebsite() {
  return (
    <div className="flex flex-col bg-white">
      <main>
        <section className="relative flex flex-col justify-center items-center w-full text-center leading-[150%] min-h-[360px] text-sky-950 max-md:px-5 max-md:max-w-full">
          <Image
            src={AgiiHero}
            alt="Background image"
            width={1200}
            height={456}
            className="w-full h-auto z-0 absolute top-0 left-0"
          />
          <div className="flex relative flex-col mt-20 mb-1 px-16 py-20 max-md:mt-10 max-md:max-w-full">
            <h1 className="self-center text-5xl font-black max-md:text-4xl">
              Welcome to AGII
            </h1>
            <p className="mt-8 text-xl font-light max-md:max-w-full max-md:text-lg">
              Augmented General Intelligence for Innovations
            </p>
          </div>
        </section>

        <article className="z-10 relative flex flex-col px-10 pt-20 pb-10 w-full text-sky-950 max-md:px-5 max-md:max-w-full">
          <Section
            className=" bg-gradient-to-b from-[#E5EEFF] to-[#F9FBFF]"
            title={
              <>
                <span className="text-5xl">Who</span>
                <br />
                <span className="text-4xl">We Are</span>
              </>
            }
            content={
              <>
                <p className="text-base leading-7 max-md:max-w-full max-md:text-sm">
                  <span className="text-2xl font-bold">Based </span>
                  <span className="text-lg font-bold">in Singapore</span>
                  <span className="text-lg">
                    , AGII is a dynamic community of AI enthusiasts committed to
                    exploring how AI can enhance and transform human
                    capabilities across personal and professional realms.
                  </span>
                </p>
                <p className="mt-4 max-md:max-w-full max-md:text-sm">
                  We aim to engage the younger generation and foster an
                  environment of learning and exchange, enabling them to adapt
                  to and participate in the development of AI technologies.
                </p>
                <p className="mt-4 max-md:max-w-full max-md:text-sm">
                  AGII is committed to building a diverse and inclusive space
                  that promotes lifelong learning, entrepreneurship, and
                  philanthropy, empowering members to navigate the complexities
                  of AI development effectively.
                </p>
              </>
            }
          />

          <Section
            className="flex-row-reverse bg-gradient-to-b from-[#EAF6F1] to-[#F8FCFA]"
            title={
              <>
                <span className="text-5xl">What</span>
                <br />
                <span className="text-4xl">We Do</span>
              </>
            }
            content={
              <p className="text-base leading-7 max-md:max-w-full max-md:text-sm">
                <span className="text-2xl font-bold">We</span>
                <span className="text-lg">
                  {" "}
                  harness the power of education, conversation, and
                  collaboration to integrate AI innovations into everyday life.
                  Our engaging events, workshops, and training sessions
                  cultivate understanding, ignite curiosity, and connect
                  individuals eager to shape AI&#39;s future.
                </span>
              </p>
            }
          />

          <Section
            className="bg-gradient-to-b from-[#FCF5E9] to-[#FEFBF6]"
            title={
              <>
                <span className="text-5xl">Why</span>
                <br />
                <span className="text-4xl">AGII</span>
              </>
            }
            content={
              <p className="my-auto text-lg leading-8 max-md:max-w-full max-md:text-sm">
                <span className="font-bold">&quot;</span>
                <span className="text-2xl font-bold">Augmented </span>
                <span className="font-bold">
                  {" "}
                  General Intelligence for Innovations&quot;{" "}
                </span>
                reflects our belief that AI should augment, not replace, human
                intelligence. By enhancing human capabilities, AI can boost
                productivity and enable more high-value work.
              </p>
            }
          />

          <div className="flex justify-center items-center self-center px-5 mt-28 w-full text-5xl font-black leading-[72px] max-w-[1200px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            <div className="flex flex-col max-w-full w-[178px] max-md:text-4xl">
              <Image
                src={JoinUsIcon}
                alt=""
                width={32}
                height={32}
                className="self-center"
              />
              <h2 className="mt-2.5 max-md:text-4xl">Join Us</h2>
            </div>
          </div>
          <p className="self-center mt-4 mb-7 text-lg leading-8 text-center max-md:max-w-full max-md:text-sm">
            Join us on our mission to forge a hub for responsible AI development
            and innovation.
            <br />
            Together, let&#39;s tackle AI&#39;s challenges and opportunities,
            and craft a future where technology uplifts humanity.
          </p>
        </article>
      </main>
    </div>
  );
}
