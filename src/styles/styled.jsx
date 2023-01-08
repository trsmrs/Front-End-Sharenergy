import { createTheme } from "@mui/material"


const Colors = {
    primary:'#101c24',
    secondary: '#fff',
    
}


const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary,
        },
        secondary:{
            main: Colors.secondary
        }, 
    }
});

export default theme