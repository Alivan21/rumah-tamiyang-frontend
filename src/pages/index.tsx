import { useState } from "react";
import { Button } from "@/components/ui/button";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center gap-5 bg-gray-700 text-white">
        <div className="flex flex-col items-center justify-center gap-5">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-xl font-bold">Vite + React</h1>
        <div className="flex flex-col items-center justify-center gap-3">
          <Button onClick={() => setCount(count => count + 1)}>count is {count}</Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </section>
    </>
  );
}

export default App;
