import {
  room31,
  room32,
  room33,
  room34,
  room35,
  room36,
  room37,
  room38,
} from "assets/room";

/**
 * Return an array with objects containing data of sample images.
 *
 * @param length - Optional. A number of slides.
 * @param sig    - Optional. The signature for getting a different image.
 *
 * @return An array with objects for sample images.
 */

export function generateSlides2(
  length = 8,
  sig = 0
): Array<{ src: string; alt: string }> {
  return Array.from({ length }).map((value, index) => {
    index = sig || index;

    if (index + 1 == 1) {
      return {
        src: `${room31}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 2) {
      return {
        src: `${room32}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 3) {
      return {
        src: `${room33}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 4) {
      return {
        src: `${room34}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 5) {
      return {
        src: `${room35}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 6) {
      return {
        src: `${room36}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 7) {
      return {
        src: `${room37}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 7) {
      return {
        src: `${room38}`,
        alt: `Image ${index + 1}`,
      };
    } else {
      return {
        src: `${room32}`,
        alt: `Image ${index + 1}`,
      };
    }
  });
}
