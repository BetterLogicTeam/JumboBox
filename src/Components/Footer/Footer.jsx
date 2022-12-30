import React from "react";

export default function Footer() {
  return (
    <div>
      <div class="w-full bg-yellow-500 text-black flex items-start min-h-[10vh] p-3 md:p-5">
        <div class="md:w-1/3 flex items-center space-x-2">
          <span class="rounded-full bg-black w-10 h-10 flex items-center justify-center">
            <img src="./Assets/images/jumbo.png" class="h-8" />
          </span>
          <p class="font-bold">JumboBox</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
