import React, { useEffect, useState } from "react";

import olympiaData from "../assets/api/olympiaData";
import olympiaImgData from "../assets/api/olympiaImgData";
import olympiaTab from "../assets/api/olympiaTab";
import olympiaContents from "../assets/api/olympiaContents";

import OlympiaList from "./OlympiaList";
import OlympiaPicInfo from "./OlympiaPicInfo";
import OlympiaProfileInfo from "./OlympiaProfileInfo";

const Main = () => {
  const [data, setData] = useState(olympiaData);
  const [image, setImage] = useState(olympiaImgData);
  const [tab, setTab] = useState(olympiaTab);
  const [content, setContent] = useState(olympiaContents);
  const [menu, setMenu] = useState(1);

  const showImg = (id) => {
    setMenu(1);
    setImage(olympiaImgData.filter((item) => item.id === id));
    setContent(olympiaContents.filter((item) => item.id === id));
  };

  const showBox = (id) => {
    setMenu(id);
    setTab(tab.map((item) => (item.id === id ? { ...item, on: true } : { ...item, on: false })));
  };

  useEffect(() => {
    setContent(olympiaContents.filter((item) => item.id === menu));
  }, []);

  useEffect(() => {
    setImage(olympiaImgData.filter((item) => item.id === 1));
  }, []);

  return (
    <div>
      <div className="wrap w-[100%] bg-[#040707]">
        <section className="content ">
          <div className="inner pt-[30px] mb-[30px] mx-auto w-[1200px]">
            <h2 className=" mb-[30px] border-b-[4px] border-solid border-[#eb2529]">
              <img className="w-[50%] mb-[30px] m-auto" src="./images/olympialogo.png" alt="" />
            </h2>
            <OlympiaList data={data} showImg={showImg} />
          </div>
        </section>
        <section className="info m-auto w-[1200px] h-[600px] flex border-b-[4px] border-[#eb2529]">
          <OlympiaPicInfo image={image} />
          <OlympiaProfileInfo tab={tab} menu={menu} showBox={showBox} content={content} />
        </section>
      </div>
    </div>
  );
};

export default Main;
