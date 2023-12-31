import React from "react";

const About = () => {
  return (
    <section className="py-16 ">
      <div className="container relative flex flex-col gap-9 justify-center items-center">
        <article className="flex items-center justify-center flex-col text-center gap-5">
          <h1
            className="text-white text-7xl font-special"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            About Doinker
          </h1>
          <div
            data-aos="fade-up"
            className="text-center text-white text-2xl font-normal max-w-2xl"
          >
            Doinker is a meme coin tribute to Matt Furie’s ZOGZ NFT Collection
            out of 111 unique pieces of art. <br />
            <br /> This collection has quickly taken over the memecoin space as
            the #1 trending source for new tokens. <br />
            <br /> Doinker features a silly colorful creature with a split
            tongue and crazy eyes. Some call him a doink but we call him
            “Doinker”
          </div>
          <a
            data-aos="fade-down"
            href="https://opensea.io/assets/ethereum/0x808e5cd160d8819ca24c2053037049eb611d0542/87"
            className=" h-[60px] px-8 py-4 bg-[#fff] rounded shadow justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-[#05165E] text-xl font-special leading-7 tracking-tight">
              Doinker NFTs{" "}
            </div>
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
