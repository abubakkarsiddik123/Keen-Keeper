import Image from "next/image";
import MyNaveLink from "./MyNaveLink";

const NavBar = () => {
  return (
    <div className="shadow-sm bg-base-100">
      <div className="navbar max-w-[1600px] mx-auto px-2 sm:px-4 md:px-6">
        
        <div className="navbar-start">
          <Image
            src="/logo.png"
            alt="keen-keeper"
            width={141}
            height={31}
            className="w-[80px] sm:w-[110px] md:w-[125px] lg:w-[141px] h-auto"
          />
        </div>

        <div className="navbar-end">
          <div className="scale-75 sm:scale-90 md:scale-100 origin-right">
            <MyNaveLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;