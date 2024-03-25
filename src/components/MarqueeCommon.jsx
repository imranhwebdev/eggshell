import React from 'react'
import marqueeImg from '../assets/img/$moat.png';
import Marquee from "react-fast-marquee";
export default function MarqueeCommon() {
    const marqueeImgs = [
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        },
        {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        }, {
            image: marqueeImg,
        },
    ];
    return (
        <section className="marquee">
            <Marquee direction="left" speed={100}>
                {marqueeImgs.map((marqueeImg, index) => (
                    <figure key={index}>
                        <img src={marqueeImg.image} alt="" />
                    </figure>
                ))}
            </Marquee>
        </section>
    )
}
