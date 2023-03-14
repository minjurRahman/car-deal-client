import React from "react";
import { Button } from "react-daisyui";
const Reviews3 = () => {
  return (
    <div className="flex flex-col lg:flex-row container ">
      <div className="flex flex-col justify-center xl:w-5/12 gap-5 p-8">
        <h1 className="text-6xl font-bold">The Last Sold</h1>
        <h4 className="text-justify">
          The Last Car sold from our website is here. You can check out here to explore our web site.
          The Last Car sold from our website is here. You can check out here to explore our web site.
          The Last Car sold from our website is here. You can check out here to explore our web site.
        </h4>
        <Button className="sm:w-5/12 sm:self-center lg:self-start mt-12 capitalize text-base rounded-3xl">
          Equipments
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center mt-12 lg:mt-64 gap-2 pl-5 xl:pl-56 ">
        <div>
          <img
            src='https://media.wired.com/photos/63b8d0a771c6b526845f15a6/16:9/w_2400,h_1350,c_limit/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg'
            alt=""
            className="w-[10rem] sm:w-[22rem] 2xl:w-[32rem]  "
          />
        </div>

        <div className="flex gap-2">
          <img
            src='https://www.topgear.com/sites/default/files/2022/07/6_0.jpg'
            alt=""
            className="w-[6rem] sm:w-[16rem] 2xl:w-[22rem] h-5/6 block "
          />
          <img
            src='https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Mahindra-Scorpio-N-300620221053.jpg&w=872&h=578&q=75&c=1'
            alt=""
            className="w-[10rem] sm:w-[22rem] 2xl:w-4/6 h-3/6 block "
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews3;