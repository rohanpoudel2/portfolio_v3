"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import image1 from "@/images/photos/image-1.jpeg";
import image2 from "@/images/photos/image-2.jpeg";
import image3 from "@/images/photos/image-3.jpeg";
import image4 from "@/images/photos/image-4.jpeg";
import image5 from "@/images/photos/image-5.jpeg";

const Photos = () => {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  const images = [image1, image2, image3, image4, image5];

  return (
    <div className="mt-16 sm:mt-20">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-44 sm:w-56">
            <div
              className={clsx(
                "relative aspect-[9/10] overflow-hidden rounded-xl bg-zinc-100 sm:rounded-2xl dark:bg-zinc-800",
                rotations[index % rotations.length]
              )}
              style={{ width: "10rem", height: "15rem" }}
            >
              <Image
                src={image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Photos;
