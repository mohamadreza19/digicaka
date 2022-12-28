import { BsChevronLeft } from 'react-icons/bs';
import { Button } from "@mui/material";
import { useImmer } from "use-immer";

export const ReadMoreText = ({children}) => {
    const [isReadMoreShown,setIsReadMoreShown] = useImmer(false)
    console.log(typeof children)
    if(typeof children ==="string"){
  return (
    <>
    <div>
      {isReadMoreShown ? children : children.substr(0,500).concat(" ...")}
    </div>
    <Button onClick={()=>{
setIsReadMoreShown(draft=>{
   return !draft
})

    }}
    className='isReadMoreShown-btn'
    >{!isReadMoreShown? "بیشتر":"کمتر"}
    {/* <ArrowBackIos fontSize="small" />
     */}
     <BsChevronLeft className='.fill-blue-info'/>
    </Button>
    </>
  );
    }
    return null
};