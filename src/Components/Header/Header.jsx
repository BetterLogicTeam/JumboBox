import React from "react";

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg w-full bg-yellow-500 text-black flex items-center fixed top-0 left-0 right-0  z-10 px-2 md:px-8 " >
        <div class="container-fluid">
          <div class="md:w-1/3 flex items-center space-x-2">
            <span class="rounded-full bg-black w-10 h-10 flex items-center justify-center">
              <img src="./Assets/images/jumbo.png" class="h-8" />
            </span>
            <p class="font-bold">JumboBox</p>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 font-bold" >
              <li class="nav-item">
                <a
                  class="nav-link  uppercase bord border-black"
                  aria-current="page"
                  href="#HomePage"
                  style={{color:"black"}}
                >
                  Home
                </a>
              </li>
              <li class="nav-item uppercase bord border-black">
                <a class="nav-link" href="#play" style={{color:"black"}}>
                  Play
                </a>
              </li>
              <li class="nav-item uppercase bord border-black">
                <a class="nav-link" href="#learnmore" style={{color:"black"}}>
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class=""></div>
    </div>
  );
}
