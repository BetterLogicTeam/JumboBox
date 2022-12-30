import { Button, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./Box_style.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} centered >
      <div class="modal__container text-white" >
        <div
          class="md:w-2/3 max-w-[600px] rounded-2xl relative
                    flex flex-col my-16 mx-8 md:mx-auto bg-[#161615]"
        >
          <div class="p-3  maindiv_style" >
            <div class="w-full min-h-[60vh] flex flex-col space-y-8 items-center justify-center relative" >
              <div class="absolute top-1 w-full flex items-center justify-end p-2 text-xs font-bold"></div>
              <div class="flex flex-col space-y-1 items-center">
                <span class="text-xs text-white">Time left</span>
                <div class="flex space-x-2 justify-center">
                  <span class="font-bold text-2xl ">01:34</span>
                </div>
              </div>
              <img
                src="./Assets/images/jumbo.png"
                class="h-20 md:h-24 floating object-fit"
              />
              <div class="space-y-4 px-2 md:px-8 w-full">
                <p class="text-center text-2xl font-bold">
                  Box #{props.data} selected
                </p>
                <div class="grid grid-cols-3 gap-2 md:gap-4 h-24">
                  <div></div>
                  <div class="w-full h-full flex flex-col items-center justify-center space-y-2 border border-gray-300 rounded-lg">
                    <span class="uppercase text-xs md:text-sm">Box Value</span>
                    <p class="font-bold textlg md:text-2xl text-yellow-500">
                      0.0{props.data} <span class="text-sm">BNB</span>
                    </p>
                  </div>
                  <div></div>
                </div>
                <p class="text-xs text-gray-200 text-center">
                  Click on the button below to make payment for the box.
                </p>
              </div>
              <div class="w-48 pb-8">
                <button class="bottom-2 bg-yellow-500 p-2 px-4 text-black rounded-full flex items-center justify-center space-x-2 w-full">
                  <span class="h-8 flex items-center font-bold">
                    Pay 0.0{props.data} BNB
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div
            class="absolute flex items-center justify-center w-8 h-8 rounded-full shadow bg-[#161615] -top-12 right-2 cursor-pointer"
            onClick={props.onHide}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
            </svg>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default function Box_Select() {
  const [modalShow, setModalShow] = React.useState(false);
  const [ArrayData, setArrayData] = useState([]);
  const [indexdata, setindexdata] = useState();

  useEffect(() => {
    let random_array = new Array(20)
      .fill()
      .map((a, i) => (a = i))
      .sort(() => Math.random() - 0.5);
    setArrayData(random_array);
  }, []);

  return (
    <div>
      <div class="p-3 md:p-8 space-y-8 text-white" id="play">
        <div class="pt-8 mt-4">
          <p class="text-xs text-center">Time left:</p>
          <div class="flex space-x-2 justify-center ">
            <span class="font-bold text-6xl null">03:14</span>
          </div>
        </div>
        <div class="relative w-full space-y-4">
          <p class="font-bold text-center text-yellow-500 text-4xl">
            Select a box to play
          </p>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-5 gap-y-6 md:gap-y-10 md:gap-5 md:p-8 overflow-hidden">
            {ArrayData.map((items) => {
              return (
                <>
                  <div
                    class="bingo-card cursor-pointer space-y-2 p-3 rounded-xl shadow h-48 flex items-center justify-center relative bordser border-gray-600 bg-opacity-40"
                    onClick={() => (setModalShow(true), setindexdata(items))}
                  >
                    <img
                      src="./Assets/images/jumbo.png"
                      class="h-24 md:h-24 object-fit floating"
                    />
                    <div class="absolute top-1 right-2 bgs-white p-[3px] px-3 text-white rounded-full text-xs">
                      <span class="font-bold">#{items}</span>
                    </div>
                    <div class="absolute bottom-2 bg-yellow-400 p-1 px-2 text-black rounded-full">
                      <span class="font-bold">0.00{items}</span>
                      <span class="text-xs">&nbsp;BNB</span>
                    </div>
                  </div>
                </>
              );
            })}
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              data={indexdata}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
