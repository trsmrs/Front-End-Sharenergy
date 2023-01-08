import { useState, useRef } from 'react'
import {
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Container,

} from '@mui/material'

import '../../styles/global.css'
import cat404 from '../../images/404.jpg'
import theme from '../../styles/styled'
import { ThemeProvider } from '@mui/material/styles'
import { TemplateDefault } from '../../Templates/TemplateDefault'




const HttpCats = () => {
    const ref = useRef(null)
    const [cat, setCat] = useState('');
    const [code, setCode] = useState('')



    const handleChange = (event) => {
        setCode(event.target.value)
        if (event.target.value !== 110) {
            setCat(
                `https://http.cat/${event.target.value}`
            )
        } else {
            setCat(cat404)
        }

        toggleImg()

    }

    const toggleImg = () => {
        const caty = ref.current
        caty.className = null

    }

    return (
        <TemplateDefault>

            <Container className='efeito-vidro-card'
                maxWidth='sm'
                sx={{ marginTop: 15, bgcolor: 'rgb(42 57 66)', borderRadius: 3, padding: 2 }}>
                <FormControl sx={{ m: 1, maxWidth: '100%', width: '100%' }}>
                    <ThemeProvider theme={theme}>
                        <InputLabel ref={ref} id='inputLabel'>Status Cat Code</InputLabel>
                        <Select color='secondary'
                            inputProps={{ className: 'color-white' }}
                            value={code}
                            onChange={handleChange}
                            variant='outlined'
                            label="Status Cat Code"
                        >

                            <MenuItem value={102}>102</MenuItem>
                            <MenuItem value={502}>502</MenuItem>
                            <MenuItem value={599}>599</MenuItem>
                            <MenuItem value={504}>504</MenuItem>
                            <MenuItem value={110}>110</MenuItem>
                            <MenuItem value={525}>525</MenuItem>
                        </Select>
                        {
                            <img ref={ref} id='cat-code' className='img-cat' src={cat} alt='codes' />
                        }



                    </ThemeProvider>


                </FormControl>
            </Container>
        </TemplateDefault >
    )
}


export default HttpCats



