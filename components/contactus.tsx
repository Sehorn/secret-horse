import React, { useState } from "react";
import Image from "next/image";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-white text-black flex flex-col justify-center items-center pt-10 pb-10 min-h-3/5">
      <div className="flex-1 flex flex-col min-w-full justify-center items-center pt=10 lg:pt-6">
        <div className="pb-10">
          <Image src="/secrethorse.png" width={50} height={40} alt="logo" />
        </div>
        <h2 className="text-4xl font-bold">Contact</h2>
        <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full md:min-w-[500px] lg:min-w-[600px]">
          <input
            id="name"
            name="name"
            required
            maxLength={128}
            type="text"
            placeholder="Name"
            className="bg-white text-black outline-none border-2 border-black  px-4 py-2"
          />
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={128}
            placeholder="Email"
            className="bg-white text-black outline-none border-2 border-black px-4 py-2"
          />
          <textarea
            id="message"
            name="messaage"
            required
            maxLength={1048238}
            placeholder="Additional information"
            className="bg-white text-black outline-none border-2 border-black px-4 py-4 min-h-[16em]"
          ></textarea>
          <div className="text-center mt-10">
            <button type="submit" className=" text-black border-2 border-black px-8 py-2 hover:bg-black hover:text-white">
              <a>
                <strong>Submit</strong>
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
