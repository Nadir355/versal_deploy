"use client";

import { useBrands } from "@/lib/firebase/brands/read";
import { useCategories } from "@/lib/firebase/categories/read";

export default function BasicDetails({ data, handleData }) {
    const { data: brands } = useBrands();
    const { data: categories } = useCategories();
    return (
        <section className="flex-1 flex flex-col gap-1 bg-white rounded-xl p-4 border">
            <h1 className="font-semibold">Basic Details</h1>
            <div className="flex flex-col gap-1">
                <label className="text-gray-500 text-xs" htmlFor="product-title">
                    Product Name <span className="text-color-red-500">*</span>
                </label>
                <input
                    type="text"
                    placeholder="Enter Title"
                    id="product-title"
                    name="product-title"
                    value={data?.title ?? ""}
                    onChange={(e) => {
                        handleData("title", e.target.value);
                    }}
                    required
                    className="border px-4 py-2 rounded-lg w-full outline-none"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-gray-500 text-xs" htmlFor="product-short-description">
                    Short Description <span className="text-color-red-500">*</span>
                </label>
                <input
                    type="text"
                    placeholder="Enter Short Description"
                    id="product-short-description"
                    name="product-short-description"
                    value={data?.shortDescription ?? ""}
                    onChange={(e) => {
                        handleData("shortDescription", e.target.value);
                    }}
                    required
                    className="border px-4 py-2 rounded-lg w-full outline-none"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-gray-500 text-xs" htmlFor="product-brand">
                    Brand <span className="text-color-red-500">*</span>
                </label>
                <select
                    type="text"
                    id="product-brand"
                    name="product-brand"
                    value={data?.brandId ?? ""}
                    onChange={(e) => {
                        handleData("brandId", e.target.value);
                    }}
                    required
                    className="border px-4 py-2 rounded-lg w-full outline-none"
                >
                    <option value="">Select Brand</option>
                    {brands?.map((item)=>{
                        return(
                            <option value={item?.id} key={item?.id}>
                                {item?.name}
                            </option>
                        )
                    })}
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-gray-500 text-xs" htmlFor="product-category">
                    Category <span className="text-color-red-500">*</span>
                </label>
                <select
                    type="text"
                    id="product-category"
                    name="product-category"
                    value={data?.categoryId ?? ""}
                    onChange={(e) => {
                        handleData("categoryId", e.target.value);
                    }}
                    required
                    className="border px-4 py-2 rounded-lg w-full outline-none"
                >
                    <option value="">Select Category</option>
                    {categories?.map((item)=>{
                        return(
                            <option value={item?.id} key={item?.id}>
                                {item?.name}
                            </option>
                        )
                    })}
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-gray-500 text-xs" htmlFor="product-stock">
                   Stock <span className="text-color-red-500">*</span>
                </label>
                <input
                    type="number"
                    placeholder="Enter Stock"
                    id="product-stock"
                    name="product-stock"
                    value={data?.stock ?? ""}
                    onChange={(e) => {
                        handleData("stock", e.target.valueAsNumber);
                    }}
                    required
                    className="border px-4 py-2 rounded-lg w-full outline-none"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-gray-500 text-xs" htmlFor="product-price">
                   Price <span className="text-color-red-500">*</span>
                </label>
                <input
                    type="number"
                    placeholder="Enter Price"
                    id="product-price"
                    name="product-price"
                    value={data?.price ?? ""}
                    onChange={(e) => {
                        handleData("price", e.target.valueAsNumber);
                    }}
                    required
                    className="border px-4 py-2 rounded-lg w-full outline-none"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-gray-500 text-xs" htmlFor="product-sale-price">
                   Sale Price <span className="text-color-red-500">*</span>
                </label>
                <input
                    type="number"
                    placeholder="Enter Sale Price"
                    id="product-sale-price"
                    name="product-sale-price"
                    value={data?.salePrice ?? ""}
                    onChange={(e) => {
                        handleData("salePrice", e.target.valueAsNumber);
                    }}
                    required
                    className="border px-4 py-2 rounded-lg w-full outline-none"
                />
            </div>
        </section>
    );
}