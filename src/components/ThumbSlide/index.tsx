import React, { useEffect, useRef } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
import { generateSlides } from "./generateSlides";

function ThumbnailsExample() {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.splide.sync(thumbsRef.current.splide);
    }
  }, []);

  const renderSlides = () => {
    return generateSlides().map((slide) => (
      <SplideSlide key={slide.src}>
        <img src={slide.src} alt={slide.alt} />
      </SplideSlide>
    ));
  };

  const mainOptions: Options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    height: "50vh",
    gap: "1rem",
    pagination: false,
  };

  const thumbsOptions: Options = {
    type: "slide",
    rewind: true,
    gap: "1rem",
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: "center",
    isNavigation: true,
  };

  return (
    <div className="wrapper" style={{ width: "50%" }}>
      <h2 id="thumbnail-slider-example">Thumbnail Slider</h2>

      <Splide
        options={mainOptions}
        ref={mainRef}
        aria-labelledby="thumbnail-slider-example"
      >
        {renderSlides()}
      </Splide>

      <Splide
        options={thumbsOptions}
        ref={thumbsRef}
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
      >
        {renderSlides()}
      </Splide>
    </div>
  );
}

export default ThumbnailsExample;
