import { useState } from "react";
import HorizontalLinearAlternativeLabelStepper from "./Stepper";

export default function CreateStocks() {
  const boxStyle = {
    padding: "50px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
    margin: "20px",
  };
  const [selectedGenderCategory, setSelectedGenderCategory] = useState("");
  const [selectedFreshnessCategory, setSelectedFreshnessCategory] =
    useState("");
  const [selectedProductType, setSelectedProductType] = useState("");

  const handleGenderCategoryChange = (event) => {
    setSelectedGenderCategory(event.target.value);
  };

  const handleFreshnessCategoryChange = (event) => {
    setSelectedFreshnessCategory(event.target.value);
  };

  const productTypes = ["T-shirt", "Shorts", "Cap", "Saree", "Blouse", "Belt"];

  const handleProductTypeChange = (event) => {
    setSelectedProductType(event.target.value);
  };

  return (
    <form style={{ ...boxStyle }}>
      <div className="space-y-12">
        <div className="pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            <div className="flex">
              <svg
                className="w-8 h-8 pr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path
                  fill="black"
                  d="M480-80 120-280v-400l360-200 360 200v400L480-80ZM364-590q23-24 53-37t63-13q33 0 63 13t53 37l120-67-236-131-236 131 120 67Zm76 396v-131q-54-14-87-57t-33-98q0-11 1-20.5t4-19.5l-125-70v263l240 133Zm40-206q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm40 206 240-133v-263l-125 70q3 10 4 19.5t1 20.5q0 55-33 98t-87 57v131Z"
                />
              </svg>
              Store Fashion Product
            </div>
          </h2>

          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly, so be careful what you
            are storing.
          </p>
          <div className="p-2 pb-14 mt-8">
            <HorizontalLinearAlternativeLabelStepper />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product Identity
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    fashioner.com/Product
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="PID2067"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Manufacture Identity
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    fashioner.com/Manufacture
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="MAF60967"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender Category
              </label>
              <div className="flex mt-2">
                <label className="inline-flex pr-4 items-center">
                  <input
                    type="radio"
                    name="GenderCategory"
                    value="Mens"
                    onChange={handleGenderCategoryChange}
                    checked={selectedGenderCategory === "Mens"}
                    className="form-radio h-4 w-4 text-indigo-600"
                  />
                  <span className="ml-2">Mens</span>
                </label>
                <label className="inline-flex pr-4 items-center">
                  <input
                    type="radio"
                    name="GenderCategory"
                    value="Womens"
                    onChange={handleGenderCategoryChange}
                    checked={selectedGenderCategory === "Womens"}
                    className="form-radio h-4 w-4 text-indigo-600"
                  />
                  <span className="ml-2">Womens</span>
                </label>
                <label className="inline-flex pr-4 items-center">
                  <input
                    type="radio"
                    name="GenderCategory"
                    value="Babys"
                    onChange={handleGenderCategoryChange}
                    checked={selectedGenderCategory === "Babys"}
                    className="form-radio h-4 w-4 text-indigo-600"
                  />
                  <span className="ml-2">Babys</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="GenderCategory"
                    value="Unisex"
                    onChange={handleGenderCategoryChange}
                    checked={selectedGenderCategory === "Unisex"}
                    className="form-radio h-4 w-4 text-indigo-600"
                  />
                  <span className="ml-2">Unisex</span>
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product Freshness
              </label>
              <div className="flex mt-2">
                <label className="inline-flex pr-4 items-center">
                  <input
                    type="radio"
                    name="FreshnessCategory"
                    value="New"
                    onChange={handleFreshnessCategoryChange}
                    checked={selectedFreshnessCategory === "New"}
                    className="form-radio h-4 w-4 text-indigo-600"
                  />
                  <span className="ml-2">New Product</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="FreshnessCategory"
                    value="Old"
                    onChange={handleFreshnessCategoryChange}
                    checked={selectedFreshnessCategory === "Old"}
                    className="form-radio h-4 w-4 text-indigo-600"
                  />
                  <span className="ml-2">Existing Product</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" pb-12">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="productType"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Select Product Type
              </label>
              <div className="mt-2 flex rounded-md shadow-sm focus:outline-none ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <select
                  id="productType"
                  name="productType"
                  value={selectedProductType}
                  onChange={handleProductTypeChange}
                  className="block w-full py-2 pl-3 pr-10 text-base border-0 bg-transparent text-gray-900 placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                >
                  <option value="">Choose Category...</option>
                  {productTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Product Cover
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end">
        <button
          type="button"
          className="text-sm p-4 font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
