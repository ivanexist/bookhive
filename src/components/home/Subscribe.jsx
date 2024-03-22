import { motion } from "framer-motion";
const Subscribe = () => (
  <div className="flex justify-center bg-blumine-50 ">
    <div className="max-w-screen-xl px-4 py-8 my-8 mx-auto sm:px-6 lg:py-16 lg:px-8">
      <div>
        <h2 className="text-lg font-bold leading-normal tracking-tight text-center text-blumine-600 ">
          <p>STAY WITH US</p>
          <p className="my-6">
            <span className="text-blumine-600 text-lg font-medium">
              Subscribe to our newletters and stay up-to-date with new
              collections and exclusive offers
            </span>
          </p>
        </h2>
      </div>
      <div>
        <form className="justify-center mt-8 sm:flex">
          <input
            aria-label="Email address"
            name="EMAIL"
            type="email"
            className="w-full px-6 py-4 text-base leading-6 text-blumine-600 placeholder-gray-400 transition duration-150 ease-in-out bg-white border border-blumine-300  appearance-none focus:outline-none focus:shadow-outline sm:max-w-xs"
            placeholder="Enter your email"
          />
          <div className="mt-3  shadow sm:mt-0 sm:flex-shrink-0">
            <button className="flex items-center justify-center w-full px-6 py-4 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blumine-500 border border-transparent  hover:bg-blumine-600 focus:outline-none focus:shadow-outline">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Subscribe;
