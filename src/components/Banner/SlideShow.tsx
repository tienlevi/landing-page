import React from "react";

function SlideShow() {
  return (
    <div className="relative h-[420px] bg-neutral-silver">
      <div className="flex w-[1000px] absolute left-[50%] top-[25%] translate-x-[-50%] translate-y-[-50%]">
        <div className="absolute w-[450px] h-[195px]">
          <h1 className="font-bold text-[44px] text-neutral-darkGrey">
            Lessons and insights{" "}
            <span className="text-primary">from 8 years</span>
          </h1>
          <p className="mt-3 text-[12px] text-neutral-grey">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="mt-4 w-[90px] h-[35px] text-neutral-silver bg-primary rounded-[3px]">
            Register
          </button>
        </div>
        <div className="absolute right-0 w-[275px]">
          <img
            src={require("../../asset/Img/Screenshot 2024-01-12 114502.png")}
            alt=""
            className="w-[275px] h-[280px]"
          />
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
