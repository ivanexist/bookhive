import country from "../../../json/country.json";
const CheckoutForm = () => (
  <div className="col-span-3 px-4 mx-4 text-lg">
    <div className="flex flex-col p-8 my-4 gap-8 ">
      <h1 className="font-semibold uppercase  text-blumine-500">
        Billing Address
      </h1>
      <hr className="font-bold border-t border-t-blumine-200 -my-4" />

      <div className="md:flex gap-8 w-full mt-4">
        <input
          type="text"
          placeholder="First Name"
          className="p-2 w-full text-base border placeholder:text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm text-blumine-600"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="p-2 w-full text-base border placeholder:text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm text-blumine-600 sm:my-4 md:my-0"
          required
        />
      </div>

      <select
        name=""
        id=""
        className="p-2 text-base border placeholder:text-gray-400 text-blumine-600 border-blumine-300 focus:outline-blumine-400 shadow-sm sm:-mt-4 md:mt-0"
      >
        <option value="">Select Your Country</option>
        {country.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <div className="md:flex gap-8 w-full">
        <input
          type="email"
          placeholder="Email"
          className="p-2 w-full text-base border placeholder:text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm text-blumine-600"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          className="p-2 w-full text-base border placeholder:text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm text-blumine-600 sm:my-4 md:my-0"
          required
        />
      </div>
      <input
        className="p-2 w-full text-base border placeholder:text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm text-blumine-600"
        type="text"
        placeholder="Address 1"
      />
      <input
        className="p-2 w-full text-base border  sm:-mt-4 md:mt-0 placeholder:text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm text-blumine-600"
        type="text"
        placeholder="Address 2"
      />
      <div className="md:flex gap-8 w-full">
        <input
          type="email"
          placeholder="Town/City"
          className="p-2 w-full text-base border placeholder:text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm text-blumine-600"
        />
        <input
          type="number"
          placeholder="State"
          className="p-2 w-full border text-base placeholder:text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm text-blumine-600 sm:my-4 md:my-0"
        />
      </div>
      <input
        type="text"
        placeholder="Zip Code"
        className="p-2 w-full text-base border placeholder:text-gray-400 border-blumine-300 focus:outline-blumine-400 shadow-sm text-blumine-600"
      />

      <div className="flex">
        <input
          type="checkbox"
          id="emailSubscribe"
          className="checked:bg-blumine-500"
        />
        <label
          htmlFor="emailSubscribe"
          className="mx-2 text-base text-gray-950"
        >
          Save this information for next time
        </label>
      </div>
      <hr className="border-t border-t-blumine-200" />
      <p className="text-base mx-1 -my-2 text-gray-950">Order Notes</p>
      <textarea
        name=""
        id=""
        cols="20"
        rows="5"
        className="p-4 text-base -my-2 bg-blumine-100 focus:outline-blumine-400 text-blumine-600 placeholder:text-gray-400"
        placeholder="Notes about your order, e.g. special notes for delivery"
      ></textarea>
    </div>
  </div>
);
export default CheckoutForm;
