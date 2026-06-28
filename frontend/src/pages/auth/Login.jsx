import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import loginSchema from "../../schemas/loginSchema";

import useLogin from "../../hooks/useLogin";

import Button from "../../components/ui/Button";

import Input from "../../components/ui/Input";

import PageTitle from "../../components/ui/PageTitle";

import { Navigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const Login = () => {
  const loginMutation = useLogin();

  const { token } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <>
      <PageTitle subtitle="Continue tracking your coding journey.">
        Welcome Back
      </PageTitle>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Email"
          placeholder="Enter your email"
          error={errors.email}
          {...register("email")}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          error={errors.password}
          {...register("password")}
        />

        <Button type="submit" loading={loginMutation.isPending}>
          Sign In
        </Button>

        <p className="text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-cyan-400 hover:text-cyan-300"
          >
            Register
          </Link>
        </p>
      </form>
    </>
  );
};

export default Login;
