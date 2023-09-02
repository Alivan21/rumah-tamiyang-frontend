import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

function Login() {
  return (
    <main className="container p-8">
      <div className="flex items-center gap-6">
        <img src={Logo} alt="logo" className="ml-2 w-12 rounded-md bg-blue-400 px-2 py-1" />
        <h1 className="my-auto text-xl font-bold leading-tight text-gray-800">Rumah Tamiyang</h1>
      </div>
      <hr className="mt-5" />
      <form className="mx-auto flex max-w-2xl flex-col">
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
            placeholder="name@flowbite.com"
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
