import { EXPERIENCES } from "../constants/text";
import Image from "next/image";

export const WorkExperience = () => {
  return (
    <div>
      <h2 className='my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-100'>
        Work Experience
      </h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-16"> 
            <div className="flex flex-wrap items-center p-4 lg:justify-center">
              <div className="mx-4">
                <Image
                  src={experience.img}
                  alt={experience.company}
                  width={80}
                  height={80}
                  className="mb-2 mr-2 rounded-full border border-slate-400"
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <p className="mb-2 text-sm">{experience.year}</p>
                <h6 className="mb-2 text-sm">{experience.role}</h6>
                <span className="text-sm">{experience.company}</span>
                <div className="mb-4">
                  {experience.description.map((para, index) => (
                    <p key={index} className="mb-4">{para}</p>
                  ))}
                </div>
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded-full border border-slate-400 px-2 py-1 font font-medium text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};