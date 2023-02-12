import React from "react";
import { Card, Button } from "flowbite-react";
import LazyLoad from "react-lazy-load";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import NavbarComponent from "./Navbar";
import { Link } from "react-router-dom";
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
export default function Blogs() {
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
      console.log(blog);
      setData(blog);
    }
    fetchData();
  }, []);

  return (
    <div className="inset-x-0 bottom-0 mt-auto bg-gradient-to-r from-red-600 via-red-700 to-yellow-400  ">
      <NavbarComponent text="Blogs" marathi="स्वराज्य" />

      <div className="grid grid-cols-3 mx-12 my-12 gap-6 max-[800px]:grid-cols-1 max-[800px]:grid-cols-2 max-[500px]:grid-cols-1">
        {data.map((blog, index) => {
          return (
            <div className="max-[280px]:mx-0 max-[800px]:text-base mb-12">
              <LazyLoad>
                <Card imgAlt="Image" imgSrc={urlFor(blog.images[0]).url()}>
                  <h5 className=" min-[800px]:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {blog.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {blog.shortDescription.slice(0, 50) + "..."}
                  </p>

                  <div className="flex flex-wrap mt-2">
                    <span className="w-fit bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                      {blog.date}
                    </span>
                    {/* {blog.tags.slice(0, 4).map((tag2, index2) => {
                      return (
                        <span className="w-fit bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                          {tag2}
                        </span>
                      );
                    })} */}
                    {/* {blog.tags.length > 4 ? (
                      <span className="w-fit bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                        .....
                      </span>
                    ) : null} */}
                  </div>
                  <Link to={index.toString()}>
                    <Button className="w-full">
                      Read more
                      <svg
                        className="ml-2 -mr-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                  </Link>
                </Card>
              </LazyLoad>
            </div>
          );
        })}
      </div>
    </div>
  );
}
