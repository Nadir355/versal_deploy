import { getBrand } from "@/lib/firebase/brands/read_server"
import { getCategory } from "@/lib/firebase/categories/read_server"
import { Button } from "@nextui-org/react"
import { Heart } from "lucide-react"
import Link from "next/link"

export default function Deatils({ product }) {
    return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex gap-3">
                <Category categoryId={product?.categoryId} />
                <Brand brandId={product?.brandId} />
            </div>
            <h1 className="font-semibold text-xl md:text-4xl">{product?.title}</h1>
            <h2 className="text-gray-600 text-sm line-clamp-4line-clamp-3 md:line-clamp-4">{product?.shortDescription}</h2>
            <h3 className="text-green-500 font-bold text-lg">₨{product?.salePrice} {" "} <span className="line-through text-gray-500 text-xs">₨{product?.price}</span></h3>
            <div className="flex flex-wrap items-center gap-4">
                <Button className="text-white bg-black">Buy Now</Button>
                <Button variant="bordered" className="">Add To Cart</Button>
                <Button variant="bordered" isIconOnly color="danger">
                    <Heart size={13} />
                </Button>
            </div>
            <div className="flex flex-col gap-2 py-6 ">
                <div className="text-gray" dangerouslySetInnerHTML={{ __html: product?.description ?? "" }}></div>
            </div>
        </div>
    )
}

async function Category({ categoryId }) {
    const category = await getCategory({ id: categoryId })
    return (
        <Link href={`/categories/${categoryId}`}>
            <div className="flex items-center gap-1  px-3 py-1 rounded-full">
                <img className="h-4 w-4" src={category?.imageURL} alt="" />
                <h4 className="text-xs font-semibold">{category?.name}</h4>
            </div>
        </Link>
    )
}

async function Brand({ brandId }) {
    const brand = await getBrand({ id: brandId })
    return (
        <div className="flex items-center gap-1  px-3 py-1 rounded-full">
            <img className="h-4 " src={brand?.imageURL} alt="" />
            <h4 className="text-xs font-semibold">{brand?.name}</h4>
        </div>
    )
}