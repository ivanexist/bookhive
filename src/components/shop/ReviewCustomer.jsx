const ReviewCustomer = () => (
  <div>
    {/* Verified Buyer */}
    <div className="flex items-start border p-4 mb-4 bg-blumine-50">
      <div className="flex-shrink-0">
        <div className="inline-block relative">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <img
              className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover object-center"
              src="https://images.unsplash.com/photo-1557555187-23d685287bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdvbWFufGVufDB8fDB8fHww"
              alt="Profile picture"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-blumine-500 shadow-inner"></div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="fill-current text-white bg-blumine-500 rounded-full p-1
            absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
          >
            <path
              fill="currentColor"
              d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="ml-6">
        <p className="flex items-baseline">
          <span className="text-blumine-500 font-bold">Mary T.</span>
        </p>
        <div className="flex items-center mt-1">
          <svg
            className="w-4 h-4 fill-current text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            className="w-4 h-4 fill-current text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            className="w-4 h-4 fill-current text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            className="w-4 h-4 fill-current text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            className="w-4 h-4 fill-current text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        </div>
        <div className="flex items-center mt-4 text-gray-950"></div>
        <div className="text-gray-950">
          <span className="font-bold ">A Must-Read!</span>
          <p className="mt-1 text-gray-500">
            This book completely captivated me from start to finish. The
            characters are so well-developed, and the plot keeps you on the edge
            of your seat. I couldn’t put it down! Highly recommend to anyone who
            loves a good mix of suspense and heart.
          </p>
        </div>
        <div className="flex items-center justify-between mt-4 text-sm fill-current">
          <button className="flex items-center text-gray-800 hover:text-blumine-500 ">
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z" />
            </svg>
            <span className="ml-2 text-gray-800">Share</span>
          </button>
          <div className="flex items-center">
            <span className="text-gray-800 sm:hidden md:block">
              Was this review helplful?
            </span>
            <button className="flex items-center ml-6 text-blumine-500">
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
              </svg>
              <span className="ml-2">56</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* Ordinary Buyer 1*/}
    <div className="flex items-start border p-4 my-4">
      <div className="flex-shrink-0">
        <div className="inline-block relative">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <img
              className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover object-center"
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvbWFufGVufDB8MXwwfHx8MA%3D%3D"
              alt="Profile picture"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
          </div>
        </div>
      </div>
      <div className="ml-6">
        <p className="flex items-baseline">
          <span className="text-gray-800 font-bold">Evelyn R.</span>
        </p>
        <div className="flex items-center mt-1">
          <svg
            className="w-4 h-4 fill-current text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            className="w-4 h-4 fill-current text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            className="w-4 h-4 fill-current text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            className="w-4 h-4 fill-current text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            className="w-4 h-4 fill-current text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        </div>
        <div className="flex items-center mt-4 text-gray-800"></div>
        <div className="text-gray-800">
          <span className="font-bold">An Extraordinary Read</span>
          <p className="mt-1 text-gray-500">
            From the very first page, I was hooked. The world-building is
            incredible, and the writing is so immersive. Every chapter unveils
            new twists and keeps you guessing until the end. One of the best
            books I’ve read this year.
          </p>
        </div>
        <div className="flex items-center justify-between mt-4 text-sm  fill-current">
          <button className="flex items-center text-gray-800 hover:text-blumine-500 ">
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z" />
            </svg>
            <span className="ml-2">Share</span>
          </button>
          <div className="flex items-center">
            <span className="text-gray-800 sm:hidden md:block">
              Was this review helplful?
            </span>
            <button className="flex items-center ml-6 text-gray-600 hover:text-blumine-500">
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
              </svg>
              <span className="ml-2">36</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* ordinary buyer 2 */}
    <div className="flex items-start border p-4 my-4">
      <div className="flex-shrink-0">
        <div className="inline-block relative">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <img
              className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover object-center"
              src="https://images.unsplash.com/photo-1613940102170-122544f054e3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile picture"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
          </div>
        </div>
      </div>
      <div className="ml-6">
        <p className="flex items-baseline">
          <span className="text-gray-800 font-bold">Carlo S.</span>
        </p>
        <div className="flex items-center mt-1">
          <svg
            className="w-4 h-4 fill-current text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            className="w-4 h-4 fill-current text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            className="w-4 h-4 fill-current text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            className="w-4 h-4 fill-current text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            className="w-4 h-4 fill-current text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        </div>
        <div className="flex items-center mt-4 text-gray-800"></div>
        <div className="text-gray-800">
          <span className="font-bold">Good, but Could Have Been Better</span>
          <p className="mt-1 text-gray-500">
            The book had an interesting premise, but I felt some parts were
            drawn out. I would have liked more development in the middle
            sections. Still, the ending made it all worthwhile.
          </p>
        </div>
        <div className="flex items-center justify-between mt-4 text-sm fill-current">
          <button className="flex items-center text-gray-800 hover:text-blumine-500 ">
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z" />
            </svg>
            <span className="ml-2">Share</span>
          </button>
          <div className="flex items-center">
            <span className="text-gray-800 sm:hidden md:block">
              Was this review helplful?
            </span>
            <button className="flex items-center ml-6 text-gray-600 hover:text-blumine-500">
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
              </svg>
              <span className="ml-2">36</span>
            </button>
            {/* <button className="flex items-center ml-4">
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
              </svg>
              <span className="ml-2">10</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default ReviewCustomer;
