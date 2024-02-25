import React, { useState } from "react";

const OlympiaPic = ({ item }) => {
  const { id, name, img1, img2, img3, img4, img5 } = item;
  const [topimg, setTopImg] = useState(img1);

  const changeImg = (bottomimg) => {
    setTopImg(bottomimg);
  };
  return (
    <div className="OlympiaPic p-[10px] box-border text-center">
      <div className="topimg mb-[55px]">
        <img src={topimg} alt={name} className="m-auto w-[400px] h-[400px] rounded-[10px] border-[1px] border-solid border-[#fdfbf9]" />
      </div>
      <div className="bottomimg flex justify-between">
        <img src={img1} alt={name} onClick={() => changeImg(img1)} className="picinfo" />
        <img src={img2} alt={name} onClick={() => changeImg(img2)} className="picinfo" />
        <img src={img3} alt={name} onClick={() => changeImg(img3)} className="picinfo" />
        <img src={img4} alt={name} onClick={() => changeImg(img4)} className="picinfo" />
        <img src={img5} alt={name} onClick={() => changeImg(img5)} className="picinfo" />
      </div>
    </div>
  );
};

export default OlympiaPic;
