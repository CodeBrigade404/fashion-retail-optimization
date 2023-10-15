import { useState } from "react";
import HorizontalLinearAlternativeLabelStepper from "./Stepper";
import FormHeader from "./formHeaders/fromHeader";
import axios from "axios";

export default function CreateStocks() {
	const boxStyle = {
		padding: "50px",
		borderRadius: "10px",
		backgroundColor: "#fff",
		boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
	};
	const [selectedGenderCategory, setSelectedGenderCategory] = useState("");
	const [selectedFreshnessCategory, setSelectedFreshnessCategory] =
		useState("");
	const [selectedProductType, setSelectedProductType] = useState("");
	const [imagePath, setImagePath] = useState("");
	const [clothData, setClothData] = useState({});
	const [productId, setProductId] = useState("");
	const [manufactureId, setManufactureId] = useState("");
	const [productDate, setProductDate] = useState("");
	const [productQuantity, setProductQuantity] = useState("");
	const [price, setPrice] = useState("");

	console.log("selectedGenderCategory", selectedGenderCategory);

	const productTypes = ["T-shirt", "Shorts", "Cap", "Saree", "Blouse", "Belt"];

	const handleProductIdChange = (event) => {
		setProductId(event.target.value);
		console.log(productId);
	};

	const handleManufactureIdChange = (event) => {
		setManufactureId(event.target.value);
	};

	const handleProductDateChange = (event) => {
		setProductDate(event.target.value);
	};

	const handleGenderCategoryChange = (event) => {
		setSelectedGenderCategory(event.target.value);
	};

	const handleFreshnessCategoryChange = (event) => {
		setSelectedFreshnessCategory(event.target.value);
	};

	const handleProductTypeChange = (event) => {
		setSelectedProductType(event.target.value);
	};

	const handleProductQuantityChange = (event) => {
		setProductQuantity(event.target.value);
	};

	const handlePriceChange = (event) => {
		setPrice(event.target.value);
	};

	console.log("selectedProductType", selectedProductType);
	const handleImageUpload = async (event) => {
		const formData = new FormData();
		formData.append("image", event.target.files[0]);
		try {
			const response = await axios.post(
				"http://localhost:3001/upload",
				formData
			);
			if (response.status === 200) {
				setImagePath(response.data.imagePath);
				console.log("Image uploaded successfully", response.data.imagePath);
			} else {
				// Handle errors or other status codes
			}
		} catch (error) {
			// Handle network or server errors
			console.error("Image upload failed", error);
		}
	};

	try {
		const createCloth = async () => {
			const clothDataToSend = {
				productId,
				manufactureId,
				productDate,
				clothType: selectedProductType,
				freshnessCategory: selectedFreshnessCategory,
				productQuantity,
				price,
				imagePath,
			};
			console.log("clothDataToSend", clothDataToSend);
			try {
				const response = await axios.post(
					"http://localhost:3001/cloths",
					clothDataToSend
				);
				if (response.status === 201) {
					console.log("Cloth created successfully", response.data);
					// Optionally, you can reset the form fields here if needed
					setProductId("");
					setManufactureId("");
					setProductDate("");
					setSelectedProductType("");
				} else {
					// Handle errors or other status codes
				}
			} catch (error) {
				// Handle network or server errors
				console.error("Error creating cloth", error);
			}
		};
	} catch (error) {
		console.error("Error creating createCloth function", error);
	}

	const createCloth = async () => {
		const clothDataToSend = {
			productId,
			manufactureId,
			productDate,
			clothType: selectedProductType, // This should be productType
			freshnessCategory: selectedFreshnessCategory,
			productQuantity,
			price,
			imagePath,
		};

		try {
			// Make a POST request to your back-end to create a new cloth
			const response = await axios.post(
				"http://localhost:3001/cloths",
				clothDataToSend
			);

			if (response.status === 201) {
				console.log("Cloth created successfully", response.data);
				// Optionally, you can reset the form fields here if needed
				setProductId("");
				setManufactureId("");
				setProductDate("");
				setSelectedProductType("");
				setSelectedFreshnessCategory("");
				setProductQuantity("");
				setPrice("");
				setImagePath("");
			} else {
				// Handle errors or other status codes
			}
		} catch (error) {
			// Handle network or server errors
			console.error("Error creating cloth", error);
		}
	};

	return (
		<form style={{ ...boxStyle }}>
			<FormHeader />
			<div className="p-2 pb-14 mt-8">
				<HorizontalLinearAlternativeLabelStepper />
			</div>
			<div className="mt-10 grid grid-cols-1 gap-6">
				<div>
					<label
						htmlFor="productId"
						className="block text-sm font-medium leading-6 text-gray-900">
						Product Identity
					</label>
					<div className="mt-2">
						<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
							<input
								type="text"
								name="productId"
								id="productId"
								autoComplete="productId"
								className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
								placeholder="PID2067"
								onChange={handleProductIdChange}
							/>
						</div>
					</div>
				</div>

				<div>
					<label
						htmlFor="manufactureId"
						className="block text-sm font-medium leading-6 text-gray-900">
						Manufacture Identity
					</label>
					<div className="mt-2">
						<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
							<input
								type="text"
								name="manufactureId"
								id="manufactureId"
								autoComplete="manufactureId"
								className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
								onChange={handleManufactureIdChange}
							/>
						</div>
					</div>
				</div>

				<div>
					<label
						htmlFor="productDate"
						className="block text-sm font-medium leading-6 text-gray-900">
						Date
					</label>
					<div className="mt-2">
						<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
							<input
								type="date"
								name="productDate"
								id="productDate"
								autoComplete="productDate"
								className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
								onChange={handleProductDateChange}
							/>
						</div>
					</div>
				</div>

				<label
					htmlFor="gender"
					className="block text-sm font-medium leading-6 text-gray-900">
					Gender Category
				</label>

				<div className="flex mt-2">
					<div className="inline-flex pr-4 items-center">
						<input
							type="radio"
							name="Mens"
							value="Mens"
							onChange={handleGenderCategoryChange}
							checked={selectedGenderCategory === "Mens"}
							className="form-radio h-4 w-4 text-indigo-600"
						/>
						<span className="ml-2">Mens</span>
					</div>
					<div className="inline-flex pr-4 items-center">
						<input
							type="radio"
							name="Womens"
							value="Womens"
							onChange={handleGenderCategoryChange}
							checked={selectedGenderCategory === "Womens"}
							className="form-radio h-4 w-4 text-indigo-600"
						/>
						<span className="ml-2">Womens</span>
					</div>
					<div className="inline-flex pr-4 items-center">
						<input
							type="radio"
							name="Babys"
							value="Babys"
							onChange={handleGenderCategoryChange}
							checked={selectedGenderCategory === "Babys"}
							className="form-radio h-4 w-4 text-indigo-600"
						/>
						<span className="ml-2">Babys</span>
					</div>
					<label className="inline-flex items-center">
						<input
							type="radio"
							name="Unisex"
							value="Unisex"
							onChange={handleGenderCategoryChange}
							checked={selectedGenderCategory === "Unisex"}
							className="form-radio h-4 w-4 text-indigo-600"
						/>
						<span className="ml-2">Unisex</span>
					</label>
				</div>

				<label
					htmlFor="category"
					className="block text-sm font-medium leading-6 text-gray-900">
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

			<div className="grid grid-cols-1 gap-6 mt-8">
				<div>
					<label
						htmlFor="productType"
						className="block text-sm font-medium leading-6 text-gray-900">
						Select Product Type
					</label>
					<div className="mt-2 flex rounded-md shadow-sm focus:outline-none ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
						<select
							id="productType"
							name="productType"
							value={selectedProductType}
							onChange={handleProductTypeChange}
							className="block w-full py-2 pl-3 pr-10 text-base border-0 bg-transparent text-gray-900 placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
							<option value="">Choose Category...</option>
							{productTypes.map((type) => (
								<option key={type} value={type}>
									{type}
								</option>
							))}
						</select>
					</div>
				</div>
				<div>
					<label
						htmlFor="productQuantity"
						className="block text-sm font-medium leading-6 text-gray-900">
						Product Quantity
					</label>
					<div className="mt-2">
						<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
							<input
								type="text"
								name="productQuantity"
								id="productQuantity"
								autoComplete="productQuantity"
								className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
								onChange={handleProductQuantityChange}
							/>
						</div>
					</div>
				</div>
				<div>
					<label
						htmlFor="price"
						className="block text-sm font-medium leading-6 text-gray-900">
						Product Price
					</label>

					<div className="mt-2">
						<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
							<input
								type="text"
								name="price"
								id="price"
								autoComplete="price"
								className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:border-indigo-600"
								placeholder="Rs. 3500.00"
								onChange={handlePriceChange}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="col-span-full mt-8">
				<label
					htmlFor="cover-photo"
					className="block text-sm font-medium leading-6 text-gray-900">
					Product Cover
				</label>
				<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
					<div className="text-center">
						<div className="mt-4 flex text-sm leading-6 text-gray-600">
							<label
								htmlFor="file-upload"
								className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
								<span>Upload a file</span>
								<input
									id="file-upload"
									name="file-upload"
									type="file"
									className="sr-only"
									onChange={handleImageUpload}
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

			<div className="mt-6 flex items-center justify-end">
				<button
					type="button"
					className="text-sm p-4 font-semibold leading-6 text-gray-900">
					Cancel
				</button>
				<button
					onClick={createCloth}
					type="submit"
					className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
					Save
				</button>
			</div>
		</form>
	);
}
