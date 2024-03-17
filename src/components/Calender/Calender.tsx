import Section from "../Section/Section";

function Calender() {
  return (
    <div className="mt-[48px]">
      <Section className="">
        <div className="flex items-center">
          <div className="w-[35%]">
            <img
              src={require("../../asset/Img/pana.png")}
              alt=""
              className="w-[442px] h-[442px] object-cover"
            />
          </div>
          <div className="w-[65%] ml-[49px]">
            <h1 className="text-[36px] text-neutral-darkGrey font-semibold text-left">
              How to design your site footer like we did
            </h1>
            <p className="mt-4 text-[16px] text-left font-normal">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
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

export default Calender;
