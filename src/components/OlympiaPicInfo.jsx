import React from "react";
import OlympiaPic from "./OlympiaPic";

const OlympiaPicInfo = ({ image }) => {
  return (
    <div className="OlympiaPicInfo w-[500px] p-[10px] box-border">
      {image.map((item) => (
        <OlympiaPic key={item.id} item={item} />
      ))}
    </div>
  );
};

export default OlympiaPicInfo;
