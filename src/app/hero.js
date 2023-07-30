import Link from "next/link";

const Hero = () => {
  return (
    <div className="dark:bg-dark">
      <section className=" mt-9 md:mt-4 lg:mt-0 py-10 sm:py-12 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
                A social media for learners
              </p>
              <h1 className="mt-2 text-4xl font-bold text-black dark:text-white lg:mt-8 sm:text-5xl xl:text-6xl">
                Unraveling the World of Tech
              </h1>
              <p className="mt-4 text-base text-black dark:text-white lg:mt-6 sm:text-xl">
                Your Source for Cutting-Edge Insights
              </p>
              <Link
                href="/blogs"
                className="inline-flex items-center px-6 py-4 mt-4 font-semibold text-black dark:text-white transition-all duration-200 bg-yellow-300 rounded-full lg:mt-8 hover:bg-yellow-400 focus:bg-yellow-400 dark:bg-yellow-600"
                role="button"
              >
                See Blogs
              </Link>
            </div>
            <div className="">
              <img
                className="w-full dark:text-white"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
