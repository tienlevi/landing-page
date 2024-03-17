function Clients() {
  return (
    <div className="mt-5">
      <div className="mb-4">
        <h1 className="text-[36px] text-center text-neutral-darkGrey font-semibold">
          Our Client
        </h1>
        <p className="text-[16px] text-center font-normal">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex items-center justify-around mt-[44px] px-[144px]">
        <div className="">
          <img src={require("../../asset/Img/Logo1.png")} alt="" />
        </div>
        <div className="">
          <img src={require("../../asset/Img/Logo-2.png")} alt="" />
        </div>
        <div className="">
          <img src={require("../../asset/Img/Logo-3.png")} alt="" />
        </div>
        <div className="">
          <img src={require("../../asset/Img/Logo-4.png")} alt="" />
        </div>
        <div className="">
          <img src={require("../../asset/Img/Logo-5.png")} alt="" />
        </div>
        <div className="">
          <img src={require("../../asset/Img/Logo-6.png")} alt="" />
        </div>
        <div className="">
          <img src={require("../../asset/Img/Logo-6.png")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Clients;
