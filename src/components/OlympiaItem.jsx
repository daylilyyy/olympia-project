import React from "react";
import "./OlympiaItem.scss";

const OlympiaItem = ({ item, showImg }) => {
  const { id, name, imgurl } = item;
  return (
    <li className="OlympiaItem border-solid border-[#fdfbf9] border rounded-[10px] p-[20px] w-[200px] box-border flex-col item-center mb-[30px] mr-[30px] relative last:mr-[0px] hover:cursor-pointer" onClick={() => showImg(id)}>
      <strong className="text-[30px] font-['JalnanGothic'] font-bold text-[#040707] bg-[#fdfbf9] rounded-[50%] w-[40px] h-[40px] leading-[40px] block absolute left-[-20px] top-[-15px] text-center hover:bg-[#eb2529] ">{id}</strong>
      <div className="OlympiaImg">
        <img src={imgurl} alt={name} className="item-center h-[130px] w-[130px] rounded-[50%] transition-[0.5s] mt-[20px] block m-auto" />
      </div>
      <span className="text-center font-['JalnanGothic'] font-bold text-[#fdfbf9] pt-[20px] text-[20px] box-border block relative">{name}</span>
    </li>
  );
};

export default OlympiaItem;
