import QuickCheckIn from "@/Components/QuickCheckIn/QuickCheckIn";
import Image from "next/image";
import React from "react";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { LuArchive } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";


export const metadata = {
  title: "Friend Details | KeenKeeper",
  description:
    "View detailed friendship interactions including calls, texts, and video history in KeenKeeper.",
};

const friendsPromise = async () => {
  const res = await fetch(
  `${process.env.NEXT_PUBLIC_BASE_URL}/data.json`
);
  const data = await res.json();
  return data;
};

const FriendDetails = async ({ params }) => {
  console.log(params,"params is");
  const friends = await friendsPromise();
  const { id } = await params;
  const friend = friends.find((friend) => friend.id === Number(id));
  const {
    name,
    picture,
    tags,
    bio,
    email,
    status,
    days_since_contact,
    next_due_date,
    goal,
  } = friend;
  console.log(friend, "friend find");
  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="space-y-4">
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col items-center">
            {/* Profile Image */}
            <div className="relative">
              <Image
                src={picture}
                alt={name}
                width={80}
                height={80}
                className="rounded-full"
              ></Image>
            </div>

            {/* Name */}
            <h2 className="card-title text-xl font-semibold text-[#1F2937] mt-2 mb-2">
              {name}
            </h2>
            <div
              className={`${status === "overdue" ? "bg-red-500" : status === "on-track" ? "bg-green-500" : status === "almost due" ? "bg-yellow-500" : ""} text-white px-3 py-1 rounded-full mb-2`}
            >
              {status}
            </div>

            {/* Tags */}
            <div className="flex items-center gap-2 ">
              {tags.map((f, ind) => (
                <p key={ind} className="bg-[#CBFADB] px-2 rounded-full">
                  {f}
                </p>
              ))}
            </div>

            <p className="font-semibold text-[#64748B] mt-2 text-center">
              {bio}
            </p>

            {/* Preferred */}
            <div className="mt-5 bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600">
              Preferred:
              <span className="font-semibold text-gray-700"> {email}</span>
            </div>
          </div>

          {/* Snooze Card */}
          <button className="w-full bg-white border border-gray-100  text-[#1F2937] rounded-sm p-5 shadow-sm  flex items-center justify-center group">
            <div className="flex items-center gap-4">
              <HiOutlineBellSnooze className="text-xl" />
              <h3 className="font-semibold">Snooze 2 weeks</h3>
            </div>
          </button>

          {/* Archive Card */}
          <button className="w-full bg-white border border-gray-100 text-[#1F2937] rounded-sm  p-5 shadow-sm  flex items-center justify-center group">
            <div className="flex items-center gap-4">
              <LuArchive />
              <h3 className="font-semibold">Archive</h3>
            </div>
          </button>

          {/* Delete Card */}
          <button className="w-full bg-white border border-gray-100  text-red-500 rounded-sm  p-5 shadow-sm  flex items-center justify-center group">
            <div className="flex items-center gap-4">
              <RiDeleteBinLine />
              <h3 className="font-semibold">Delete</h3>
            </div>
          </button>
        </div>

        <div className="lg:col-span-2 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 text-center">
              <h2 className="text-3xl font-semibold text-[#244D3F]">
                {days_since_contact}
              </h2>

              <p className="mt-3 text-[#64748B]">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 text-center">
              <h2 className="text-3xl font-semibold text-[#244D3F]">{goal}</h2>

              <p className="mt-3 text-[#64748B]">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 text-center">
              <h2 className="text-3xl font-semibold text-[#244D3F]">
                {next_due_date}
              </h2>

              <p className="mt-3 text-[#64748B]">Next Due</p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
            <div className="flex justify-between">
              <h2 className="text-xl font-medium text-[#244D3F]">
                Relationship Goal
              </h2>
              <button className="px-4 py-1  rounded-xl border border-gray-200  font-medium">
                Edit
              </button>
            </div>

            <div>
              <p className="mt-3 text-gray-600 text-lg">
                Connect every{" "}
                <span className="font-bold text-gray-800">30 days</span>
              </p>
            </div>
          </div>

          <QuickCheckIn name={name} />
        </div>
      </div>
    </main>
  );
};

export default FriendDetails;
