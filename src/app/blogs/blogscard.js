import { formatDate } from "@/components/lib/date";
import { urlFor } from "@/components/lib/imageurl";
import Image from "next/image";
import Link from "next/link";
const Blogscard = ({ data }) => {
  return (

    <div className="w-full max-w-3xl mx-auto">
      {data.map((curr, idx) => (
        <div className="relative pl-8 sm:pl-32 py-6 group" key={idx}>
          {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          {/* Purple label */}
          <div>

          <div className="font-caveat font-medium text-2xl text-indigo-500 dark:text-indigo-300 mb-1 sm:mb-0 capitalize">
           <Link href={`/blogs/${curr.slug.current}`}>{curr.title}</Link> 
          </div>
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-24 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full px-2">
              {formatDate(curr.publishedAt)}
            </time>
            <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Publish at :{" "}
              <span className="text-gray-500 dark:text-gray-400 text-xs">
                {formatDate(curr.author._createdAt)}
              </span>
            </div>
          </div>
          </div>
          {/* Content */}
          <div className="text-slate-500 line-clamp-3 dark:text-light_primary">{curr.description}</div>

          <div className="flex items-center space-x-4 mt-4">
            <div className="relative w-10 h-10">
              <Image
                fill
                src={urlFor(curr.author.image.asset._ref).width(200).url()}
                className="object-cover object-center rounded-full dark:bg-gray-500"
                alt="avatar"
              />
            </div>
            <div className="font-medium dark:text-white ">
              <div>{curr.author.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in{" "}
                {new Date(curr.author._createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </div>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Blogscard;
