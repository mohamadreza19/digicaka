import { Table, TableBody, TableCell, TableRow, Typography } from "@mui/material"
import { useState } from "react"




export const ReadMoreProperty = ({children})=> {
    const [isMore,setIsmore]= useState(true)
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
                if(isMore) {
                    list.map((item,index)=>{
                        if(index <=3)
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
                } else {
                    list.map((item,index)=>{
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
            <Table sx={{ minWidth: 760 }}>
                    <TableBody>
                      <Child/>
                      {/* <TableRow >
                        <TableCell className="d-flex">
                          <Typography
                            sx={{ maxWidth: "300px", width: "250px" }}
                            className="text-muted"
                          >
                            عمر باتری هدفون در حالت مکالمه
                          </Typography>
                          <Typography>۵ ساعت</Typography>
                        </TableCell>
                      </TableRow> */}
                      
                    </TableBody>
                  </Table>
            
        )
}