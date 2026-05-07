import { IoIosAdd } from "react-icons/io";

const Banner = () => {
  return (
    <div className="hero ">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold text-[#1F2937]">
            Friends to keep close in your life
          </h1>
          <p className="py-4 text-[#64748B]">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the <br /> relationships that matter most.
          </p>
          <button className="btn bg-[#244D3F] text-white font-semibold rounded-lg py-3">
            <IoIosAdd className="text-2xl text-white" />
            Add a Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
