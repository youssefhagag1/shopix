import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SociaMedia from './SociaMedia'
import { SubText, Title, SubTitle } from './text'
import { categoriesData, quickLinks } from '@/constants/data'
import Link  from 'next/link'
import { Button } from './ui/button'
import { Input } from './ui/input'

function Footer() {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="space-y-4">
            <Logo />
            <SubText>
              Discover curated products for your lifestyle and needs.
            </SubText>
            <SociaMedia className="hover:text-dark" />
          </div>
          <div className="space-y-4">
            <SubTitle>Quick Links</SubTitle>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.title} className="mt-3.5">
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-shop-light-green capitalize font-medium hoverEffect"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Categories</SubTitle>
            <ul>
              {categoriesData.map((category) => (
                <li key={category.title} className="mt-3.5">
                  <Link
                    href={`/category/${category?.href}`}
                    className="text-gray-600 hover:text-shop-light-green capitalize font-medium hoverEffect"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Newsletter</SubTitle>
            <SubText>Subscribe to our newsletter for the latest updates and offers.</SubText>
            <form action="" className="space-y-3">
              <Input
                type="email"
                required
                className="w-full "
                placeholder="Your email address"
              />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div>
          <p className="text-center text-gray-500 text-sm  border-t py-4">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-md text-dark uppercase">Shopix</span>. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer
