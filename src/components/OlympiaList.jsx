import React from "react";
import OlympiaItem from "./OlympiaItem.jsx";

const OlympiaList = ({ data, showImg }) => {
  return (
    <ul className="OlympiaList flex border-b-[4px] mb-[0px] border-solid border-[#eb2529] justify-around">
      {data.map((item) => (
        <OlympiaItem key={item.id} item={item} showImg={showImg} />
      ))}
    </ul>
  );
};

export default OlympiaList;
