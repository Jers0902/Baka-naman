import Header from "../components/Header";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

export default function Mainpage() {
  return (
    <div className="font-semibold">
      <div>
        <Header />
        <p className="font-semibold text-center text-6xl">ABOUT ME</p>
        <div className="flex items-start">
          <img className="size-72 mt-10 ml-32 rounded-full shadow-neutral-400 shadow-2xl" src="/me.jpg" alt="me" />
          <p className="mt-20 ml-10 mr-40 text-xl text-justify">
            I am a College Student who took a Computer Engineering Technology
            course at the Technological University of the Philippines here in
            Manila. I am hardworking and intelligent when it comes to academics.
          </p>
        </div>
        <div className="flex justify-center ml-40">
          <div className="container">
            <div>
              <p className="text-4xl mx-20 mt-10 mb-7">CONTACT INFORMATION</p>
            </div>
            <div className="flex">
              <FaLocationDot className="ml-10 mb-5" size={50} />{" "}
              <p className="text-lg my-3 mx-3">
                29-D Gen. Tinio Street, Brgy. NS Amoranto, Laloma QC
              </p>
            </div>
            <div className="flex ">
              <IoIosCall className="ml-10 mb-5" size={50} />
              <p className="text-lg my-3 mx-3">09162643862</p>
            </div>
            <div className="flex">
              <AiOutlineMail className="ml-10 mb-5" size={50} />
              <p className="text-lg my-3 mx-3">jersalma@gmail.com</p>
            </div>
          </div>
          <div className="container">
            <div>
              <p className="text-4xl mx-20 mt-10 mb-7">LANGUAGE</p>
            </div>
            <div className="flex mx-14">
              <p className="text-lg my-3 mx-6">English</p>
            </div>
            <div className="flex mx-14">
              <p className="text-lg my-3 mx-6">Filipino</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
