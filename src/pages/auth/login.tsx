import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/spinner";
import { useAuthContext } from "@/contexts/AuthProvider";
import { SignInRequest, useSignIn } from "@/hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const { jwtPayload } = useAuthContext();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<SignInRequest>({
    email: "",
    password: "",
  });
  const { mutateAsync: SignInMutation } = useSignIn(form);

  useEffect(() => {
    if (jwtPayload?.role == "USER_CAFE") {
      navigate("/cafe");
    } else if (jwtPayload?.role == "USER_WORKSHOP") {
      navigate("/workshop");
    } else if (jwtPayload?.role === "USER_WASTE_HOUSE") {
      navigate("/wastehouse");
    } else if (jwtPayload?.role === "ADMIN") {
      navigate("/admin");
    }
  }, [jwtPayload, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await SignInMutation();
      setSubmitting(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="container p-8">
      <div className="flex items-center gap-6">
        <img src={Logo} alt="logo" className="ml-2 w-12 rounded-md bg-blue-400 px-2 py-1" />
        <h1 className="my-auto text-xl font-bold leading-tight text-gray-800">Rumah Tamiang</h1>
      </div>
      <hr className="mt-5" />
      <form className="mx-auto flex max-w-2xl flex-col" onSubmit={handleSubmit}>
        <div className="my-4 flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">Login</h1>
          <p className="font-light">Hallo, Selamat datang kembali!</p>
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="name@mail.com"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full rounded-lg bg-blue-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
          disabled={submitting}
        >
          {submitting ? <Spinner /> : "Masuk"}
        </Button>
      </form>
    </main>
  );
}

export default Login;
