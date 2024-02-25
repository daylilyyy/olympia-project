import React from "react";
import OlympiaProfile from "./OlympiaProfile";

const OlympiaProfileInfo = ({ tab, showBox, content, menu }) => {
  return (
    <div className="OlympiaProfileInfo w-[700px] ml-[30px] text-center">
      <ul className="flex justify-around text-[#fdfbf9] pl-0 box-border pb-[30px]">
        {tab.map((item) => (
          <li className="border-solid border-[#fdfbf9] border rounded-[10px] font-['JalnanGothic'] text-[30px] w-[30%] text-center align-middle h-[50px] list-none cursor-pointer hover:bg-[#eb2529] pt-[5px]" key={item.id} onClick={() => showBox(item.id)}>
            {item.text}
          </li>
        ))}
      </ul>
      <OlympiaProfile content={content} menu={menu} />
    </div>
  );
};

export default OlympiaProfileInfo;
