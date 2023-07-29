/* eslint-disable @next/next/no-img-element */
import {Star } from "@/components/icons/star";
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

  const codeBlock = ({ children }) => {
    return (
      <pre className="bg-green-400 py-2 px-1">
        <code>{children}</code>
      </pre>
    );
  };


  const em = {
    marks: {
      // Ex. 1: custom renderer for the em / italics decorator
      // em: ({children}) => <em className="text-green-600 font-semibold">{children}</em>,
    },
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-purple-500">{children}</blockquote>
      ),

      // Ex. 2: rendering custom styles
      customHeading: ({ children }) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
    },
  };

  const components = {
    types: {
      image: SampleImageComponent,
      code: codeBlock,

      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
  };
  7;

  return (
    <main className="prose mx-auto py-24 dark:prose-invert prose-indigo prose-img:rounded-md px-5">
      <article>
        <h1>{data?.title}</h1>
        <p>{data?.description}</p>

        {/* author */}
        <div className="h-10 space-x-16  [&>*]:-translate-y-8">
          <div className="relative w-10 h-10">
            <Image
              src={urlFor(data?.author?.image?.asset?._ref).width(200).url()}
              fill
              alt={data?.author?.name}
              className="object-cover object-center rounded-full"
            />
          </div>
          <div className="name font-bold">By : {data?.author?.name}</div>
        </div>
        <div className="my-2">
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
            <div className="absolute px-4 -translate-x-1/2 bg-light left-1/2 dark:bg-dark">
              <Star />
            </div>
          </div>
        </div>

        {/* content */}
        <div className="">
          <PortableText value={data?.body} components={components} />
        </div>
      </article>
    </main>
  );
};

export default BlogContent;
