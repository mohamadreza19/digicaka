import { Button, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
import { useState } from "react"
import { BsChevronLeft } from "react-icons/bs"




export const ReadMoreProperty = ({children})=> {
    const [isMore,setIsmore]= useState(false)
    const list = [
        [
            "عمر باتری هدفون در حالت مکالمه",
            "۵ ساعت"
        ],
        [
            " قابلیت",
            "قابلیت ورز دادن و آماده کردن خمیر همزدن و مخلوط"
            
        ],
        [
            "پاسخ فرکانسی",
            "۲۰-۲۰khz هرتز"
        ],
        [
            "پاسخ فرکانسی",
            "۲۰-۲۰khz هرتز"
        ],
        [
            "پاسخ فرکانسی",
            "۲۰-۲۰khz هرتز"
        ]
    ]
     
      
     
      
    const Child = ()=> {
                if(!isMore) {
                  return  Object.entries(children).map((item,index)=>{
                        if(index <=2) {
                          
                        return(
                            <TableRow key={index}>
                            <TableCell className="d-flex">
                              <Typography
                                sx={{ maxWidth: "300px", width: "250px" }}
                                className="text-muted"
                              >
                                {item[0]}
                              </Typography>
                              <Typography>{item[1]}</Typography>
                            </TableCell>
                          </TableRow>
                        )    
                        }
                    })
                } else {
                  return    Object.entries(children).map((item,index)=>{
                        return(
                            <TableRow key={index}>
                            <TableCell className="d-flex">
                              <Typography
                                sx={{ maxWidth: "300px", width: "250px" }}
                                className="text-muted"
                              >
                                {item[0]}
                              </Typography>
                              <Typography>{item[1]}</Typography>
                            </TableCell>
                          </TableRow>
                        )    
                    })
                }
    }

        return(
          <div className="d-flex flex-column">
          <TableContainer sx={{  }}>
             <Table sx={{ minWidth: 760 }}>
                    <TableBody>
                      <Child/> 
                    </TableBody>
                  </Table>
          </TableContainer>
          <div>
            <Button
                      onClick={() => {
                       setIsmore((draft) => {
                        return !draft;
                        });
                      }}
                      className="W
                      isReadMoreShown-btn"
                    >
                  {!isMore ? "بیشتر" : "کمتر"}
                  {/* <ArrowBackIos fontSize="small" />
                   */}
                      <BsChevronLeft   className=".fill-blue-info" />
                    </Button>
          </div>
          </div>
            
        )
}