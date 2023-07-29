
import Teams from "./teams";
import Hero from "./hero";
import client from "@/components/lib/client";

const getData= async()=>{
  const query = `*[_type == "author"]{
    name,
    image{asset{_ref}},
    profession
  }`;
  
  const data=await client.fetch(query)
  return data
}
export default async function Home() {
  const authors=await getData()

  return (
    <>
      <Hero />
      <Teams authors={authors} />
    </>
  );
}
