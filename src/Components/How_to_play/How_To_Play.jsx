import React from "react";

export default function How_To_Play() {
  return (
    <div>
      <div class="p-3 md:p-5 my-8 relative pt-12 md:pt-12 " id="learnmore" style={{backgroundColor:"#0000"}}>
        <div class="text-white">
          <p class="text-center text-4xl font-bold">How to play</p>
        </div>
        <div class="my-8 bg-[#161615] rounded-xl p-3 md:p-5 space-y-4 w-full md:w-2/3 mx-auto text-white">
          <div class="flex items-center space-x-4">
            <div>
              <p class="text-4xl text-yellow-500 font-bold">01</p>
            </div>
            <p class="text-lg">Open Trust Wallet</p>
          </div>
          <hr class="border-black" />
          <div class="flex items-center space-x-4">
            <div>
              <p class="text-4xl text-yellow-500 font-bold">02</p>
            </div>
            <p class="text-lg">Open Trust Wallet</p>
          </div>
          <hr class="border-black" />
          <div class="space-x-2">
            <div class="flex items-center space-x-4">
              <div>
                <p class="text-4xl text-yellow-500 font-bold">03</p>
              </div>
              <div>
                <p class="text-lg">
                  Copy and paste this link on your dapp 👇👇
                </p>
                <div class="w-full flex items-center justify-between space-x-2 my-2">
                  <span class="text-center font-bold rounded-full bg-black text-xs texst-[10px] text-yellow-500 p-1 px-2">
                  https://jumbobox.netlify.app/
                  </span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="cursor-pointer"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <hr class="border-black" />
          <div class="flex items-center space-x-4">
            <div>
              <p class="text-4xl text-yellow-500 font-bold">04</p>
            </div>
            <p class="text-lg">Connect to BNB smart chain network</p>
          </div>
          <hr class="border-black" />
          <div class="flex items-center space-x-4">
            <div>
              <p class="text-4xl text-yellow-500 font-bold">05</p>
            </div>
            <p class="text-lg">open a Box with Bnb amount of your choice</p>
          </div>
          <hr class="border-black" />
          <div class="flex items-center space-x-4">
            <div>
              <p class="text-4xl text-yellow-500 font-bold">06</p>
            </div>
            <p class="text-lg">Wait for result</p>
          </div>
        </div>
        <div class="min-h-40 p-5 flex flex-col items-center justify-center bg-yellow-500 text-black">
          <p class="font-bold text-4xl">MORE EARNINGS</p>
          <p class="mt-4 text-center">
            Refer and Earn 5% on each of your referral Box opening
          </p>
          <div class="w-full max-w-sm flex items-center justify-between space-x-2 my-2">
            <span class="text-center font-bold rounded-full bg-black text-xs texst-[10px] text-yellow-500 p-1 px-2">
            https://jumbobox.netlify.app/?ref=0x41cd05db...92d6cc82eab3c
            </span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="cursor-pointer"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
            </svg>
          </div>
        </div>
        <div class="absolute right-8 top-[50%]">
          <img src="./Assets/images/jumbo.png" class="h-12 animate-bounce" />
        </div>
        <div class="absolute hidden md:block left-8 top-[50%]">
          <img src="./Assets/images/jumbo.png" class="h-12 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
