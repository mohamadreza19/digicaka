import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "@ricarso/react-image-magnifiers";

export default function Test() {
  return (
    <SideBySideMagnifier
      className="w-25"
      imageSrc="https://s3.amazonaws.com/images.seroundtable.com/google-stan-dinosaur-service-dino-1657283267.jpg"
      largeImageSrc="https://s3.amazonaws.com/images.seroundtable.com/google-stan-dinosaur-service-dino-1657283267.jpg"
    />
  );
}
