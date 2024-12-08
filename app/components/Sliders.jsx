"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heart } from "lucide-react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function FeaturedProductSlider({ featuredProducts }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" overflow-hidden p-10">
      <Slider {...settings}>
        {featuredProducts?.map((product) => {
          return (
            <div className="px-5">
              <div className=" flex flex-col-reverse md:flex-row gap-4 bg-[#f8f8f8] p-5 md:px-24 md:py-20 w-full">
                <div className="flex-1 flex flex-col md:gap-10 gap-4" >
                  <h2 className="text-gray-500 text-xs md:text-base">New Products</h2>
                  <div className="flex flex-col gap-4">
                    <Link href={`products/${product?.Id}`}>
                      <h1 className="md:text-4xl text-xl font-semibold ">{product?.title}</h1>
                    </Link>
                    <h1 className="md:text-sm text-xs text-gray-600 max-w-100 line-clamp-2 ">{product?.shortDescription}</h1>
                  </div>
                  <div className=" flex gap-4">
                    <Button className="bg-blue-500 text-white text-xs  md:text-sm ">BUY NOW</Button>
                    <Button className="border bg-white border-blue-500 text-blue-500 text-xs md:text-sm">ADD TO CART</Button>
                    <Button isIconOnly className=" border-2 bg-white border-pink-500 text-pink-500 "><Heart size={14} /></Button>
                  </div>
                </div>
                <div >
                  <Link href={`products/${product?.Id}`}>
                    <img className="md:h-[23rem] h-[13rem]" src={product?.featureImageURL} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}