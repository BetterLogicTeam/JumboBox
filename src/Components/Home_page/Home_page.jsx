import React from "react";

export default function Home_page() {
  return (
    <div>
      <div class="p-3 md:p-5 flex flex-col md:flex-row-reverse items-center md:h-[400px] bg-[#161615]  mt-12" id="HomePage">
        <div class="w-full md:w-1/3 flex items-center justify-center">
          <img src="./Assets/images/jumbo.png" class="floating w-32  md:w-[300px] " />
        </div>
        <div class="flex-1 space-y-8 md:px-12 py-8">
          <div class=" text-left text-white">
            <p class="font-bold text-4xl md:text-6xl">BNB Jumbo Box</p>
            <p>
              A new and innovative financial technology company centered around
              cryptocurrency Box opening preditions To Win 🏆 Binance Coin
            </p>
          </div>
          <div class="flex items-center justify-center md:justify-start space-x-4">
            <a
              href="#play"
              class="p-2 px-5 rounded-full bg-yellow-500 text-black"
            >
              Play
            </a>
            <a
              href="#learnmore"
              class="p-2 px-4 rounded-full border border-yellow-500 text-yellow-500"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
