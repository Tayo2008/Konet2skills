import React from "react";
import image1 from "../image/images (10).jpg";
import image2 from "../image/images (3).jpg";
import image3 from "../image/images (5).jpg";
import image4 from "../image/images (7).jpg";
import image5 from "../image/images (6).jpg";
import image6 from "../image/images (8).jpg";

const Gallery = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-6xl font-bold title-font mb-4 text-gray-900">
              Ga<span className=" text-blue-400">lle</span>ry
            </h1>
          </div>
          <div class="flex flex-wrap -m-2">
            <div class="lg:w-1/4 sm:w-1/2 p-4">
              <div class="flex relative">
                <img alt="gallery" class=" w-full h-full" src={image1} />
              </div>
            </div>

            <div class="lg:w-1/4 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center"
                  src={image2}
                />
              </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center"
                  src={image3}
                />
              </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center"
                  src={image4}
                />
              </div>
            </div>
            <div class="lg:w-1/4 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center"
                  src={image5}
                />
              </div>
            </div>

            <div class="lg:w-1/4 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center"
                  src={image6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
