import { room11, room12, room13, room14, room15 } from "assets/room";
import img from "../../assets/room/room11.jpg";
import { useParams } from "react-router-dom";
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
    if (index + 1 == 1) {
      return {
        src: `${room11}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 2) {
      return {
        src: `${room12}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 3) {
      return {
        src: `${room13}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 4) {
      return {
        src: `${room14}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 5) {
      return {
        src: `${room15}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 6) {
      return {
        src: `${room11}`,
        alt: `Image ${index + 1}`,
      };
    } else if (index + 1 == 7) {
      return {
        src: `${room12}`,
        alt: `Image ${index + 1}`,
      };
    } else {
      return {
        src: `${room12}`,
        alt: `Image ${index + 1}`,
      };
    }
  });
  
}
