import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="fixed w-[100%] h-[60px] top-0 z-10 flex items-center justify-around bg-neutral-silver">
      <div className="w-[110px] h-[100px]">
        <img
          src={require("../../asset/Img/Logo.png")}
          alt=""
          className="w-[200px] h-[100px] object-contain"
        />
      </div>
      <ul className="flex">
        <li className="text-[16px] px-[16px]">
          <Link to="/">Home</Link>
        </li>
        <li className="text-[16px] px-[16px]">
          <Link to="/">Feature</Link>
        </li>
        <li className="text-[16px] px-[16px]">
          <Link to="/">Community</Link>
        </li>
        <li className="text-[16px] px-[16px]">
          <Link to="/">Blog</Link>
        </li>
        <li className="text-[16px] px-[16px]">
          <Link to="/">Pricing</Link>
        </li>
      </ul>
      <div className="flex items-center">
        <div className="">
          <button className="w-[135px] h-[40px] text-[15px] text-neutral-silver bg-colorShade-shade1 rounded-[3px]">
            Register Now
            <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
