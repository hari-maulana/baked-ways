import { useState } from "react";

export const AdmAddProductPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    productPict: "",
    price: "",
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an API)
    console.log("Form data submitted:", formData);
    toggleModal(); // Close modal after saving
  };

  return (
    <div className="container sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl my-16 flex flex-row justify-between">
      <form className="mt-4 w-full" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter Product Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter Product Price"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Product Picture
          </label>
          <input
            type="file"
            name="productPict"
            value={formData.productPict}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Upload Product Picture"
          />
        </div>
        <div className="flex justify-end space-x-2">
          {/* <button
            type="button"
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={toggleModal}
          >
            Cancel
          </button> */}
          <button
            type="submit"
            className="p-2 w-36 bg-gray-700 text-white text-md rounded cursor-pointer hover:bg-gray-900"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};
