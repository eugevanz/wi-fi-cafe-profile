import { forwardRef } from "react";
import { motion } from "framer-motion";

const Footer = forwardRef((props, ref) => (
  <motion.footer layout="position" {...props} ref={ref}>
    <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto gap-8 md:flex-row">
      <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-col md:items-start">
        <div>
          <a href="#logo">
            <img
              src={`${process.env.PUBLIC_URL}/images/wi-fi-cafe-logo.png`}
              alt="logo"
              width="128"
              height="128"
            />
          </a>
        </div>
        <div className="flex justify-center items-center gap-4">
          <a href="#twitter">
            <svg
              className="h-8 fill-cyan-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </a>
          <a href="#linkedin">
            <svg
              className="h-8 fill-cyan-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
          </a>
          <a href="#facebook">
            <svg
              className="h-8 fill-cyan-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>
          </a>
          <div className="text-white">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
      <div className="flex justify-around gap-16">
        <div className="flex flex-col gap-3 text-cyan-50">
          <a href="#Home" className="hover:text-orange-100">
            Home
          </a>
          <a href="#Pricing" className="hover:text-orange-100">
            Pricing
          </a>
          <a href="#Product" className="hover:text-orange-100">
            Product
          </a>
          <a href="#About" className="hover:text-orange-100">
            About
          </a>
        </div>
        <div className="flex flex-col gap-3 text-cyan-50">
          <a href="#Careers" className="hover:text-orange-100">
            Careers
          </a>
          <a href="#Community" className="hover:text-orange-100">
            Community
          </a>
          <a href="#Privacy Policy" className="hover:text-orange-100">
            Privacy Policy
          </a>
        </div>
      </div>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div
            htmlFor="How do we get a hold of you"
            className="text-sm text-slate-50 font-bold px-4 -mb-2"
          >
            Email
          </div>
          <input
            type="text"
            className="flex-1 px-4 py-2 text-sm text-slate-500 rounded-full focus:outline-none"
            value="Who we contact"
            readOnly
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="Message to the company"
            className="text-sm text-slate-50 font-bold px-4 -mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            className="flex-1 px-4 py-2 text-sm text-slate-500 rounded-full focus:outline-none"
            value="Message to the company"
            readOnly
          />
        </div>
        <button className="px-6 py-2 text-white font-bold rounded-full bg-orange-500 hover:bg-orange-300 focus:outline-none">
          Go
        </button>
      </form>
    </div>
  </motion.footer>
));
export default Footer;
