import { urlFor } from "@/components/lib/imageurl";
import Image from "next/image";

const Teams = ({authors}) => {
  return (
    <section className="py-10 bg-gray-50 dark:bg-dark sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black dark:text-light sm:text-4xl lg:text-5xl">
            Meet the brains
          </h2>
          <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600 dark:text-white">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>
        <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">

      {
        authors.map((curr,idx)=>(
          <div key={idx}>
          <div>
            <div className="relative w-28 h-28">
              <Image
                fill
                className="object-cover object-center mx-auto rounded-lg ml-3"
                src={urlFor(curr.image.asset._ref).url()}
                alt={curr.name}
              />
            </div>
            <p className="mt-8 text-lg font-semibold leading-tight text-black dark:text-white">
             {curr.name}
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600 capitalize">
            {curr.profession}
            </p>
          </div>
          <div className="hidden lg:block" />

          </div>
        ))
      } 

        </div>
      </div>
    </section>
  );
};

export default Teams;
