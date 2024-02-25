import React from "react";
import InfoOverview from "./InfoOverview";
import InfoProfile from "./InfoProfile";
import Infocarrer from "./InfoCareer";

const OlympiaProfile = ({ content, menu }) => {
  return (
    <div className="OlympiaProfile pt-[10px] px-[20px] pb-[20px] w-[650px] h-[480px] box-border border-[1px] border-solid border-[#fdfbf9] rounded-[10px] inline-block">
      {menu === 1 && content.map((item) => <InfoProfile item={item} key={item.id} />)}
      {menu === 2 && content.map((item) => <InfoOverview item={item} key={item.id} />)}
      {menu === 3 && content.map((item) => <Infocarrer item={item} key={item.id} />)}
    </div>
  );
};

export default OlympiaProfile;
