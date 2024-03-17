import React from "react";
import Section from "../Section/Section";

function Achievements() {
  return (
    <div className="mt-[48px] py-[64px] bg-neutral-silver">
      <Section className="flex items-center justify-between">
        <div className="">
          <h1 className="text-[36px] font-semibold leading-[44px]">
            Helping a local <br />{" "}
            <span className="text-primary">business reinvent itself</span>
          </h1>
          <p className="text-[16px] text-[#18191F] mt-2">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="mx-[30px]">
            <div className="flex items-center my-8">
              <img src={require("../../asset/Icon/User.png")} alt="" />
              <div className="ml-4">
                <p className="text-[28px] font-bold text-neutral-darkGrey">
                  2,245,341
                </p>
                <p className="text-[16px] text-neutral-grey">Members</p>
              </div>
            </div>
            <div className="flex items-center my-8">
              <img src={require("../../asset/Icon/Cursor.png")} alt="" />
              <div className="ml-4">
                <p className="text-[28px] font-bold text-neutral-darkGrey">
                  828,867
                </p>
                <p className="text-[16px] text-neutral-grey">Event Bookings</p>
              </div>
            </div>
          </div>
          <div className="mx-[30px]">
            {" "}
            <div className="flex items-center my-8">
              <img src={require("../../asset/Icon/Hand.png")} alt="" />
              <div className="ml-4">
                <p className="text-[28px] font-bold text-neutral-darkGrey">
                  46,328
                </p>
                <p className="text-[16px] text-neutral-grey">Clubs</p>
              </div>
            </div>
            <div className="flex items-center my-8">
              <img src={require("../../asset/Icon/Wallet.png")} alt="" />
              <div className="ml-4">
                <p className="text-[28px] font-bold text-neutral-darkGrey">
                  1,926,436
                </p>
                <p className="text-[16px] text-neutral-grey">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Achievements;
