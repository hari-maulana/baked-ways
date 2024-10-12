import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUserProfile } from "./userProfileSlice";
import { useEffect } from "react";

const fetchUserProfile = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (!user.userId || !user.token) {
    throw new Error("User data not found in localStorage");
  }
  const response = await axios.get(
    `http://localhost:3003/user/${user.userId}`,
    {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }
  );
  return response.data;
};

export const useUserProfile = () => {
  const dispatch = useDispatch();

  const query = useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
    retry: false,
  });

  useEffect(() => {
    if (query.data && query.data.id && query.data.user) {
      dispatch(setUserProfile(query.data));
    }
  }, [query.data, dispatch]);

  useEffect(() => {
    if (query.error) {
      console.error("Error fetching user profile:", query.error);
    }
  }, [query.error]);

  return query;
};
