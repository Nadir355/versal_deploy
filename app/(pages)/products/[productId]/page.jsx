import { getProduct } from "@/lib/firebase/products/read_server";
import Photos from "./components/Photos";
import Deatils from "./components/Deatils";
import Reviews from "./components/Review";
import RealtedProducts from "./components/RealtedProduct";

export default async function Page({ params }) {
    const { productId } = params;
    const product = await getProduct({ id: productId })
    return <main className="md:p-10 p-5">
        {/* Photo Deatils */}
        <section className="flex gap-3 flex-col-reverse md:flex-row ">
            <Photos imageList={[product?.featureImageURL, ...(product?.imageList ?? [])]} />
            <Deatils product={product} />
        </section>
        {/* Description , Review */}
        <Reviews productId={productId} />
        <RealtedProducts categoryId={product?.categoryId} />

    </main>
}