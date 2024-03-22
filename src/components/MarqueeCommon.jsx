import React from 'react'
import marqueeImg1 from '../assets/img/$EGGSHELL.png';
import Marquee from "react-fast-marquee";
export default function MarqueeCommon() {
  const marqueeImgs = [
    {
        image: marqueeImg1,
        alt: "Description for the image",
    },
    {
        image: marqueeImg1,
        alt: "Description for the image",
    },
    {
        image: marqueeImg1,
        alt: "Description for the image",
    },
    {
        image: marqueeImg1,
        alt: "Description for the image",
    },
    {
        image: marqueeImg1,
        alt: "Description for the image",
    },
    {
        image: marqueeImg1,
        alt: "Description for the image",
    },
    {
        image: marqueeImg1,
        alt: "Description for the image",
    },
    {
        image: marqueeImg1,
        alt: "Description for the image",
    },
    {
        image: marqueeImg1,
        alt: "Description for the image",
    },
    {
        image: marqueeImg1,
        alt: "Description for the image",
    },
    {
        image: marqueeImg1,
        alt: "Description for the image",
    },
    {
        image: marqueeImg1,
        alt: "Description for the image",
    },
    {
        image: marqueeImg1,
        alt: "Description for the image",
    },
    {
        image: marqueeImg1,
        alt: "Description for the image",
    },
    {
        image: marqueeImg1,
        alt: "Description for the image",
    },
];
  return (
    <section className="marquee">
       <Marquee direction="left">
            {marqueeImgs.map((marqueeImg, index) => (
                <figure key={index}>
                    <img src={marqueeImg.image} alt={marqueeImg.alt} />
                </figure>
            ))}
        </Marquee>
    </section>
  )
}
