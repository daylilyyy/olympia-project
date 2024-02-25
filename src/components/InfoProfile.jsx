import React from "react";

const InfoProfile = ({ item }) => {
  const { id, name, korName, birth, nationality, height, weight } = item;

  return (
    <div className="InfoProfile text-left">
      <h3 className="text-[40px] font-['JalnanGothic'] text-[#fdfbf9] m-[0px] font-bold">{name}</h3>
      <span className="text-[20px] font-bold text-[#eb2529] mt-[10px] mb-[20px] font-['JalnanGothic'] block">{korName}</span>
      <hr />
      <strong className="strong pt-[30px]">Birth</strong>
      <p className="profilep">{birth}</p>
      <strong className="strong">Nationality</strong>
      <p className="profilep">{nationality}</p>
      <strong className="strong">Height</strong>
      <p className="profilep">{height}</p>
      <strong className="strong">Weight</strong>
      <p className="profilep">{weight}</p>
    </div>
  );
};

export default InfoProfile;
