"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHomeAlt2 } from "react-icons/bi";
import { IoTimeOutline } from "react-icons/io5";
import { PiChartLine } from "react-icons/pi";

const MyNaveLink = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="">
      <ul className="flex items-center gap-4  font-medium text-[#64748B]">
        <li>
          <Link
            href="/"
            className={`flex items-center gap-1 ${pathName === "/" ? "bg-[#244D3F] font-semibold rounded-lg text-white py-3 px-4" : ""}`}
          >
            {" "}
            <span>
              <BiHomeAlt2 />
            </span>{" "}
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/timeline"
            className={`flex items-center gap-1 ${pathName === "/timeline" ? "bg-[#244D3F] font-semibold rounded-lg text-white py-3 px-4" : ""}`}
          >
            {" "}
            <span>
              <IoTimeOutline />
            </span>{" "}
            Timeline
          </Link>
        </li>
        <li>
          <Link
            href="/stats"
            className={`flex items-center gap-1 ${pathName === "/stats" ? "bg-[#244D3F] font-semibold rounded-lg text-white py-3 px-4" : ""}`}
          >
            {" "}
            <span>
              <PiChartLine />
            </span>{" "}
            Stats
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MyNaveLink;
