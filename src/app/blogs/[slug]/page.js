/* eslint-disable @next/next/no-img-element */
import { Star } from "@/components/icons/star";
import client from "@/components/lib/client";
import { urlFor } from "@/components/lib/imageurl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

const getData = async (currSlug) => {
  const query = `*[_type == "post" && slug.current == "${currSlug}"][0]{
    slug { current },
    title,
    body,
    description,
    author->{
       name,bio,slug{current},profession,_createdAt,image{asset{_ref}}
    },
    publishedAt
}
`;
  const data = await client.fetch(query);
  return data;
};
const BlogContent = async ({ params }) => {
  const data = await getData(params.slug);

  const SampleImageComponent = ({ value, isInline }) => {
    return (
      <Image
        src={urlFor(value).url()}
        alt={value.alt || " "}
        loading="lazy"
        className="object-cover object-center"
        width={500}
        height={500}
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? "inline-block" : "block",
        }}
      />
    );
  };
  const CustomCode = ({ value }) => {
    return <pre className="">{value}</pre>;
  };
  const HighlightDecorator = (props) => (
    <span className="bg-indigo-400 text-light p-1 mx-1 rounded">
      {props.children}
    </span>
  );

  const components = {
    types: {
      image: SampleImageComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
    marks: {
      // code: CustomCode,
      highlight: HighlightDecorator,
    },
  };

  return (
    <main className="prose mx-auto py-24 dark:prose-invert prose-indigo prose-img:rounded-md px-5">
      <article>
        {/* content */}
        <h1>{data?.title}</h1>

        <div className="">
          <PortableText value={data?.body} components={components} />
        </div>
        <div className="my-2">
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
            <div className="absolute px-4 -translate-x-1/2 bg-light left-1/2 dark:bg-dark">
              <Star />
            </div>
          </div>
        </div>

        {/* author */}
        <div>
          <PortableText value={data?.author?.bio} components={components} />
        </div>

        <div className=" space-x-14">
          <div className="relative w-10 h-10 -translate-y-8">
            <Image
              src={urlFor(data?.author?.image?.asset?._ref).width(200).url()}
              fill
              alt={data?.author?.name}
              className="object-cover object-center rounded-full"
            />
          </div>
          <div className="-space-y-1 -translate-y-8 ">
            <div className="name font-bold text-sm">
              By : {data?.author?.name}
            </div>
            <div className="text-sm">
              Joined in{" "}
              <span className="font-bold">
                {" "}
                {new Date(data?.author?._createdAt).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                  }
                )}
              </span>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogContent;
