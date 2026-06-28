import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { registerUser } from "../api/authApi";

import useAuth from "./useAuth";

const useRegister = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  return useMutation({
    mutationFn: registerUser,

    onSuccess: (data) => {
      login(data.token, data.user);

      toast.success("Account created successfully!");

      navigate("/dashboard", {
        replace: true,
      });
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Unable to create account.");
    },
  });
};

export default useRegister;
