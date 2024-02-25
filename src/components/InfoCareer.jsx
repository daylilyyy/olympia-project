import React from "react";

const InfoCareer = ({ item }) => {
  const { id, career } = item;
  return (
    <div className="InfoCareer text-left overflow-y-auto max-h-[448px] max-w-[610px]">
      {career.map((item, index) => (
        <div key={index}>
          <strong className="text-[20px] text-[#eb2529] leading-normal block">{item}</strong>
        </div>
      ))}
    </div>
  );
};

export default InfoCareer;
