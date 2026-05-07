import Image from 'next/image';
import React from 'react';

const Card = ({friend}) => {
    const {picture,name,days_since_contact,tags,status,}=friend;
    return (
        <div className="card bg-base-100 shadow-sm">
  <figure className="pt-6">
    <Image src={picture} alt={name} width={80} height={80} className='rounded-full'></Image>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xl font-semibold text-[#1F2937]">{name}</h2>
    <p className='text-xs text-[#64748B]'>{`${days_since_contact}d ago`}</p>
    <div className='flex items-center gap-2 '>
        {
            tags.map((f,ind)=> <p key={ind} className='bg-[#CBFADB] px-2 rounded-full'>{f}</p> )
        }
    </div>
   <div className={`${status === "overdue" ? "bg-red-500" : status === "on-track" ? "bg-green-500":status=== "almost due"?  "bg-yellow-500": "" } text-white px-3 py-1 rounded-full`}>
  {status}
</div>
  </div>
</div>
    );
};

export default Card;