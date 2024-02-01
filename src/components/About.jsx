import React from "react";

const About = ({ dark }) => {
  return (
    <div
      className={`w-full flex flex-col md:flex-row justify-evenly py-2 ${
        dark ? "text-gray-400 bg-zinc-950" : "text-black bg-stone-300"
      }`}
    >
      <div className="w-[640px] p-2">
        <img className="h-[500px] rounded" src="/about.jpg" alt="" />
      </div>
      <div className="flex justify-evenly flex-col items-center">
        <h2 className={`${dark ? "text-gray-400" : "text-black"}`}>About Me</h2>
        <p className="md:w-[450px] w-screen text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
          excepturi qui vero quas sed reiciendis optio dicta eum natus. Beatae
          commodi modi similique, voluptatum consequuntur animi aut! Cupiditate
          facilis architecto veritatis ratione qui! Nemo perspiciatis unde
          explicabo vitae nostrum, quasi magnam eius culpa. Repellat, delectus.
          Explicabo eum porro labore accusamus?
        </p>
      </div>
    </div>
  );
};

export default About;
