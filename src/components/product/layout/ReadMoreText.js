import { BsChevronLeft } from "react-icons/bs";
import { Button } from "@mui/material";
import { useImmer } from "use-immer";

export const ReadMoreText = ({ children }) => {
  const [isReadMoreShown, setIsReadMoreShown] = useImmer(false);

  if (typeof children === "string" && children.length > 0) {
    return (
      <>
        {isReadMoreShown ? children : children.substr(0, 500).concat(" ...")}

        <Button
          onClick={() => {
            setIsReadMoreShown((draft) => {
              return !draft;
            });
          }}
          className="isReadMoreShown-btn"
        >
          {!isReadMoreShown ? "بیشتر" : "کمتر"}
          {/* <ArrowBackIos fontSize="small" />
           */}
          <BsChevronLeft className=".fill-blue-info" />
        </Button>
      </>
    );
  }
  return null;
};
