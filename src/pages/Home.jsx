import React from 'react';
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import BlogPreview from "../components/BlogPreview";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="pt-24">
      <Hero />
      <Portfolio />
      <About />
      <BlogPreview />
      <Contact />
    </div>
  );
};

export default Home;
