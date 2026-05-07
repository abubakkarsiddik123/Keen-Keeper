// // import React from 'react';

// // const StatsPage = () => {
// //     return (
// //         <div>
// //             this is statsPage
// //         </div>
// //     );
// // };

// // export default StatsPage;

// "use client";

// import React, { useContext } from "react";
// import { FriendsContext } from "@/context/ContextProvider";
// import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

// const TimelineStats = () => {
//   const { timeline } = useContext(FriendsContext);

//   const call = timeline?.filter((i) => i.type === "Call").length;
//   const text = timeline?.filter((i) => i.type === "Text").length;
//   const video = timeline?.filter((i) => i.type === "Video").length;

//   const data = [
//     { name: "Text", value: text, fill: "#7E35E1" },
//     { name: "Call", value: call, fill: "#244D3F" },
//     { name: "Video", value: video, fill: "#37A163" },
//   ];

//   const total = call + text + video;

//   return (
//     <div className="max-w-[1110px] mx-auto mt-16">
//     <h2 className="font-bold text-5xl mb-4">
//         Friendship Analytics
//       </h2> 
//     <div className=" my-10 shadow  rounded-xl ">
//      <h2 className="font-medium text-xl text-[#244D3F] p-4">
//         By Interaction Type
//       </h2> 
      

//       {total === 0 ? (
//           <div className="h-[350px] flex items-center justify-center text-gray-400 text-lg">
//             No interactions yet 📭
//           </div>
//         ) :  (
//           <PieChart
//         style={{
//           width: "100%",
//           maxWidth: "500px",
//           maxHeight: "80vh",
//           margin: "auto",
//           aspectRatio: 1,
//         }}
//         responsive
//       >
//         <Pie
//           data={data}
//           innerRadius="80%"
//           outerRadius="100%"
//           // Corner radius is the rounded edge of each pie slice
//           cornerRadius="50%"
//           fill="#8884d8"
//           // padding angle is the gap between each pie slice
//           paddingAngle={5}
//           dataKey="value"
//           isAnimationActive={true}
//         />
//         <Legend />
//         <Tooltip />
//       </PieChart> 
//         )

//       <PieChart
//         style={{
//           width: "100%",
//           maxWidth: "500px",
//           maxHeight: "80vh",
//           margin: "auto",
//           aspectRatio: 1,
//         }}
//         responsive
//       >
//         <Pie
//           data={data}
//           innerRadius="80%"
//           outerRadius="100%"
//           // Corner radius is the rounded edge of each pie slice
//           cornerRadius="50%"
//           fill="#8884d8"
//           // padding angle is the gap between each pie slice
//           paddingAngle={5}
//           dataKey="value"
//           isAnimationActive={true}
//         />
//         <Legend />
//         <Tooltip />
//       </PieChart>
//     </div>
//     </div>
//   );
// };

// export default TimelineStats;


"use client";

import React, { useContext } from "react";
import { FriendsContext } from "@/context/ContextProvider";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const TimelineStats = () => {
  const { timeline } = useContext(FriendsContext);

  const call = timeline?.filter((i) => i.type === "Call").length || 0;
  const text = timeline?.filter((i) => i.type === "Text").length || 0;
  const video = timeline?.filter((i) => i.type === "Video").length || 0;

  const data = [
    { name: "Text", value: text, fill: "#7E35E1" },
    { name: "Call", value: call, fill: "#244D3F" },
    { name: "Video", value: video, fill: "#37A163" },
  ];

  const total = call + text + video;

  return (
    <div className="max-w-[1110px] mx-auto mt-16">
      <h2 className="font-bold text-5xl mb-4">
        Friendship Analytics
      </h2>

      <div className="my-10 shadow rounded-xl">
        <h2 className="font-medium text-xl text-[#244D3F] p-4">
          By Interaction Type
        </h2>

        {total === 0 ? (
          <div className="h-[350px] flex items-center justify-center text-gray-400 text-lg">
            No interactions yet 
          </div>
        ) : (
          <PieChart
            style={{
              width: "100%",
              maxWidth: "500px",
              maxHeight: "80vh",
              margin: "auto",
              aspectRatio: 1,
            }}
          >
            <Pie
              data={data}
              innerRadius={80}
              outerRadius={100}
              paddingAngle={5}
              cornerRadius={50}
              dataKey="value"
              isAnimationActive={true}
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.fill} />
              ))}
            </Pie>

            <Legend />
            <Tooltip />
          </PieChart>
        )}
      </div>
    </div>
  );
};

export default TimelineStats;
