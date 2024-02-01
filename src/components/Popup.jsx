import React from "react";
import { RxCross1 } from "react-icons/rx";

const Popup = ({ setPopupVisible, selectedImages, dark }) => {
  return (
    <div className="scroll absolute my-1 md:h-[45rem] h-[418px] rounded-lg bg-zinc-800 z-20 transition-all">
      <div>
        <div className="flex justify-between">
          <h1 className="p-4 text-zinc-300">Overview</h1>
          <RxCross1
            className="text-white bg-gray-900 p-1.5 font-bold mt-4 mr-3 rounded-full cursor-pointer active:scale-95"
            size={35}
            onClick={() => setPopupVisible(false)}
          />
        </div>
        <div>
          {selectedImages.map((img) => (
            <div
              className="w-full h-full p-2 flex flex-col items-center justify-center"
              key={img.id}
            >
              <img className="rounded-lg" src={img.url} alt="match numbers" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
