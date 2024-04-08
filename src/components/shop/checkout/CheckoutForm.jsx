import country from "../../../json/country.json";
const CheckoutForm = () => (
  <div className="col-span-3 px-4 mx-4 text-lg">
    <div className="flex flex-col p-8 my-4 gap-8">
      <h1 className="font-bold uppercase text-blumine-500 text-base">
        Billing Address
      </h1>
      <hr className="font-bold border-t border-t-blumine-200 -my-4" />
      <div className="flex items-center mt-4">
        <h6 className="inline-block before:mr-2 before:border-r-4 text-blumine-500 before:border-r-blumine-200 font-bold uppercase text-base md:justify-start">
          Contact
        </h6>
        <hr className="flex-grow ml-2 border-b border-blumine-200" />
      </div>
      <div className="md:flex gap-8 w-full">
        <input
          type="text"
          placeholder="First Name"
          className="p-2 w-full text-base border placeholder:text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm text-blumine-500"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="p-2 w-full text-base border placeholder:text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm text-blumine-500 sm:my-4 md:my-0"
          required
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        className="p-2 w-full sm:-my-8 md:my-0 text-base border placeholder:text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm text-blumine-500"
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        className="p-2 w-full text-base border placeholder:text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm text-blumine-500 sm:my-4 md:my-0"
        required
      />

      <div className="flex items-center">
        <h6 className="inline-block before:mr-2 before:border-r-4 text-blumine-500 text-base before:border-r-blumine-200 font-bold uppercase md:justify-start">
          Delivery
        </h6>
        <hr className="flex-grow ml-2 border-b border-blumine-200" />
      </div>
      <select
        name=""
        id=""
        className="p-2 text-base border placeholder:text-gray-400 text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm "
      >
        <option value="">Select Your Country</option>
        {country.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <input
        className="p-2 w-full text-base border placeholder:text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm text-blumine-500"
        type="text"
        placeholder="Address 1"
      />
      <input
        className="p-2 w-full text-base border  sm:-mt-4 md:mt-0 placeholder:text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm text-blumine-500"
        type="text"
        placeholder="Address 2"
      />
      <div className="md:flex gap-8 w-full sm:-mt-4 md:mt-0 ">
        <input
          type="email"
          placeholder="Town/City"
          className="p-2 w-full text-base border placeholder:text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm text-blumine-500"
        />
        <input
          type="number"
          placeholder="State"
          className="p-2 w-full border text-base placeholder:text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm text-blumine-500 sm:my-4 md:my-0"
        />
      </div>
      <input
        type="text"
        placeholder="Zip Code"
        className="p-2 w-full sm:-mt-8 md:mt-0 text-base border placeholder:text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm text-blumine-500"
      />
      <div className="flex">
        <input
          type="checkbox"
          id="emailSubscribe"
          className="checked:bg-blumine-500"
        />
        <label
          htmlFor="emailSubscribe"
          className="mx-2 text-base text-gray-800"
        >
          Save this information for next time
        </label>
      </div>
      <hr className="border-t border-t-blumine-200" />
      <p className=" mx-1 -my-2 text-gray-800">Order Notes</p>
      <textarea
        cols="20"
        rows="5"
        className="p-4 text-base -my-2 bg-blumine-100 focus:outline-blumine-400 text-blumine-800 placeholder:text-gray-400"
        placeholder="Notes about your order, e.g. special notes for delivery"
      ></textarea>
    </div>
  </div>
);
export default CheckoutForm;
