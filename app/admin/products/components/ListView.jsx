"use client"

import { useProducts } from "@/lib/firebase/products/read";
import { deleteProduct } from "@/lib/firebase/products/write";
import { Button, CircularProgress } from "@nextui-org/react";
import { Edit, Edit2, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


export default function ListView() {
    const [pageLimit, setPageLimit] = useState(10)
    const [lastSnapDocList, setlastSnapDocList] = useState([]);
    useEffect(() => {
        setlastSnapDocList([]);
    }, [pageLimit])
    const {
        data: products,
        error,
        isLoading,
        lastSnapDoc,
    } = useProducts({
        pageLimit: pageLimit,
        lastSnapDoc:
            lastSnapDocList?.length === 0
                ? null
                : lastSnapDocList[lastSnapDocList?.length - 1],
    });

    const handleNextPage = () => {
        let newStack = [...lastSnapDocList];
        newStack.push(lastSnapDoc);
        setlastSnapDocList(newStack);
    };
    const handlePrePage = () => {
        let newStack = [...lastSnapDocList];
        newStack.pop();
        setlastSnapDocList(newStack);
    };

    if (isLoading) {
        return (
            <div>
                <CircularProgress />
            </div>
        );
    }
    if (error) {
        return (
            <div>

                {error}
            </div>
        );
    }
    return (
        <div className="flex-1 flex flex-col gap-3 md:pr-5 md:px-0 px-5 rounded-xl w-full overflow-x-auto">
            <table className="border-separate border-spacing-y-3">
                <thead>
                    <tr>
                        <th className="font-semibold border-y bg-white px-3 py-2 border-l rounded-l-lg">
                            SN
                        </th>
                        <th className="font-semibold border-y bg-white px-3 py-2">Image</th>
                        <th className="font-semibold border-y bg-white px-3 py-2 text-left">
                            Title
                        </th>
                        <th className="font-semibold border-y bg-white px-3 py-2 text-left">
                            Price
                        </th>
                        <th className="font-semibold border-y bg-white px-3 py-2 text-left">
                            Stock
                        </th>
                        <th className="font-semibold border-y bg-white px-3 py-2 text-left">
                            Orders
                        </th>
                        <th className="font-semibold border-y bg-white px-3 py-2 text-left">
                            Status
                        </th>
                        <th className="font-semibold border-y bg-white px-3 py-2 border-r rounded-r-lg text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((item, index) => {
                        return <Row index={index + lastSnapDocList?.length * pageLimit} item={item} key={item?.id} />;
                    })}
                </tbody>
            </table>
            <div className="flex justify-between text-sm py-3">
                <Button isDisabled={isLoading || lastSnapDocList?.length === 0} onClick={handlePrePage} size="sm" variant="bordered">Previous</Button>
                <select
                    value={pageLimit}
                    onChange={(e) => setPageLimit(e.target.value)}
                    className="px-5 rounded-xl"
                    name="perpage" id="perpage"
                >
                    <option value={3}>3 items</option>
                    <option value={5}>5 items</option>
                    <option value={10}>10 items</option>
                    <option value={20}>20 items</option>
                    <option value={100}>100 items</option>
                </select>
                <Button isDisabled={isLoading || products?.length === 0} onClick={handleNextPage} size="sm" variant="bordered">Next</Button>
            </div>
        </div>
    );
}
function Row({ item, index }) {
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm("Are you sure?")) return;
        setIsDeleting(true);
        try {
            await deleteProduct({ id: item?.id });
            toast.success("Successfully Deleted");
        } catch (error) {
            toast.error(error?.message);
        }
        setIsDeleting(false)
    };
    const handleUpdate = () => {
        router.push(`/admin/products/form?id=${item?.id}`);
    }
    return (
        <tr>
            <td className="border-y bg-white px-3 py-2 border-l rounded-l-lg text-center">
                {index + 1}
            </td>
            <td className="border-y bg-white px-3 py-2 text-center">
                <div className="flex justify-center">
                    <img className="h-10 w-10 object-cover" src={item?.featureImageURL} alt="" />
                </div>

            </td>
            <td className="border-y bg-white px-3 py-2 whitespace-nowrap">{item?.title} {item?.isFeatured===true && <span className=" ml-2 bg-gradient-to-tr from-blue-600 to-indigo-400 text-white text-[10px] rounded-full px-3 py-1">Featured</span>}</td>
            <td className="border-y bg-white px-3 py-2">
                {item?.salePrice < item?.price && <span className="text-xs text-gray-500 line-through"> ₨{item?.price}</span>} ₨{item?.salePrice}
            </td>
            <td className="border-y bg-white px-3 py-2">{item?.stock}</td>
            <td className="border-y bg-white px-3 py-2">{item?.orders ?? 0}</td>
            <div className="flex">
                <td className="border-y bg-white px-3 py-5">
                    {(item?.stock - (item?.orders ?? 0)) > 0 && (
                        <div className="px-2 py-1 text-xs text-green-600 bg-green-100 rounded-md font-bold">
                            Available
                        </div>
                    )}
                    {(item?.stock - (item?.orders ?? 0)) <= 0 && (
                        <div className="px-2 py-1 text-xs text-red-600 bg-red-100 rounded-md font-bold">
                            Out Of Stock</div>
                    )}
                </td>
            </div>
            <td className="border-y bg-white px-3 py-2 border-r rounded-r-lg">
                <div className="flex gap-2 items-center">
                    <Button
                        onClick={handleUpdate}
                        isDisabled={isDeleting}
                        isIconOnly
                        size="sm"
                    >
                        <Edit2 size={13} />
                    </Button>
                    <Button
                        onClick={handleDelete}
                        isLoading={isDeleting}
                        isDisabled={isDeleting}
                        isIconOnly
                        size="sm"
                        color="danger"
                    >
                        <Trash2 size={13} />
                    </Button>
                </div>
            </td>
        </tr>
    );
}