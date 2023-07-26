import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

function Me() {

    return (
        <>
            <div className="grid my-64">
            <span class="bg-yellow-100 text-yellow-800 text-2xl font-medium mr-2 px-2.5 py-0.5 w-80 h-9 p-2 rounded dark:bg-yellow-900 dark:text-yellow-300 text-center justify-self-center mb-4">🚧 Under Develepment 🚧</span>
                <div className="grid grid-rows-1 text-center">
                    <h1 className="text-sky-400/100 text-7xl">
                        Patrick Melan
                    </h1>
                    <h1 className="text-white text-center text-xl my-4">
                        Student & Developer
                    </h1>
                </div>
                <div className="flex justify-center space-x-10 my-3">
                    <button className="transition ease-in duration-300 hover:bg-sky-400 rounded-full p-2"><a href="https://github.com/patrickmelan" target="_blank"><AiFillGithub color="white" size={55}/></a></button>
                    <button className="transition ease-in duration-300 hover:bg-sky-400 rounded-full p-2"><a href="https://www.linkedin.com/in/patrick-melan-723488244/" target="_blank"><AiFillLinkedin color="white" size={55}/></a></button>
                    <button className="transition ease-in duration-300 hover:bg-sky-400 rounded-full p-2"><a href="https://www.instagram.com/patr1ckmelan/" target="_blank"><AiFillInstagram color="white" size={55}/></a></button>
                </div>
            </div>
        </>
    )
}

export default Me;