"use client";
import { productType } from "@/constants/data";
import { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";
import NoProductAvailable from "./NoProductAvailable";
import { AnimatePresence , motion } from "motion/react";
import ProductCard from "./ProductCard";
import { Product } from "@/sanity.types";

function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string>(
    productType[0]?.title || "",
  );
  const query = `*[_type == "product" && variant == $variant] | order(name asc){
  ...,"categories": categories[]->title
}`;
  const params = { variant: selectedTab.toLowerCase() };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(response);
      } catch (error) {
        console.log("Product fetching Error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedTab]);

  return (
    <div className="my-10">
      <HomeTabBar selectedTab={selectedTab} onSelectTab={setSelectedTab} />
      {loading ? (
        <div className="flex justify-center items-center min-h-80 gap-4 bg-gray-100 w-full mt-10">
          <div className="space-x-2 flex flex-col items-center text-blue-600">
            <Loader2 className="animate-spin w-5 h-6" />
            <span>Products are loading...</span>
          </div>
        </div>
      ) : products.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <AnimatePresence>
            {products.map((product: Product) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </div>
  );
}

export default ProductGrid;
