import Shop from '@/components/Shop';
import { Brand, Category } from '@/sanity.types';
import { getAllBrands, getCategories } from '@/sanity/queries';

async function ShopPage() {
  const categories = await getCategories() as Category[];
  const brands = await getAllBrands() as Brand[];
  return (
    <div>
      <Shop categories={categories} brands={brands} />
    </div>
  )
}

export default ShopPage
