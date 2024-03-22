import { Disclosure, Transition } from "@headlessui/react";
import { DownOutlined } from "@ant-design/icons";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { InputNumber, TreeSelect } from "antd";
import categoriesOptions from "../../json/category.json";
import Checkbox from "antd/es/checkbox/Checkbox";

const Category = ({
  onSelectedCategories,
  onSetSelectedCategories,
  onSelectedPriceRange,
  onSetSelectedPriceRange,
  onStockAvailability,
  onHandleStockAvailabilityChange,
}) => {
  const limit = 500;
  const handleMinPriceRange = (value) =>
    onSetSelectedPriceRange([value, onSelectedPriceRange[1]]);

  const handleMaxPriceRange = (value) =>
    onSetSelectedPriceRange([onSelectedPriceRange[0], value]);

  return (
    <div>
      <h3 className="sr-only">Categories</h3>
      <h3 className="text-base font-bold pb-2 hidden lg:block px-4 text-gray-800 mx-2 uppercase">
        Filters
      </h3>
      <form className="hidden lg:block">
        <hr className="py-2 mx-6" />
        <div className=" w-full px-4">
          <div className=" flex flex-col justify-center mx-auto w-full max-w-md rounded-2xl bg-white px-2 pb-2">
            <Disclosure defaultOpen={true}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between  bg-blumine-500 px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring hover:bg-blumine-600 focus-visible:ring-blumine-500/75">
                    <span>Category</span>
                    <ChevronRightIcon
                      className={`${
                        open ? "rotate-90 transform" : ""
                      } h-5 w-5 text-white font-bold`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-2 pb-2 pt-4 text-sm text-roti-900">
                      <TreeSelect
                        style={{ width: "100%" }}
                        value={onSelectedCategories}
                        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                        switcherIcon={<DownOutlined className="font-bold" />}
                        treeData={categoriesOptions}
                        placeholder="Select a category"
                        treeCheckable
                        showCheckedStrategy={TreeSelect.SHOW_PARENT}
                        onChange={(value) => onSetSelectedCategories(value)}
                      />
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" defaultOpen={true} className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between  bg-blumine-500 px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring hover:bg-blumine-600 focus-visible:ring-blumine-500/75">
                    <span>Price</span>
                    <ChevronRightIcon
                      className={`${
                        open ? "rotate-90 transform" : ""
                      } h-5 w-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="flex px-2 justify-between items-center pb-2 pt-4 text-sm text-roti-900 focus:outline focus:outline-roti-500">
                    <InputNumber
                      min={0}
                      max={limit}
                      defaultValue={onSelectedPriceRange[0]}
                      onChange={handleMinPriceRange}
                      className="text-roti-900 focus:outline focus:outline-roti-500"
                    />
                    <span className="mx-2 text-roti-900">to</span>
                    <InputNumber
                      min={0}
                      max={limit}
                      defaultValue={onSelectedPriceRange[1]}
                      onChange={handleMaxPriceRange}
                      className="text-roti-900 focus:outline focus:outline-roti-500"
                    />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" defaultOpen={true} className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between  bg-blumine-500 px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring hover:bg-blumine-600 focus-visible:ring-blumine-500/75">
                    <span>Availability</span>
                    <ChevronRightIcon
                      className={`${
                        open ? "rotate-90 transform" : ""
                      } h-5 w-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="flex flex-col px-2 pb-2 pt-4 text-sm text-roti-900">
                    <Checkbox
                      checked={onStockAvailability.available}
                      onChange={() =>
                        onHandleStockAvailabilityChange("available")
                      }
                      className="text-roti-900 checked:bg-roti-600"
                    >
                      Available
                    </Checkbox>
                    <Checkbox
                      checked={onStockAvailability.emptyStock}
                      onChange={() =>
                        onHandleStockAvailabilityChange("emptyStock")
                      }
                      className="text-roti-900 checked:bg-roti-600"
                    >
                      Sold Out
                    </Checkbox>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Category;
