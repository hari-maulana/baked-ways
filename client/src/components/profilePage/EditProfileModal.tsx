import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ProfileFormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  image: FileList; // For image upload
}

const EditProfileModal = ({ userId }: { userId: number }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {},
    reset,
  } = useForm<ProfileFormData>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mutatedData, setMutatedData] = useState<ProfileFormData | null>(null);

  const updateProfile = async (data: ProfileFormData) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("location", data.location);

      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      }

      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/user/profile/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setIsLoading(false);

      window.location.reload();

      console.log("Profile update response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  };

  const onSubmit = async (data: ProfileFormData) => {
    try {
      const updatedData = await updateProfile(data);
      setMutatedData(updatedData);
      toggleModal();

      console.log(mutatedData);
    } catch (error) {
      console.error("Error while saving profile", error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    reset();
  };

  return (
    <>
      {/* Button to open modal */}
      <button
        className="p-2 w-36 bg-gray-700 text-white text-md rounded cursor-pointer hover:bg-gray-900"
        onClick={toggleModal}
      >
        Edit
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Edit Profile</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={toggleModal}
              >
                &times;
              </button>
            </div>

            <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter phone"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  {...register("location", {
                    required: "Location is required",
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter location"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Profile Image
                </label>
                <input type="file" {...register("image")} accept="image/*" />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="p-2 w-36 bg-gray-700 text-white text-md rounded cursor-pointer hover:bg-gray-900"
                >
                  {isLoading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfileModal;
