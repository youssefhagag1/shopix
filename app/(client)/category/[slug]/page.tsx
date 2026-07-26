import CategoryProducts from "@/components/categoryProducts";
import Container from "@/components/Container";
import { Title } from "@/components/text";
import { Category } from "@/sanity.types";
import { getCategories } from "@/sanity/queries";
import React from "react";

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const categories = await getCategories() as Category[];
  const { slug } = await params;
  return (
    <div className="py-10">
      <Container>
        <Title>
          Products by Category{" "}
          <span className="font-bold text-green-600 capitalize tracking-wide">
            {slug && slug}
          </span>
        </Title>
        <CategoryProducts categories={categories} slug={slug} />
      </Container>
    </div>
  );
}

export default page;
