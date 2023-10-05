import { room21, room22, room23, room24, room25, room26 } from "assets/room";

/**
 * Return an array with objects containing data of sample images.
 *
 * @param length - Optional. A number of slides.
 * @param sig    - Optional. The signature for getting a different image.
 *
 * @return An array with objects for sample images.
 */

export function generateSlides1(
  length = 8,
  sig = 0
): Array<{ src: string; alt: string }> {
  return Array.from({ length }).map((value, index) => {
    index = sig || index;
    // let room1 = "room";
    if (index + 1 == 1) {
      return {
        src: `${room21}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 2) {
      return {
        src: `${room22}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 3) {
      return {
        src: `${room23}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 4) {
      return {
        src: `${room24}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 5) {
      return {
        src: `${room25}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 6) {
      return {
        src: `${room26}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 7) {
      return {
        src: `${room21}`,
        alt: `Image ${index + 1}`,
      };
    } else {
      return {
        src: `${room21}`,
        alt: `Image ${index + 1}`,
      };
    }
  });
}
