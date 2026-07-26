import React from 'react'
import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import ProductGrid from '@/components/ProductGrid'
import HomeCategories from '@/components/HomeCategories';
import { getCategories } from '@/sanity/queries';
import { Category } from '@/sanity.types';
import ShopByBrands from '@/components/ShopByBrands';
import LatestBlog from '@/components/LatestBlog';
async function Home() {
  const categories = await getCategories(6);
  return (
    <Container>
      <div>
        <HomeBanner />
        <ProductGrid />
        <HomeCategories categories={categories as Category[]} /> 
        <ShopByBrands />
        <LatestBlog />
      </div>
    </Container>
  );
}

export default Home
