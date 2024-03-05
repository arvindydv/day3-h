import React from "react";
import { Slider } from "./Slider";

export const Main = () => {
  return (
    <div className="my-3">
      {/* <Slider /> */}
      <div className="w-full h-96 my-3">
        <img
          className="w-full h-full bg-center bg-cover "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJkT0yT0B9B1uYAYwvBoTlDwZmdxygpLOFn2qdperOFzD39ImZUBDv9ldYLCJS-QBAzE&usqp=CAU"
          alt=""
        />
      </div>

      <div className="bg-pink-700 py-8 flex items-center justify-center flex-col">
        <div className="w-1/2 text-center">
          <h1 className="text-white text-4xl">Think Health. Think Massage.</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            consectetur! Mollitia consectetur magnam labore.
          </p>
        </div>
        <div className="w-2/4 my-3 flex justify-center items-center">
          <button className=" mr-2 p-2 text-white border rounded-sm">
            LEARN MORE ABOUT US
          </button>
          <button className="ml-2 p-2 text-white border rounded-sm">
            CONTACT US TODAY
          </button>
        </div>
      </div>

      <div className="my-3">
        <p className="text-pink-700 mx-6 ">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima illum
          soluta saepe distinctio aliquid quod, tempore error debitis, quidem,
          totam asperiores aliquam reiciendis laborum adipisci. Eos accusantium
          doloremque voluptatibus illum.
        </p>

        <p className="mx-6 my-4 text-zinc-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          ducimus quia sequi quasi magnam sit sint reiciendis eos atque cumque!
          Excepturi asperiores eum quam quas doloribus saepe minus voluptate
          velit.
        </p>
        <p className="mx-6 my-4 text-zinc-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          ducimus quia sequi quasi magnam sit sint reiciendis eos atque cumque!
          Excepturi asperiores eum quam quas doloribus saepe minus voluptate
          velit.
        </p>
      </div>

      <hr className="text-zinc-500 my-3" />

      <div className="w-full text-center">
        <h1 className="text-pink-700 text-2xl ">
          Family Wellness. Therapy Massage.
        </h1>
        <p className="text-zinc-500 ">456 Park Avenue, New York, NY 10022</p>
        <p className="text-zinc-500 ">Phone: 987654321</p>
      </div>
    </div>
  );
};
