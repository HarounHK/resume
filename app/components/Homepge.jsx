import { FaDownload } from "react-icons/fa";
import { SOCIALS } from "../constants/text"; 
import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { Footer } from "./Footer";

export const Homepge = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center xl:justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6 text-5xl xl:text-[80px] leading-[1.1] font-semibold">
              Hello Im <br />
              <span className="text-teal-400">Haroun Kassouri</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Full Stack Software Engineer with 3 years of hands-on programming experience.
              Proficient in Angular, React, and Next.js.
            </p>
            <div className="flex flex-col xl:flex-row items-center xl:items-start gap-4 xl:gap-8">
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center justify-center mx-auto gap-x-2 rounded-full bg-slate-950 px-5 py-3 text-teal-400 text-sm font-semibold tracking-tight border-2 border-teal-400 hover:bg-teal-400 hover:text-black transition-colors"
              >
                Download CV
                <FaDownload className="text-xl" />
              </a>
              <div className="mt-4 xl:mt-0 flex justify-center gap-6">
                {SOCIALS.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-xl">
                      {item.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0"> 
            <Profile />
          </div>
        </div>
      </div>
      <Statistics />
    </section>
  );
};