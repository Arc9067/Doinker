import React from "react";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section
      className="py-24 w-full min-h-screen flex justify-center items-center"
      id="hero"
    >
      <div className="container flex items-center flex-col gap-5">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-6xl text-center md:text-9xl font-special"
        >
          Doinker
        </h1>
        <img
          src={Logo}
          alt=""
          data-aos="fade-left"
          data-aos-duration="1100"
          className="md:w-8/12"
        />
      </div>
    </section>
  );
};

export default Hero;
