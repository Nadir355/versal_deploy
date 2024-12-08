
import { getFeaturedProducts, getProducts } from "@/lib/firebase/products/read_server";
import Header from "./components/Header";
import FeaturedProductSlider from "./components/Sliders";
import Collections from "./components/Collections";
import { getCollections } from "@/lib/firebase/collections/read_server";
import Categories from "./components/Categories";
import { getCategories } from "@/lib/firebase/categories/read_server";
import ProductsGridView from "./components/Products";
import CustomerReviews from "./components/CustomerReview";
import Brands from "./components/Brands";
import { getBrands } from "@/lib/firebase/brands/read_server";
import Footer from "./components/Footer";


export default async function Home() {
  const [featuredProducts,collections,categories,products,brands]=await Promise.all([
    getFeaturedProducts(),
    getCollections(),
    getCategories(),
    getProducts(),
    getBrands()
  ])
  return (
    <main className=" w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <FeaturedProductSlider featuredProducts={featuredProducts} />
      <Collections collections={collections} />
      <Categories categories={categories} />
      <ProductsGridView products={products} />
      <CustomerReviews />
      <Brands brands={brands}/>
      <Footer />
    </main>
  );
}
