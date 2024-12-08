"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heart } from "lucide-react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Collections({ collections }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  if (collections.length === 0) {
    return <></>;
  }
  return (
    <div className=" overflow-hidden md:p-10 p-5">
      <Slider {...settings}>
        {(collections?.length <= 2 ? [...collections, ...collections, ...collections] : collections)?.map((collection) => {
          return (
            <div className="px-2">
              <div className=" flex gap-4 bg-gradient-to-tr to-[#d9e2f1] from-[#cce7f5] p-7 w-full rounded-xl h-full">
                <div className=" w-full flex flex-col gap-2" >
                  <div className="flex flex-col gap-4">
                    <h1 className="md:text-lg text-base font-semibold ">{collection?.title}</h1>
                    <h1 className="md:text-sm text-xs text-gray-600 max-w-96 line-clamp-2 ">{collection?.subTitle}</h1>
                  </div>
                  <div className=" flex gap-4">
                    <Link href={`/collections/${collection?.id}`}>
                      <button className="bg-blue-500 text-white text-xs md:text-sm px-4 py-2 rounded-lg ">SHOP NOW</button>
                    </Link>
                  </div>
                </div>
                <div className="w-full">
                  <img className="md:h-[9rem] h-[5rem] " src={collection?.imageURL} alt={collection?.title} />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}