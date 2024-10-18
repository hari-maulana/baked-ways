import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";

interface ProductFormData {
  name: string;
  price: string;
  description: string;
  image: FileList;
}

export const AdmAddProductPage = () => {
  const [loading, setLoading] = useState(false);
  const adminId = useSelector((state: RootState) => state.auth.userId);
  const {
    register,
    handleSubmit,
    formState: {},
    reset,
  } = useForm<ProductFormData>();

  const onSubmit = async (data: ProductFormData) => {
    const formData = new FormData();
    formData.append("image", data.image[0]); // Append the first file
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);

    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/bakery/product/${adminId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product added:", response.data);
      toast.success("Product added successfully!");
      reset();
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl my-16 flex flex-row justify-between">
      <form className="mt-4 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
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
            {...register("price", { required: "Price is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter Product Price"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            type="text"
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter Product Description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Product Picture
          </label>
          <input
            type="file"
            {...register("image")}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Upload Product Picture"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="submit"
            disabled={loading}
            className="p-2 w-36 bg-gray-700 text-white text-md rounded cursor-pointer hover:bg-gray-500"
          >
            {loading ? "Loading..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

/**import React from "react";
import axios from "axios";



export const AdmAddProductPage: React.FC<{ bakeryId: string }> = ({
  bakeryId,
}) => {
 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Price:</label>
        <input
          type="number"
          step="0.01"
          {...register("price", { required: "Price is required" })}
        />
        {errors.price && <p>{errors.price.message}</p>}
      </div>

      <div>
        <label>Description:</label>
        <textarea
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <div>
        <label>Image:</label>
        <input
          type="file"
          {...register("image", { required: "Image is required" })}
        />
        {errors.image && <p>{errors.image.message}</p>}
      </div>

      <button type="submit">Add Product</button>
    </form>
  );
};
 */
