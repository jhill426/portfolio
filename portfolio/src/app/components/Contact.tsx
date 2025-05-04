import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";

export default function Contact() {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-collor.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my skills and expertise in web development.
      </p>
      <form className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="text"
            placeholder="Enter your name"
            required
          />
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <textarea
          rows={6}
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          placeholder="Enter your message"
          required
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Submit now{" "}
          <Image src={assets.right_arrow_white} alt="" className="m-4" />
        </button>
        <p className="mt-4">sending...</p>
      </form>
    </div>
  );
}
