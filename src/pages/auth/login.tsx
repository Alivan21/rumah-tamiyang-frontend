import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { decodeJwt } from "@/utils/jwt";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<string | undefined>();
  const [temporaryRole, setTemporaryRole] = useState<string>("CAFE"); // its only for demo ygy
  const navigate = useNavigate();
  const loginHandler = async () => {
    event?.preventDefault();
    const res = await axios.post("http://127.0.0.1:8000/api/v1/auth/login", {
      identifier: identifier,
      password: password
    });
    localStorage.setItem("token", res.data.data.token);
    const payload = decodeJwt(res.data.data.token);
    setRole(payload?.role);
  };
  useEffect(() => {
    if (!role) return;
    // the temporaryRole is only for demo, it can be replace with 'role'
    if (temporaryRole === "ADMIN") navigate("/admin");
    else if (temporaryRole === "CAFE") navigate("/cafe");
    else if (temporaryRole === "WORKSHOP") navigate("/workshop");
  }, [role])
  return (
    <main className="container p-8">
      <div className="flex items-center gap-6">
        <img src={Logo} alt="logo" className="ml-2 w-12 rounded-md bg-blue-400 px-2 py-1" />
        <h1 className="my-auto text-xl font-bold leading-tight text-gray-800">Rumah Tamiang</h1>
      </div>
      <hr className="mt-5" />
      <form className="mx-auto flex max-w-2xl flex-col" onSubmit={loginHandler}>
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
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="name@mail.com"
            value={identifier}
            onChange={e => setIdentifier(e.target.value)}
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
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full rounded-lg bg-blue-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
        >
          Login
        </Button>
      </form>
    </main>
  );
}

export default Login;
