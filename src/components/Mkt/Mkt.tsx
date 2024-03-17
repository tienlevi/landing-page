import ArrowForward from "@mui/icons-material/ArrowForward";
import Section from "../Section/Section";

function Mkt() {
  return (
    <div className="mt-[48px]">
      <div className="text-center">
        <h1 className="text-[36px] font-semibold leading-10">
          Caring is the new marketing
        </h1>
        <p className="mt-3 text-[16px] text-neutral-grey leading-6">
          The Nexcent blog is the best place to read about the latest membership
          insights,
          <br /> trends and more. See who's joining the community, read about
          how our community <br />
          are increasing their membership income and lot's more.​
        </p>
      </div>
      <Section className="flex justify-center mt-3">
        <div className="relative w-[30%] mx-6">
          <img src={require("../../asset/Img/image 18.png")} alt="" />
          <div className="absolute w-[80%] left-[50%] translate-x-[-50%] shadow bg-neutral-silver mt-[-100px] p-4 text-center rounded-[8px]">
            <h1>Creating Streamlined Safeguarding Processes with OneRen</h1>
            <button className="mt-4 text-primary text-[20px]">
              Readmore <ArrowForward style={{ marginLeft: 1 }} />
            </button>
          </div>
        </div>
        <div className="relative w-[30%] mx-6">
          <img src={require("../../asset/Img/image 18.png")} alt="" />
          <div className="absolute w-[80%] left-[50%] translate-x-[-50%] shadow bg-neutral-silver mt-[-100px] p-4 text-center rounded-[8px]">
            <h1>Creating Streamlined Safeguarding Processes with OneRen</h1>
            <button className="mt-4 text-primary text-[20px]">
              Readmore <ArrowForward style={{ marginLeft: 1 }} />
            </button>
          </div>
        </div>
        <div className="relative w-[30%] mx-6">
          <img src={require("../../asset/Img/image 18.png")} alt="" />
          <div className="absolute w-[80%] left-[50%] translate-x-[-50%] shadow bg-neutral-silver mt-[-100px] p-4 text-center rounded-[8px]">
            <h1>Creating Streamlined Safeguarding Processes with OneRen</h1>
            <button className="mt-4 text-primary text-[20px]">
              Readmore <ArrowForward style={{ marginLeft: 1 }} />
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Mkt;
