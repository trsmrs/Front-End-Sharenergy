import { createTheme } from "@mui/material"


const Colors = {
    primary:'#101c24',
    secondary: '#fff',
    mybg: '#2a3942',
}


const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary,
        },
        secondary:{
            main: Colors.secondary
        }
        
    },
});

export default theme