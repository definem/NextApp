"use client";
import {useEffect} from "react";
import Image from "next/image";
import About from "@/components/About/about";

const page = () => {
    return (
        <>
            {/* <div className="  border-blue-600 my-5 container mx-auto p-5 px-4 border">
                <h1>HOME PAGE</h1>
            </div> */}
            <About/>
        </>
    );
};

export default page;
