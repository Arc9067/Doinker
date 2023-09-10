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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            quis aliquam cum incidunt laudantium illo deleniti voluptatibus
            exercitationem dignissimos? Ducimus tempora impedit praesentium
            dolores pariatur veniam repudiandae. Labore, nobis tempore!
          </div>
          <a
            data-aos="fade-down"
            href=""
            className=" h-[60px] px-8 py-4 bg-[#fff] rounded shadow justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-[#05165E] text-xl font-special leading-7 tracking-tight">
              BUY NOW
            </div>
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
