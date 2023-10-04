import { room11, room12, room13, room14, room15 } from "assets/room";
import img from "../../assets/room/room11.jpg";
/**
 * Return an array with objects containing data of sample images.
 *
 * @param length - Optional. A number of slides.
 * @param sig    - Optional. The signature for getting a different image.
 *
 * @return An array with objects for sample images.
 */
export function generateSlides(
  length = 8,
  sig = 0
): Array<{ src: string; alt: string }> {
  return Array.from({ length }).map((value, index) => {
    index = sig || index;
    // let room1 = "room";
    return {
      src: `${room11}`,
      alt: `Image ${index + 1}`,
    };
    // switch (index) {
    //   case 1:

    //   case 2:
    //     return {
    //       src: `${room12}`,
    //       alt: `Image ${index + 1}`,
    //     };

    //   case 3:
    //     return {
    //       src: `${room13}`,
    //       alt: `Image ${index + 1}`,
    //     };

    //   case 4:
    //     return {
    //       src: `${room14}`,
    //       alt: `Image ${index + 1}`,
    //     };
    //   case 5:
    //     return {
    //       src: `${room15}`,
    //       alt: `Image ${index + 1}`,
    //     };
    //   case 6:
    //     return {
    //       src: `${room11}`,
    //       alt: `Image ${index + 1}`,
    //     };

    //   case 7:
    //     return {
    //       src: `${room12}`,
    //       alt: `Image ${index + 1}`,
    //     };

    //   case 8:
    //     return {
    //       src: `${room13}`,
    //       alt: `Image ${index + 1}`,
    //     };
    // }
  });
}
