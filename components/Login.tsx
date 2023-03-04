"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        onClick={() => signIn("google")}
        className="text-[#11A37F] bg-white font-bold text-3xl animate-pulse p-5 rounded-3xl"
      >
        Sign in with Google
      </button>
      <button
        onClick={() => signIn("github")}
        className="text-[#11A37F] bg-white font-bold text-3xl animate-pulse p-5 rounded-3xl mt-3"
      >
        Sign in with Github
      </button>
    </div>
  );
};

export default Login;
