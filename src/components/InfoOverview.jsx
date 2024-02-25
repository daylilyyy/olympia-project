import React from "react";

const InfoOverview = ({ item }) => {
  const { id, overview } = item;

  return (
    <div className="InfoOverview text-left overflow-y-auto max-h-[448px] max-w-[610px]">
      <strong className="text-[20px] text-[#fdfbf9] leading-normal block">
        {overview.split(". ").map((sentence, index) => (
          <p key={index}>{sentence}</p>
        ))}
      </strong>
    </div>
  );
};

export default InfoOverview;
