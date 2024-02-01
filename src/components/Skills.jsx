import React from "react";

const Skills = ({ skills, dark }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${
        dark ? "bg-zinc-900" : "bg-zinc-200"
      } `}
    >
      <h2 className={`${dark ? "text-slate-400" : "text-black"}`}>Skills</h2>
      <div className="w-full flex flex-wrap items-center justify-evenly py-4">
        {skills.map((skill) => (
          <div
            title={skill.title}
            key={skill.name}
            className="flex flex-col items-center justify-between"
          >
            <img
              className="shadows p-4 rounded scale-90 transition-transform hover:scale-100"
              src={skill.url}
              alt="skill"
            />
            <h1
              className={`${
                dark ? "text-gray-400" : "text-black"
              } p-2 font-[Montserrat]`}
            >
              {skill.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
