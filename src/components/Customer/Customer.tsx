import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Section from "../Section/Section";

function Customer() {
  return (
    <Section className="mt-[48px]">
      <div className="flex items-center">
        <div className="w-[35%]">
          <img
            src={require("../../asset/Img/image 9.png")}
            alt=""
            className="w-[326px] h-[326px] object-cover rounded-[8px]"
          />
        </div>
        <div className="w-[65%] ml-[49px]">
          <p className="text-[16px] text-left font-normal mb-4">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h1 className="text-[20px] text-primary font-semibold text-left mb-2">
            Tim Smith
          </h1>
          <p className="text-[16px] text-left font-normal mb-4">
            British Dragon Boat Racing Association
          </p>
          <div className="flex items-center mt-8">
            <div className="mr-5">
              <img src={require("../../asset/Img/Logo1.png")} alt="" />
            </div>
            <div className="mr-5">
              <img src={require("../../asset/Img/Logo-1.png")} alt="" />
            </div>
            <div className="mr-5">
              <img src={require("../../asset/Img/Logo-2.png")} alt="" />
            </div>
            <div className="mr-5">
              <img src={require("../../asset/Img/Logo-3.png")} alt="" />
            </div>
            <div className="mr-5">
              <img src={require("../../asset/Img/Logo-4.png")} alt="" />
            </div>
            <div className="mr-5">
              <img src={require("../../asset/Img/Logo-5.png")} alt="" />
            </div>

            <p className="ml-5 text-[20px] font-semibold text-primary">
              Meet all Customers
              <ArrowForwardIcon style={{ marginLeft: 1 }} />
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Customer;
