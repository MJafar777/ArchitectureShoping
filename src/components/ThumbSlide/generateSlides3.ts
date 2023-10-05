import {
  room11,
  room21,
  room31,
  room41,
  room43,
  room44,
  room46,
  room47,
} from "assets/room";

/**
 * Return an array with objects containing data of sample images.
 *
 * @param length - Optional. A number of slides.
 * @param sig    - Optional. The signature for getting a different image.
 *
 * @return An array with objects for sample images.
 */

export function generateSlides3(
  length = 6,
  sig = 0
): Array<{ src: string; alt: string }> {
  return Array.from({ length }).map((value, index) => {
    index = sig || index;

    if (index + 1 == 1) {
      return {
        src: `${room46}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 2) {
      return {
        src: `${room11}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 3) {
      return {
        src: `${room21}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 4) {
      return {
        src: `${room31}`,
        alt: `Image ${index + 1}`,
      };
    } else {
      return {
        src: `${room44}`,
        alt: `Image ${index + 1}`,
      };
    }
  });
}
