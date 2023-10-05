import React, { useEffect, useRef } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
import { generateSlides } from "./generateSlides";
import { useParams } from "react-router-dom";
import { generateSlides1 } from "./generateSlides1";
import { generateSlides2 } from "./generateSlides2";
import { generateSlides3 } from "./generateSlides3";

function ThumbnailsExample() {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);
  const params = useParams();
  console.log(params.id, "fghjk");

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.splide.sync(thumbsRef.current.splide);
    }
  }, []);

  const renderSlides = () => {
    if (params.id == "1") {
      return generateSlides().map((slide) => (
        <SplideSlide key={slide.src}>
          <img src={slide.src} alt={slide.alt} />
        </SplideSlide>
      ));
    } else if (params.id == "2") {
      return generateSlides1().map((slide) => (
        <SplideSlide key={slide.src}>
          <img src={slide.src} alt={slide.alt} />
        </SplideSlide>
      ));
    } else if (params.id == "3") {
      return generateSlides2().map((slide) => (
        <SplideSlide key={slide.src}>
          <img src={slide.src} alt={slide.alt} />
        </SplideSlide>
      ));
    } else {
      return generateSlides3().map((slide) => (
        <SplideSlide key={slide.src}>
          <img
            className="w-100"
            style={{ width: "700px" }}
            src={slide.src}
            alt={slide.alt}
          />
        </SplideSlide>
      ));
    }
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
