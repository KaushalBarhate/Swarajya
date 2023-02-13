import React, { useState, Suspense, useEffect } from "react";
import { Pagination } from "flowbite-react";
import LazyLoad from "react-lazy-load";
import { Button } from "flowbite-react";
import NavbarComponent from "./Navbar";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import ModalImage from "react-modal-image";
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
export default function Gallery2() {
  const [data, setData] = React.useState([]);
  const [hover, setHover] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const gallery = await sanityClient.fetch(
        `*[_type == "gallery"]{
            images,
          }`
      );
      setData(gallery[0].images);
      console.log(gallery[0].images);
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* <NavbarComponent text="Gallery" /> */}
      <h1
        onMouseEnter={() => setHover(false)}
        onMouseLeave={() => setHover(true)}
        className="-mt-20 max-[1300px]:mt-0 text-3xl  font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
      >
        {hover ? "Gallery" : "स्वराज्य"}
      </h1>
      <div className="grid  gap-6 mx-8 mt-12 sm:grid-cols-2 xl:grid-cols-3">
        {data.map((image, index) => (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyLoad>
              {/* <img
                src={urlFor(image).url()}
                className="hover:opacity-50  h-64 w-full object-cover rounded-lg mb-12"
              /> */}
              <ModalImage
                small={urlFor(image).url()}
                large={urlFor(image).url()}
                hideDownload={true}
                className="hover:opacity-50  h-64 w-full object-cover rounded-lg"
                hideZoom={true}
              />
            </LazyLoad>
          </Suspense>
        ))}
      </div>
    </div>
  );
  // ...
}
