import Image from "next/image";
import MyNaveLink from "./MyNaveLink";

const NavBar = () => {
  return (
    <div className="shadow-sm  bg-base-100">
      <div className="navbar max-w-[1600px] mx-auto  ">
        <div className="navbar-start ">
          <Image
            src="/logo.png"
            alt="keen-keeper"
            width={141}
            height={31}
          ></Image>
        </div>
        <div className="navbar-end">
          <MyNaveLink />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
