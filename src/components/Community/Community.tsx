import React from "react";
import Section from "../Section/Section";

function Community() {
  return (
    <div className="mt-8">
      <div className="mb-4">
        <h1 className="text-[36px] text-neutral-darkGrey font-semibold text-center">
          Manage your entire community <br /> in a single system
        </h1>
        <p className="text-[16px] text-center font-normal mt-2">
          Who is Nextcent suitable for?
        </p>
      </div>
      <Section className="mt-4">
        <div className="flex">
          <div className="w-[33%] h-[300px] mx-3">
            <img
              src={require("../../asset/Img/Icon-Community2.png")}
              alt=""
              className="mx-auto mb-4"
            />
            <h1 className="mb-2 text-[38px] font-bold text-center text-neutral-darkGrey">
              Membership Organisations
            </h1>
            <p className="text-[14px] text-neutral-grey text-center">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="w-[33%] h-[300px] mx-3">
            <img
              src={require("../../asset/Img/Icon-Community1.png")}
              alt=""
              className="mx-auto mb-4"
            />
            <h1 className="mb-2 text-[38px] font-bold text-center text-neutral-darkGrey">
              National Associations
            </h1>
            <p className="text-[14px] text-neutral-grey text-center">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="w-[33%] h-[300px] mx-3">
            <img
              src={require("../../asset/Img/Icon-Community3.png")}
              alt=""
              className="mx-auto mb-4"
            />
            <h1 className="mb-2 text-[38px] font-bold text-center text-neutral-darkGrey">
              Clubs And Groups
            </h1>
            <p className="text-[14px] text-neutral-grey text-center">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </Section>
      <Section className="mt-[42px]">
        <div className="flex items-center">
          <div className="w-[35%]">
            <img
              src={require("../../asset/Img/Frame 35.png")}
              alt=""
              className="w-[442px] h-[442px] object-cover"
            />
          </div>
          <div className="w-[65%] ml-[49px]">
            <h1 className="text-[36px] text-neutral-darkGrey font-semibold text-left">
              The unseen of spending three years at Pixelgrade
            </h1>
            <p className="mt-4 text-[16px] text-left font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="w-[151px] h-[52px] mt-8 flex items-center justify-center text-neutral-silver bg-primary rounded-[4px]">
              Learn more
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Community;
