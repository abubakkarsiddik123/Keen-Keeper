import FriendsCard from "@/Components/FriendsCard/FriendsCard";
import Banner from "@/Components/HomePage/Banner";
import Stats from "@/Components/HomePage/Stats";

export default async function Home() {
  const res = await fetch("https://keenkeeper-server.onrender.com/friends");
  const friends = await res.json();
  return (
    <div className="max-w-[1110px] mx-auto mt-16 mb-16 ">
      <Banner />
      <Stats />
      <FriendsCard friends={friends} />
    </div>
  );
}
