import React from "react";

const Mics = () => {
  return (
    <section className="py-16 ">
      <div className="container relative flex flex-col gap-9 justify-center items-center">
        <article className="flex items-center justify-center flex-col text-center gap-5">
          <h1
            className="text-white text-7xl font-special"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Mics
          </h1>
          <ul
            data-aos="fade-up"
            className="text-center text-white text-2xl font-normal max-w-2xl flex flex-col justify-center items-center gap-8"
          >
            <li className="text-2xl">1/1 tax</li>
            <li className="text-2xl">100m supply </li>
            <li className="text-2xl">2% max txnx</li>
          </ul>
          <a
            data-aos="fade-down"
            href="https://t.me/DoinkerETH"
            className=" h-[60px] px-8 py-4 bg-[#fff] rounded shadow justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-[#05165E] text-xl font-special leading-7 tracking-tight">
              Telegram{" "}
            </div>
          </a>
        </article>
      </div>
    </section>
  );
};

export default Mics;
