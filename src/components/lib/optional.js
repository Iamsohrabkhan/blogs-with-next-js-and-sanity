const { default: Image } = require("next/image");

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

 export const optional = {
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