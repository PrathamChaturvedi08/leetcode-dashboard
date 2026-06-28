import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { loginUser } from "../api/authApi";
import useAuth from "./useAuth";

const useLogin = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  return useMutation({
    mutationFn: loginUser,

    onSuccess: (data) => {
      login(data.token, data.user);

      toast.success("Welcome back!");

      navigate("/dashboard", {
        replace: true,
      });
    },

    onError: (error) => {
      toast.error(
        error.response?.data?.message || "Unable to login. Please try again.",
      );
    },
  });
};

export default useLogin;
