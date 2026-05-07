"use client";
import { FriendsContext } from "@/context/ContextProvider";
import React, { useContext, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineTextsms } from "react-icons/md";
import { PiVideoCamera } from "react-icons/pi";

const TimelinePage = () => {
  const { timeline } = useContext(FriendsContext);
  const [filter, setFilter] = useState("All");
  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);
  return (
    <div className=" max-w-[1110px] mx-auto mt-16 mb-16 p-4">
      <h1 className="text-5xl font-bold text-[#1F2937] mb-6 ">Timeline</h1>
      <div className="dropdown mb-6">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 flex justify-between w-80 p-6"
        >
          <span className="text-lg text-[#64748B]">Filter timeline</span>
          <IoIosArrowDown />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
        >
          <li>
            <a onClick={() => setFilter("All")}>All</a>
          </li>

          <li>
            <a onClick={() => setFilter("Call")}>Call</a>
          </li>

          <li>
            <a onClick={() => setFilter("Text")}>Text</a>
          </li>

          <li>
            <a onClick={() => setFilter("Video")}>Video</a>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        {filteredTimeline.map((item) => (
          <div
            key={item.id}
            className=" p-4 rounded-lg flex items-center gap-4 bg-white shadow"
          >
            <div className="text-2xl">
              {item.type === "Call" && <FiPhoneCall />}

              {item.type === "Text" && <MdOutlineTextsms />}

              {item.type === "Video" && <PiVideoCamera />}
            </div>
            <div>
              <h2 className=" ">
                <span className="text-[#244D3F] text-xl font-medium">
                  {item.type}
                </span>
                <span className="text-lg text-[#64748B]">
                  {" "}
                  with {item.name}
                </span>
              </h2>

              <p className="text-[#64748B]">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
