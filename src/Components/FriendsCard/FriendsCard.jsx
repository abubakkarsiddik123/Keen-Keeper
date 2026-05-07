import Card from "./Card";

const FriendsCard = ({friends}) => {
    console.log(friends);
    return (
        <div className="mt-16">
            <h2 className="text-2xl text-[#1F2937] font-semibold">Your Friends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    friends.map(friend=> <Card key={friend.id} friend={friend}/> )
                }
            </div>
        </div>
    );
};

export default FriendsCard;