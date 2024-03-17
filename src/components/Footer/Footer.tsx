import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PublicIcon from "@mui/icons-material/Public";
import Section from "../Section/Section";

function Footer() {
  return (
    <footer className="bg-neutral-black py-[64px] px-[165px]">
      <Section className="flex justify-between">
        <div>
          <img src={require("../../asset/Img/Logo.png")} alt="" />
          <p className="mt-8 text-neutral-silver text-[14px]">
            Copyright © 2020 Nexcent ltd. <br />
            All rights reserved
          </p>
          <div className="mt-10">
            <InstagramIcon
              style={{
                color: "white",
                backgroundColor: "#4d4d4d",
                width: 40,
                height: 40,
                padding: 8,
                marginRight: 10,
                borderRadius: "100%",
              }}
            />
            <PublicIcon
              style={{
                color: "white",
                backgroundColor: "#4d4d4d",
                width: 40,
                height: 40,
                padding: 8,
                marginRight: 10,
                borderRadius: "100%",
              }}
            />
            <TwitterIcon
              style={{
                color: "white",
                backgroundColor: "#4d4d4d",
                width: 40,
                height: 40,
                padding: 8,
                marginRight: 10,
                borderRadius: "100%",
              }}
            />
            <FacebookIcon
              style={{
                color: "white",
                backgroundColor: "#4d4d4d",
                width: 40,
                height: 40,
                padding: 8,
                marginRight: 10,
                borderRadius: "100%",
              }}
            />
          </div>
        </div>
        <div>
          <h1 className="text-[20px] text-neutral-silver mb-5 font-semibold">
            Company
          </h1>
          <ul>
            <li className="text-[14px] text-neutral-silver mb-[14px]">
              About us
            </li>
            <li className="text-[14px] text-neutral-silver mb-[14px]">Blog</li>
            <li className="text-[14px] text-neutral-silver mb-[14px]">
              Contact us
            </li>
            <li className="text-[14px] text-neutral-silver mb-[14px]">
              Pricing
            </li>
            <li className="text-[14px] text-neutral-silver mb-[14px]">
              Testimonials
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-[20px] text-neutral-silver mb-5 font-semibold">
            Support
          </h1>
          <ul>
            <li className="text-[14px] text-neutral-silver mb-[14px]">
              Help center
            </li>
            <li className="text-[14px] text-neutral-silver mb-[14px]">Blog</li>
            <li className="text-[14px] text-neutral-silver mb-[14px]">
              Terms of service
            </li>
            <li className="text-[14px] text-neutral-silver mb-[14px]">
              Privacy policy
            </li>
            <li className="text-[14px] text-neutral-silver mb-[14px]">
              Status
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-[20px] text-neutral-silver mb-5 font-semibold">
            Stay up to date
          </h1>
          <input
            type="text"
            placeholder="Your email address"
            className="w-[255px] h-[40px] rounded-[8px] bg-neutral-darkGrey text-neutral-silver pl-2"
          />
        </div>
      </Section>
    </footer>
  );
}

export default Footer;
