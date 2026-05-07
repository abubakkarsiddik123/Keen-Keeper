"use client";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { PiVideoCamera } from "react-icons/pi";
import React, { useContext } from "react";
import { FriendsContext } from "@/context/ContextProvider";

const QuickCheckIn = ({ name }) => {
  const { timeline, setTimeline } = useContext(FriendsContext);

  const handleTimeline = (type) => {
    const newActivity = {
      id: Date.now(),
      type,
      name,
      date: new Date().toLocaleDateString(),
    };

    // save to context
    setTimeline([...timeline, newActivity]);
  };
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <h2 className="text-xl font-medium text-[#244D3F] mb-6">
        Quick Check-In
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => handleTimeline("Call")}
          className="cursor-pointer rounded-xl border border-gray-200 py-10 hover:bg-gray-50 transition flex flex-col items-center gap-3"
        >
          <div className="flex items-center justify-center text-3xl">
            <FiPhoneCall />
          </div>
          <span className="font-semibold text-gray-700 text-lg">Call</span>
        </button>

        <button
          onClick={() => handleTimeline("Text")}
          className="cursor-pointer rounded-xl border border-gray-200 py-10 hover:bg-gray-50 transition flex flex-col items-center gap-3"
        >
          <div className=" rounded-2xl  flex items-center justify-center text-3xl">
            <MdOutlineTextsms />
          </div>

          <span className="font-semibold text-gray-700 text-lg">Text</span>
        </button>

        <button
          onClick={() => handleTimeline("Video")}
          className="cursor-pointer rounded-xl border border-gray-200 py-10 hover:bg-gray-50 transition flex flex-col items-center gap-3"
        >
          <div className=" rounded-2xl  flex items-center justify-center text-3xl">
            <PiVideoCamera />
          </div>
          <span className="font-semibold text-gray-700 text-lg">Video</span>
        </button>
      </div>
    </div>
  );
};

export default QuickCheckIn;
