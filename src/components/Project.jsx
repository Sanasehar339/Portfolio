import React, { useRef, useState } from "react";
import Popup from "./Popup";
import { motion, useScroll, useTransform } from "framer-motion";

const Project = ({ projects, dark }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageClick = (img) => {
    setSelectedImages(img);
    setPopupVisible(true);
  };

  const images = [
    [
      { id: "aaa", url: "/Projects/Match-numbers/first.png" },
      { id: "bbb", url: "/Projects/Match-numbers/second.png" },
      { id: "ccc", url: "/Projects/Match-numbers/third.png" },
      { id: "ddd", url: "/Projects/Match-numbers/fourth.png" },
    ],
    [
      { id: "eee", url: "/Projects/Tenzies/first.png" },
      { id: "fff", url: "/Projects/Tenzies/second.png" },
      { id: "ggg", url: "/Projects/Tenzies/third.png" },
    ],
    [
      { id: "hhh", url: "/Projects/Quiz/first.png" },
      { id: "iii", url: "/Projects/Quiz/second.png" },
      { id: "jjj", url: "/Projects/Quiz/third.png" },
      { id: "kkk", url: "/Projects/Quiz/fourth.png" },
      { id: "lll", url: "/Projects/Quiz/fifth.png" },
    ],
    [
      { id: "mmm", url: "/Projects/Recipe/first.png" },
      { id: "nnn", url: "/Projects/Recipe/second.png" },
      { id: "ooo", url: "/Projects/Recipe/third.png" },
      { id: "ppp", url: "/Projects/Recipe/fourth.png" },
      { id: "qqq", url: "/Projects/Recipe/fifth.png" },
    ],
    [
      { id: "rrr", url: "/Projects/Tack-Tracker/first.png" },
      { id: "sss", url: "/Projects/Tack-Tracker/second.png" },
      { id: "ttt", url: "/Projects/Tack-Tracker/third.png" },
      { id: "uuu", url: "/Projects/Tack-Tracker/fourth.png" },
    ],
  ];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  return (
    <div
      className={`sm:w-[80rem] md:w-full ${
        dark ? "bg-black/80" : "bg-zinc-300"
      }  overflow-x-auto`}
    >
      <div className="md:w-full flex flex-col items-center md:relative">
        {popupVisible && (
          <div className="absolute w-full h-[100%] bg-black/70 z-10"></div>
        )}
        <h2
          className={`${
            dark ? "text-slate-400" : "text-black"
          } text-4xl text-center`}
        >
          Projects
        </h2>
        <div
          className={`flex max-w-full flex-wrap justify-center  ${
            popupVisible && "pointer-events-auto"
          }`}
        >
          <motion.div
            ref={ref}
            style={{
              scale: scale,
              opacity: opacity,
            }}
            className="md:w-full w-[25rem] flex flex-row md:flex-wrap md:justify-center relative items-center"
          >
            {projects.map((img, index) => (
              <div key={img.id} className="m-1 bg-neutral-600 rounded-lg">
                <img
                  className="max-w-[22rem] md:w-full md:h-full scale-95 transition-transform duration-300 hover:scale-100 rounded-xl  shadow m-2 cursor-pointer "
                  src={img.url}
                  onClick={() => handleImageClick(images[index])}
                  alt="project"
                />
              </div>
            ))}
          </motion.div>

          {popupVisible && (
            <Popup
              setPopupVisible={setPopupVisible}
              selectedImages={selectedImages}
              dark={dark}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
