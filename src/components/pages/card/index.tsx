"use client";
import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
import profile from "../../../assets/profile.jpg";
import Link from "next/link";

export default function CardComponent() {
  const handleOpenPDF = () => {
    const filePath = "/santoshCV.pdf";
    window.open(filePath, "_blank");
  };
  const generateWhatsAppLink = () => {
    const phoneNumber = "9650157684";
    const message = "Hi";
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  };
  return (
    <div className="w-full h-full rounded-lg flex flex-col">
      <div className="w-full flex-1 flex justify-center items-center p-3">
        <div className="m-2 w-full  md:w-[40vw] h-[40vh] xl:w-full xl:h-full bg-slate-900 rounded-md">
          <Image
            //   width={240}
            src={profile}
            alt="Cover"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
      <div className="w-full flex-1 p-6">
        <div className="text w-full h-full  flex flex-col justify-around">
          <h3 className="text-xl font-bold text-blue-500">
            Santosh Bhandari 👋
          </h3>
          <p>
            A Passionate <span className="font-bold">Frontend Developer</span>{" "}
            🖥️ &amp; having
            <span className="font-bold"> 1.5 years</span> of Experience.
          </p>
          <div className=" mt-4 flex space-x-2">
            <Link
              className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              href={"/contact"}
            >
              <FiPhoneCall />
              <span>Let&apos;s connect</span>
            </Link>
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              data-clipboard-text="example@example.com"
              onClick={handleOpenPDF}
            >
              <MdContentCopy />
              <span>My Resume</span>
            </button>
          </div>
          <div className="mt-4">
            <ul className="flex space-x-4">
              <li className="border border-solid border-gray-400 p-2 rounded cursor-pointer">
                <Link
                  href="https://www.facebook.com/your-profile"
                  target="_blank"
                >
                  <FaFacebook className="text-2xl" />
                </Link>
              </li>
              <li className="border border-solid border-gray-400 p-2 rounded cursor-pointer">
              <Link
                  href={"https://github.com/ssbhandari1"}
                  target="_blank"
                >
                  <FaGithub className="text-2xl" />
                </Link>
              </li>
              <li className="border border-solid border-gray-400 p-2 rounded cursor-pointer">
                <Link href={generateWhatsAppLink()} target="_blank">
                  <FaWhatsappSquare className="text-2xl" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
