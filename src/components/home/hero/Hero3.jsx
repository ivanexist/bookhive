import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero3 = () => (
  <section className=" bg-[linear-gradient(to_left,rgba(255,255,255,0),rgba(255,255,255,0.3)),url(https://images.unsplash.com/photo-1641154689638-cedaeceb2dbf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat sm:h-[40rem] lg:h-[40rem]">
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.5,
        type: "spring",
        stiffness: 100,
      }}
    >
      <div className=" grid grid-cols-4 gap-4 mx-auto max-w-screen-xl">
        <div className="sm:col-span-1 lg:col-span-2"></div>
        <div className="flex flex-col sm:my-20 md:my-36 pr-2 col-span-2">
          <div className="flex sm:justify-center sm:items-center md:justify-end md:items-end my-2">
            <h1 className="font-semibold text-lg uppercase text-blumine-950">
              Our Best Seller
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="w-full my-4 flex justify-center items-center lg:justify-end text-2xl lg:text-4xl font-bold uppercase text-center lg:text-right text-blumine-950"
          >
            <p>Pablo Picasso</p>
          </motion.div>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="w-full mb-4 mt-2 flex lg:justify-end lg:text-right text-base text-blumine-950"
          >
            <p>
              Tells the story of Pablo Picasso as he grows through his early
              days as an artist, his discovery of cubism, and his later years of
              sculpture and painting to become a famous artist.{" "}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 2.4,
              type: "tween",
              stiffness: 110,
              duration: 1,
            }}
            className="flex justify-center items-center lg:justify-end lg:items-end lg:text-right"
          >
            <div className="lg:w-1/3 cursor-pointer py-3 px-6 my-8 border-2 text-blumine-950 border-blumine-950 text-lg font-semibold justify-center flex hover:text-white hover:bg-blumine-950 transition duration-300">
              <Link to="/shop">
                <p>Shop Now</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
    {/* <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 justify-center flex flex-col lg:h-screen lg:px-8"></div> */}
  </section>
);

export default Hero3;
