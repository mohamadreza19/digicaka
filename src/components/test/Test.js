
import ReactImageZoom from "react-image-zoom";
import {
  MagnifierZoom,
  MagnifierContainer,
  SideBySideMagnifier,
} from "react-image-magnifiers";

export default function Test() {
  return (
    <div
      className="parent-test"
      style={{
        width: "25%",
        margin: "0 auto",
      }}
    >
      {/* <ReactImageZoom
        img={
          "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Pravaig-Defy-281120221416.jpg"
        }
        width={400}
        height={250}
        zoomWidth={500}
        scale={1}
        zoomLensStyle={
          "background-color: #FDECEE;cursor: crosshair;opacity:0.7;"
        }
        zoomPosition={"left"}
      /> */}
      <SideBySideMagnifier
        // className="grist-input-position
        imageSrc={
          "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Pravaig-Defy-281120221416.jpg"
        }
        largeImageSrc={
          "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Pravaig-Defy-281120221416.jpg"
        }
        switchSides
        fillAvailableSpace={false}
        overlayOpacity={0}
        overlayBoxColor={"red"}
        overlayBoxImageSize={"200px"}
        zoomContainerBorder={"1px solid gray"}
        overlayBackgroundColor={"#FDECEE"}
      />
    </div>
  );
}

