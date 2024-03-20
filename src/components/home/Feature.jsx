const Feature = () => (
  <>
    <div className=" flex justify-between items-center py-8 px-4 mt-4 sm:ml-4 lg:ml-0 bg-white ">
      <div className="grid sm:w-full sm:grid-cols-1 lg:grid-cols-4">
        {/* Free shipping item */}
        <div className="flex items-center border border-blumine-200 gap-3 p-6 sm:mr-6 sm:my-2 lg:my-0 bg-white shadow-main">
          <div className="h-12 w-12 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25em"
              height="1em"
              viewBox="0 0 640 512"
              className="h-12 w-12 text-blumine-600 mr-2"
            >
              <path
                fill="currentColor"
                d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16M160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m80-208H416V144h44.1l99.9 99.9z"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-base font-bold text-blumine-500">
              Free Shipping Item
            </p>
            <p className="text-base leading-7 text-gray-500">
              Orders over $150
            </p>
          </div>
        </div>
        {/* money back guarantee */}
        <div className="flex items-center border border-blumine-200 gap-3 p-6 sm:mr-6 sm:my-2 lg:my-0 bg-white shadow-main">
          <div className="h-12 w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
              className="h-12 w-12 text-blumine-600 mr-2"
            >
              <path
                fill="currentColor"
                d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5V15a.5.5 0 0 0-.5-.5c-.413 0-.677-.102-.856-.236c-.183-.137-.322-.342-.424-.623c-.214-.588-.22-1.367-.22-2.141a.5.5 0 0 0-.147-.354l-.286-.287l-1.213-1.213c-.467-.467-.604-.78-.63-.955c-.02-.14.022-.234.122-.33c.214-.205.367-.344.54-.386c.103-.026.338-.044.76.378l3 3a.5.5 0 0 0 .708-.707L13 9.793V6.707l2.56 2.56a1.5 1.5 0 0 1 .44 1.061V17.5a.5.5 0 0 0 1 0v-7.172a2.5 2.5 0 0 0-.732-1.767L13 5.293V3.5A1.5 1.5 0 0 0 11.5 2zM12 5.5v3.293l-1.146-1.147c-.578-.578-1.154-.777-1.705-.643a1.517 1.517 0 0 0-.313.115A3.001 3.001 0 0 0 5 10a3 3 0 0 0 5.007 2.23c.017.578.075 1.21.273 1.753c.148.407.384.796.764 1.08l.006.006A1.5 1.5 0 0 0 10 16.5v.5H6v-.5A1.5 1.5 0 0 0 4.5 15H4V5h.5A1.5 1.5 0 0 0 6 3.5V3h4v.5A1.5 1.5 0 0 0 11.5 5h.5zm0 11v.009a.5.5 0 0 1-.5.491H11v-.5a.5.5 0 0 1 .5-.5h.5zM6 10a2 2 0 0 1 1.874-1.996c-.124.23-.187.51-.139.833c.071.482.378.983.911 1.516l.907.907A2 2 0 0 1 6 10M5 3v.5a.5.5 0 0 1-.5.5H4v-.5a.5.5 0 0 1 .5-.5zM4 16h.5a.5.5 0 0 1 .5.5v.5h-.5a.5.5 0 0 1-.5-.5zm8-12h-.5a.5.5 0 0 1-.5-.5V3h.5a.5.5 0 0 1 .5.5z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-base font-bold text-blumine-500">
              Money Back Guarantee
            </p>
            <p className="text-base leading-7 text-gray-500">100% money back</p>
          </div>
        </div>
        {/* COD */}
        <div className="flex items-center border border-blumine-200 gap-3 p-6 sm:mr-6 sm:my-2 lg:my-0 bg-white shadow-main">
          <div className="h-12 w-12 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.13em"
              height="1em"
              viewBox="0 0 576 512"
              className="h-12 w-12 text-blumine-600"
            >
              <path
                fill="currentColor"
                d="M560 224h-29.5c-8.8-20-21.6-37.7-37.4-52.5L512 96h-32c-29.4 0-55.4 13.5-73 34.3c-7.6-1.1-15.1-2.3-23-2.3H256c-77.4 0-141.9 55-156.8 128H56c-14.8 0-26.5-13.5-23.5-28.8C34.7 215.8 45.4 208 57 208h1c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6c-28.5 0-53.9 20.4-57.5 48.6C-3.9 258.8 22.7 288 56 288h40c0 52.2 25.4 98.1 64 127.3V496c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48h128v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80.7c11.8-8.9 22.3-19.4 31.3-31.3H560c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16m-128 64c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16M256 96h128c5.4 0 10.7.4 15.9.8c0-.3.1-.5.1-.8c0-53-43-96-96-96s-96 43-96 96c0 2.1.5 4.1.6 6.2c15.2-3.9 31-6.2 47.4-6.2"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-base font-bold text-blumine-500">
              Cash On Delivery
            </p>
            <p className="text-base leading-7 text-gray-500">
              Lorem ipsum dolor sit.
            </p>
          </div>
        </div>
        {/* Call and Support */}
        <div className="flex items-center border border-blumine-200 gap-3 p-6 sm:mr-6 sm:my-2 lg:my-0 bg-white shadow-main">
          <div className="h-12 w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="h-12 w-12 text-blumine-600"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12.636 4A7.364 7.364 0 0 1 20 11.364M13 8a3 3 0 0 1 3 3M7 6l-2.485.621c-.89.223-1.534 1.029-1.352 1.928c1.06 5.213 7.075 11.228 12.288 12.287c.9.183 1.705-.46 1.928-1.35l.62-2.486l-3.5-2l-1.5 1.5c-2-1-4.5-3.5-5.5-5.5L9 9.5z"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-base font-bold text-blumine-500">
              Help & Support
            </p>
            <p className="text-base leading-7 text-gray-500">
              Call: +62 853 305 1177 1
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className=" flex justify-between items-center py-4 px-4 mr-6 sm:ml-4 lg:ml-0 bg-white max-w-screen-xl">
      <div className="grid sm:w-full sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-2">
          <img
            src="https://images.pexels.com/photos/5868272/pexels-photo-5868272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="sm:h-64 md:h-80 w-full"
          />
        </div>
        <div className="col-span-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1670509045675-af9f249b1bbe?q=80&w=1435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="sm:h-64 md:h-80 w-full"
          />
        </div>
      </div>
    </div>
  </>
);

export default Feature;
