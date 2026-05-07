
import Image from "next/image";
import MyNaveLink from "./MyNaveLink";

const NavBar = () => {
  return (
    <div className="shadow-sm bg-base-100">
      <div className="navbar max-w-[1600px] mx-auto px-3 sm:px-4 md:px-6">
        
        <div className="navbar-start">
          <Image
            src="/logo.png"
            alt="keen-keeper"
            width={141}
            height={31}
            className="w-[110px] sm:w-[125px] md:w-[141px] h-auto"
          />
        </div>

        <div className="navbar-end">
          <MyNaveLink />
        </div>
      </div>
    </div>
  );
};

export default NavBar;