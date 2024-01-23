import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { SlBadge } from "react-icons/sl";

const Empoyee = ({id ,name , doj , designation ,email , mobile, salary, status}) => {

  return (
    <div className="h-[24rem] w-[24rem] border border-slate-500 rounded-lg py-6 px-10 flex flex-col  items-center gap-1">
      <div className="self-end flex gap-3 items-center justify-end">
        <FaCircle className="fill-green-500" />
        <p>{status}</p>
      </div>
     {/* add image */}
      <div>
        <Image height='100' width='100' src='/img.png' alt='emp' className="rounded-full" />
      </div>

      <h2 className="text-white text-lg">{name} </h2>
      <p>{designation}</p>

      {/* detail component */}
      <div className="flex gap-2 items-center">

      {/* email */}
       <div className="flex gap-2 items-center">
       <MdAlternateEmail  className="fill-slate-500"/>
       <p className="text-slate-500">{email}</p>
       </div>

      {/* empoyoment */}
       <div className="flex gap-2 items-center">
       <SlBadge />
       <p className="text-slate-500">{`emp_${id}`}</p>
       </div>


      </div>

      <div className="flex gap-2 items-center">

      {/* mobile */}
       <div className="flex gap-2 items-center">
       <MdAlternateEmail  className="fill-slate-500"/>
       <p className="text-slate-500">{mobile}</p>
       </div>
       {/* designination */}
       <div className="flex gap-2 items-center">
       <SlBadge />
       <p className="text-slate-500">{designation}</p>
       </div>
      </div>

      <div className="flex gap-2 items-center">
      {/* joing date */}
       <div className="flex gap-2 items-center">
       <MdAlternateEmail  className="fill-slate-500"/>
       <p className="text-slate-500">{doj}</p>
       </div>

       {/* salary */}
       <div className="flex gap-2 items-center">
       <SlBadge />
       <p className="text-slate-500">
       {salary}</p>
       </div>
      </div>

      <div className="flex gap-4 ">
        <button className="border px-6 py-1 rounded-md">
            Edit
        </button>
        <button className="border px-6 py-1 rounded-md">
            Delete
        </button>
      </div>
    </div>
  );
};

export default Empoyee;
