import React from "react";
import Blogscard from "./blogscard";
import client from "@/components/lib/client";

export const revalidate = 60 // revalidate this page every 60 seconds
const getData= async()=>{
  const query = `*[_type == "post"] {
    mainImage { asset },
    slug { current },
    title,
    body,
    description,
    author->{
      _createdAt,
      name,
      image{ asset { _ref } },
    },
    publishedAt
  } | order(publishedAt asc)`;
  
  const data=await client.fetch(query)
  return data
}

const Blogs =async () => {
 const data=await getData()
  return (
    <>
  <main className="relative min-h-screen flex flex-col justify-center overflow-hidden">
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12">
      <div className="mt-3 md:mt-0 max-w-3xl mx-auto">

     <h2 className="text-5xl font-black mt-16 dark:text-white">Blogs</h2>     
      </div>
      <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
          {/* Vertical Timeline #1 */}
          <div className="-my-6">            
           < Blogscard data={data}/>      
        </div>
  
      </div>
    </div>
  </main>

</>

  );
};

export default Blogs;
