import React from "react";
import Member from "./member";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight text-right">
          <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </strong> <br />
          <br />
          Aliquam lorem neque, malesuada vitae interdum et, pretium nec odio. Nam dictum tellus ex, non bibendum lorem laoreet sit
          amet. Aliquam lorem neque, malesuada vitae interdum et, pretium nec odio. Nam dictum tellus ex, non bibendum lorem
          laoreet sit amet.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-20">
        <div className="justify-center items-center flex flex-col">
          <img src="https://i.gifer.com/My.gif" width="600" height="500" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
