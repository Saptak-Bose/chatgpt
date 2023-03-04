"use client";
import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  return (
    <div className="bg-[#40414F] rounded-lg text-white text-sm shadow-md">
      <form className="p-5 space-x-5 flex">
        <input
          type="text"
          disabled={!session}
          className="focus:outline-none bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button type="submit">
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45 text-gray-300" />
        </button>
      </form>

      <div>{/* Model Selection */}</div>
    </div>
  );
};

export default ChatInput;
