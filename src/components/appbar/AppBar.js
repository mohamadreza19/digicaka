import {useMediaQuery,useTheme} from '@mui/material'
import {Mobile} from "./Mobile";
import {Desktop} from "./Desktop";

export default function AppBar (){
    const theme= useTheme()

    const matched = useMediaQuery(theme.breakpoints.down('md'))
    return matched ? <Mobile/> : <Desktop/>
}