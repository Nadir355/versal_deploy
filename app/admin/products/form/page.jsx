"use client"

import { useState } from "react";
import BasicDetails from "./components/BasicDetails";
import Images from "./components/Images";
import Description from "./components/Description";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";
import { createNewProduct } from "@/lib/firebase/products/write";

export default function Page() {
    const [data, setData] = useState(null);
    const [featureImage, setFeatureImage] = useState(null);
    const [imageList, setImageList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const handleData = (key, value) => {
        setData((prevData) => {
            return {
                ...(prevData ?? {}),
                [key]: value,
            };
        });
    };


    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            await createNewProduct({
                data: data,
                featureImage: featureImage,
                imageList: imageList
            })
            setData(null);
            setFeatureImage(null);
            setImageList([]);
            toast.success("Product is successfully created! ")
        } catch (error) {
            console.log(error?.message)
            toast.log(error?.message)
        }
        setIsLoading(false)
    };


    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }} className="p-5 flex flex-col gap-4">
            <div className="flex justify-between w-full items-center">
                <h1 className="font-semibold">Create New Product</h1>
                <Button isLoading={isLoading} isDisabled={isLoading} type="submit">Create</Button>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
                <BasicDetails data={data} handleData={handleData} />
                <div className="flex-1 flex flex-col gap-5">
                    <Images
                        data={data}
                        featureImage={featureImage}
                        setFeatureImage={setFeatureImage}
                        imageList={imageList}
                        setImageList={setImageList}
                    />
                    <Description data={data} handleData={handleData} />
                </div>
            </div>
        </form>
    );;
}

