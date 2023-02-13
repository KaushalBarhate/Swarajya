import React, { useState, Suspense, useEffect } from "react";
import { Pagination } from "flowbite-react";
import LazyLoad from "react-lazy-load";
import { Button } from "flowbite-react";
import NavbarComponent from "./Navbar";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
export default function Gallery2() {
  const [data, setData] = React.useState([]);

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
    <>
      <NavbarComponent text="Gallery" />

      <div className="grid grid-cols-3 gap-4 mx-8 ">
        {data.map((image, index) => (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyLoad>
              <img
                src={urlFor(image).url()}
                className="hover:opacity-50  h-64 w-full object-cover rounded-lg"
              />
            </LazyLoad>
          </Suspense>
        ))}
      </div>
    </>
  );
  // ...
}
