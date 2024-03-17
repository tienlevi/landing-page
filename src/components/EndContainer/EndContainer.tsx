import { ArrowForward } from "@mui/icons-material";

function EndContainer() {
  return (
    <div className="bg-neutral-silver py-8 mt-[152px]">
      <h1 className="text-center text-[64px] font-semibold leading-[75px]">
        Pellentesque suscipit <br /> fringilla libero eu.
      </h1>
      <button className="flex items-center justify-center w-[178px] h-[52px] mx-auto mt-8 bg-primary rounded-[4px] text-neutral-silver">
        Get a Demo <ArrowForward style={{ marginLeft: 15 }} />
      </button>
    </div>
  );
}

export default EndContainer;
