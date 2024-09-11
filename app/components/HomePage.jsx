import Image from "next/image"
import test from "../../public/test.jpeg"
import { PROFILE } from "../constants/text"
import { FaDownload } from "react-icons/fa6"

export const HomePage = () => {
  return (
    <div className="my-24">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image src={test}
              width={100}
              height={100}
              alt="test"
              className="rounded-full border-2 border-slate-400"/>
              <h1 className="text-2xl font-bold">{PROFILE.name}</h1>
              <p className="text-2xl font-bold">{PROFILE.location}</p>
              <a href="/HK.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-x-2 rounded-full bg-gray-300
              px-3 py-2 text-sm font-semibold tracking-tight text-slate-950
              hover:text-teal-800">Download CV<FaDownload/>
              </a>
          <p className="my-10 text-center text-5xl font-semibold
          tracking-tighter lg:text-[10rem]">{PROFILE.message}</p>
          <p className="my-10 max-w-2xl p-l text-center text-xl
          tracking-tight text-slate-400 lg:text-3xl">
            I am a software engineer{" "}
            <span className="border-b font-medium text-slate-200">
              College Student
            </span>{" "}
            who is graduating in 2025 and looking
            for full time employment. I specialize in both{" "}
            <span className="border-b font-medium text-slate-200">Front End</span>{" "}
            and{" "}
            <span className="border-b font-medium text-slate-200">Back End</span>{" "}
            development.
          </p>
        </div>
    </div>
  )
}
