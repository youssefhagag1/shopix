import Container from '@/components/Container';
import ImageView from '@/components/ImageView';
import { Product } from '@/sanity.types';
import { getProductBySlug } from '@/sanity/queries';
  import React from 'react'

async function page({ params }: Promise<{slug: string }>) {
  const { slug } = await params;
  const product = await getProductBySlug(slug) as Product;
  const isStock = product?.stock > 0;
  return (
    <Container className='flex flex-col md:flex-row gap-10 md:gap-20 pb-10'>
      <div>
        {product?.images && <ImageView images={product.images} isStock={isStock}/>}
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-5"></div>
    </Container>
  )
}

export default page
