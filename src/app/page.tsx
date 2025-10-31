"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from "@/providers/ThemeProvider";
import { BookOpen, Flame, Heart, Leaf, Mail, MessageCircle, Sparkles, Star, UtensilsCrossed } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Tony's Pizza"
          button={{
            text: "Order Now",
            href: "https://delivery.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Authentic Italian Pizza"
          description="Fresh ingredients, wood-fired perfection, delivered to your door. Experience the taste of Italy with every bite."
          tag="Now Open"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Order Now",
              href: "https://delivery.example.com"
            },
            {
              text: "View Menu",
              href: "menu"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Fresh margherita pizza with basil leaves"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Story"
          description="Three generations of Italian tradition brought to your neighborhood. We use only the finest ingredients and time-honored recipes."
          tag="Family Tradition"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Wood-Fired Ovens",
              description: "Authentic Neapolitan style cooking at 900°F",
              icon: Flame
            },
            {
              title: "Fresh Ingredients",
              description: "Daily deliveries of premium mozzarella and San Marzano tomatoes",
              icon: Leaf
            },
            {
              title: "Family Recipes",
              description: "Secret dough recipe passed down for over 60 years",
              icon: BookOpen
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/uploaded-1761587831101-j4vav288.png"
          imageAlt="Traditional pizza making process"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Our Specialties"
          description="Discover our signature pizzas, each crafted with passion and the finest ingredients"
          tag="Featured"
          tagIcon={Star}
          features={[
            {
              id: "01",
              title: "Margherita Classic",
              description: "San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil",
              imageSrc: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "02",
              title: "Pepperoni Supreme",
              description: "Premium pepperoni, mozzarella, our signature tomato sauce",
              imageSrc: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "03",
              title: "Tony's Special",
              description: "Italian sausage, mushrooms, bell peppers, onions, olives",
              imageSrc: "https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardTwo
          title="Full Menu"
          description="Browse our complete selection of authentic Italian pizzas"
          tag="Menu"
          tagIcon={UtensilsCrossed}
          products={[
            {
              id: "1",
              brand: "Tony's Pizza",
              name: "Margherita",
              price: "$16.99",
              rating: 5,
              reviewCount: "892",
              imageSrc: "https://images.pexels.com/photos/34514/spot-runs-start-la.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Margherita pizza"
            },
            {
              id: "2",
              brand: "Tony's Pizza",
              name: "Pepperoni",
              price: "$18.99",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Pepperoni pizza"
            },
            {
              id: "3",
              brand: "Tony's Pizza",
              name: "Four Seasons",
              price: "$22.99",
              rating: 4,
              reviewCount: "567",
              imageSrc: "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Four seasons pizza"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real reviews from pizza lovers in our community"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Maria Rodriguez",
              role: "Local Resident",
              company: "Downtown",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/2531156/pexels-photo-2531156.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Maria Rodriguez"
            },
            {
              id: "2",
              name: "James Wilson",
              role: "Food Blogger",
              company: "Taste & Tell",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Wilson"
            },
            {
              id: "3",
              name: "Sarah Chen",
              role: "Regular Customer",
              company: "Midtown",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Chen"
            },
            {
              id: "4",
              name: "Mike Thompson",
              role: "Pizza Enthusiast",
              company: "Northside",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Mike Thompson"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about ordering from Tony's Pizza"
          faqs={[
            {
              id: "1",
              title: "What are your delivery hours?",
              content: "We deliver Monday through Sunday from 11 AM to 11 PM. Orders placed after 10:30 PM will be delivered the next day."
            },
            {
              id: "2",
              title: "Do you offer gluten-free options?",
              content: "Yes! We offer gluten-free pizza crusts made in a separate kitchen area to prevent cross-contamination. Please mention any allergies when ordering."
            },
            {
              id: "3",
              title: "What's your delivery radius?",
              content: "We deliver within a 5-mile radius of our location. Delivery fee is $3.99 for orders under $25, free delivery for orders over $25."
            },
            {
              id: "4",
              title: "Can I customize my pizza?",
              content: "Absolutely! You can add, remove, or substitute any toppings. We also offer half-and-half pizzas if you can't decide on just one combination."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Updated"
          tagIcon={Mail}
          title="Get Our Latest Deals"
          description="Sign up for our newsletter and be the first to know about new menu items, special offers, and exclusive discounts."
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive promotional emails from Tony's Pizza. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Tony's Pizza"
          columns={[
            {
              items: [
                { label: "Menu", href: "menu" },
                { label: "Order Online", href: "https://delivery.example.com" },
                { label: "Catering", href: "https://catering.example.com" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Reviews", href: "testimonials" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "(555) 123-PIZZA", href: "tel:5551237492" },
                { label: "123 Main St, Pizza City", href: "https://maps.google.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}