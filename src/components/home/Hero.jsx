// import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="bg-[linear-gradient(to_left,rgba(255,255,255,0),rgba(255,255,255,0.3)),url(https://images.unsplash.com/photo-1544716278-e513176f20b5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat sm:h-[40rem] lg:h-[40rem]">
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.5,
        type: "spring",
        stiffness: 100,
      }}
    >
      {/* <div className="flex justify-end items-center inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l uppercase font-medium"> */}
      <div className=" grid grid-cols-4 gap-4 mx-auto max-w-screen-xl">
        <div className="sm:col-span-1 lg:col-span-2"></div>
        <div className="flex flex-col sm:my-20 md:my-36 pr-2 col-span-2">
          <div className="flex justify-center items-center my-2">
            <h1 className="font-semibold text-lg uppercase text-slate-900">
              New Arrivals
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="w-full my-4 flex lg:justify-end text-3xl lg:text-5xl font-semibold uppercase text-center lg:text-right text-slate-800"
          >
            <p>Everything leads to you</p>
          </motion.div>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="w-full mb-4 mt-2 flex lg:justify-end lg:text-right text-base text-slate-900"
          >
            <p>
              While working as a film production designer in Los Angeles, Emi
              finds a mysterious letter from a silver screen legend which leads
              Emi to Ava{" "}
              <span className="sm:hidden lg:inline">
                who is about to expand Emi's understanding of family,
                acceptance, and true romance.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 2.4,
              type: "tween",
              stiffness: 110,
              duration: 1,
            }}
          >
            <div className="mx-auto lg:w-1/3 cursor-pointer py-3 px-6 my-8 border-2 text-slate-800 border-slate-800 text-lg font-semibold rounded-full justify-center flex hover:text-white hover:bg-slate-800">
              <Link to="/shop">
                <p>Shop Now</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
    <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 justify-center flex flex-col lg:h-screen lg:px-8">
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="w-full"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          quidem.
        </p>
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 2,
          type: "tween",
          stiffness: 110,
          duration: 0.8,
        }}
        className="mx-auto cursor-pointer py-2 px-6 border-2 text-red-600 border-red-600 font-semibold rounded-2xl justify-center flex hover:text-white hover:bg-red-600 "
      >
        <p>Shop Now</p>
      </motion.div> */}
    </div>
  </section>
);

export default Hero;
