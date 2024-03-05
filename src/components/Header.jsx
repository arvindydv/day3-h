import React from "react";

export const Header = () => {
  return (
    <div className="">
      <div className="my-4">
        <h1 className="text-pink-700 text-4xl">Familly Wellness</h1>
        <p className="text-zinc-500 text-sm"> MASSAGE THERAPY</p>
      </div>

      <header className="bg-zinc-400 h-10  w-100 flex items-center ">
        <nav className="w-full flex item-center h-full ">
          <ul className="flex w-full list-none justify-between items-center text-white  h-full">
            <li className="bg-pink-700 font-bold h-full w-2/12  flex items-center justify-center">
              HOME
            </li>
            <li className="text-center font-bold w-2/12">ABOUT</li>
            <li className="text-center font-bold w-2/12">Services</li>
            <li className="text-center font-bold w-2/12">FAQ</li>
            <li className="text-center font-bold w-2/12">CONTACT</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
