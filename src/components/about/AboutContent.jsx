const AboutContent = () => (
  <section className="flex items-center bg-white">
    <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6 my-10">
      <div className="flex flex-wrap ">
        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
          <div className="relative lg:max-w-md">
            <img
              src="https://images.unsplash.com/photo-1569728723358-d1a317aa7fba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="aboutimage"
              className="relative z-10 object-cover w-full rounded h-96"
            />
          </div>
        </div>
        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
          <div>
            <h1 className=" text-3xl font-black text-blumine-500 md:text-4xl uppercase">
              Who we are?
            </h1>
          </div>
          <p className="mt-8 mb-4 text-base leading-7 text-gray-500 text-justify">
            At Book Hive, we are more than just an online bookstore—we are a
            community of book enthusiasts dedicated to connecting readers with
            stories that inspire, educate, and entertain. Founded with a passion
            for literature and a commitment to accessibility, we aim to bring
            the joy of reading to everyone, everywhere.
          </p>
          <p className="mt-4 mb-8 text-base leading-7 text-gray-500 text-justify">
            We believe books have the power to transform lives, and it’s our
            mission to make that transformation accessible to all. With a
            user-friendly platform, personalized recommendations, and reliable
            delivery, Book Hive is here to make your reading journey seamless
            and enjoyable.
          </p>
          <button
            href="#"
            className="px-6 py-4 text-white bg-blumine-500 hover:bg-blumine-600"
          >
            Learn more
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 my-20  sm:mx-4 md:mx-0">
        <div className="flex flex-col p-2 text-justify">
          <div className="font-semibold text-2xl my-4 text-blumine-500 uppercase">
            What we do?
          </div>
          <div className="text-gray-500">
            At Book Hive, we provide a vast selection of books, personalized
            recommendations, and fast, reliable delivery to help readers easily
            discover and enjoy their next great read.
          </div>
        </div>
        <div className="flex flex-col p-2 text-justify">
          <div className="font-semibold text-2xl my-4  text-blumine-500 uppercase">
            Our Mission
          </div>
          <div className="text-gray-500">
            At Book Hive, our mission is to make the world of books accessible
            to everyone by offering a vast selection, personalized
            recommendations, and fast, reliable delivery, all while fostering a
            love for reading and helping readers find stories that inspire,
            entertain, and enrich their lives.
          </div>
        </div>
        <div className="flex flex-col p-2 text-justify">
          <div className="font-semibold text-2xl my-4 text-blumine-500 uppercase">
            Our Vision
          </div>
          <div className="text-gray-500">
            At Book Hive, our vision is to be the leading online bookstore that
            empowers readers around the world to discover new ideas, explore
            diverse stories, and connect with the joy of reading. We strive to
            create a global community where books are more than just
            products—they are gateways to new worlds and lifelong learning.
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-4xl text-blumine-500 font-bold mb-12 uppercase">
        Our Teams
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 my-8 sm:mx-8 md:mx-0">
        <div className="flex flex-col">
          <div>
            <img
              src="https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="py-2">
            <div className="text-gray-950">Victoria Tan</div>
            <div className="text-gray-500">Founder</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <img
              src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHwxfDB8fHww"
              alt=""
            />
          </div>
          <div className="py-2">
            <div className="text-blumine-950">Rosdiana Chandra</div>
            <div className="text-gray-500">Co-founder</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <img
              src="https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="py-2">
            <div className="text-blumine-950">Ben Cottrell</div>
            <div className="text-gray-500">Marketer</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <img
              src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfDF8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div className="py-2">
            <div className="text-blumine-950">James Hilson</div>
            <div className="text-gray-500">Marketer</div>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </section>
);
export default AboutContent;
