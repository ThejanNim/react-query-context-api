"use client";

import axios from "axios";
import { headers } from "next/headers";
import { useQuery } from "@tanstack/react-query";

const fetchUser = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  console.log("fetch user: ", response.data);
  return response.data;
};

export const useUserQuery = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUser(),
  });
};

export const useUserDetailsQuery = () => {
  return useUserQuery();
};
