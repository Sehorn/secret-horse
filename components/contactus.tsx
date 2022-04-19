import React, { useState, useCallBack } from 'react'
import Image from 'next/image'

const ContactUs: React.FC = () => {
    return (
        <div className="bg-white text-black flex flex-col justify-center items-center pt-10 p-12 min-h-3/5">
            <div className="flex-1 flex flex-col justify-center items-center pt=10 lg:pt-6">
            <div className="pb-10">
                <Image src="/secrethorse.png" width={60} height={50} alt="logo" />
            </div>
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
                <input id="name" name="name" required maxLength={128} type="text" placeholder='Name' className="bg-white text-black outline-none border-2 border-black rounded-3xl px-8 py-2" />
                <input id="email" name="email" type="email" required maxLength={128} placeholder="Your E-mail" className="bg-white text-black outline-none border-2 border-black rounded-3xl px-8 py-2" />
                <textarea id="message" name="messaage" required maxLength={1048238} placeholder="Additional information" className="bg-white text-black outline-none border-2 border-black rounded-3xl px-8 py-6 min-h-[16em]"></textarea>
                <div className="text-center mt-10">
                    <button type="submit" className=" border-2 border-black rounded-3xl px-8 py-2"><strong>Submit</strong></button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default ContactUs