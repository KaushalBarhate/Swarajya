import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import NavbarComponent from "./Navbar";
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
export default function Blog() {
  let { id } = useParams();
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      const blog = await sanityClient.fetch(
        `*[_type == "blog"]{
          title,
          shortDescription,
          mainDescription,
          images,
          date
        }`
      );
      setData(blog[id]);
    }
    fetchData();
  }, []);
  return (
    <div>
      <NavbarComponent text="Blog" marathi="स्वराज्य" />
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 text-center">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {data.title}
              </h1>
            </header>
            <p className="lead">{data.shortDescription}</p>
            <figure>
              {data.images ? (
                <img
                  className="my-8 mx-auto"
                  src={urlFor(data.images[0]).url()}
                  alt=""
                ></img>
              ) : null}
            </figure>
            <p>{data.mainDescription}</p>
          </article>
        </div>
        <Button
          className="mx-auto  mt-8  items-center justify-center"
          onClick={(e) => {
            e.preventDefault();
            try {
              window.location.href = "/blogs";
            } catch {}
          }}
        >
          Read Other Blogs
        </Button>
      </main>
    </div>
  );
}
