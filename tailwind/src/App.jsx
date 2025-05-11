import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Revenue from "./components/Revenue";

function App() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <div className="basis-1/4 hover:basis-1/2 bg-red-400">01</div>
        <div className="basis-1/4 bg-yellow-400">02</div>
        <div className="basis-1/2 bg-green-600 ">03</div>
      </div>

      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src="/img/building.jpg"
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p class="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>

      <Revenue />
    </>
  );
}

export default App;
