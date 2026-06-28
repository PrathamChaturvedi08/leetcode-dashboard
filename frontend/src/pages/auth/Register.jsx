import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import registerSchema from "../../schemas/registerSchema";

import useRegister from "../../hooks/useRegister";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import PageTitle from "../../components/ui/PageTitle";

import { Navigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const Register = () => {
  const registerMutation = useRegister();

  const { token } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  const onSubmit = (data) => {
    registerMutation.mutate(data);
  };

  return (
    <>
      <PageTitle subtitle="Create your CodePulse account and start tracking your progress.">
        Create Account
      </PageTitle>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Name"
          placeholder="Enter your name"
          error={errors.name}
          {...register("name")}
        />

        <Input
          label="Email"
          placeholder="Enter your email"
          error={errors.email}
          {...register("email")}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Create a password"
          error={errors.password}
          {...register("password")}
        />

        <Button type="submit" loading={registerMutation.isPending}>
          Create Account
        </Button>

        <p className="text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-cyan-400 hover:text-cyan-300"
          >
            Sign In
          </Link>
        </p>
      </form>
    </>
  );
};

export default Register;
