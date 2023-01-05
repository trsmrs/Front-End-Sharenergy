import { useState, useRef } from 'react'
import {
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Container

} from '@mui/material'

import '../../styles/global.css'
import { TemplateDefault } from '../../Templates/TemplateDefault'




const HttpCats = () => {
    const ref = useRef(null)
    const [cat, setCat] = useState('');
    const [code, setCode] = useState('')

    const handleChange = (event) => {
        setCat(
            `https://http.cat/${event.target.value}`
        );
        setCode(event.target.value)
        toggleImg()
    };

    const toggleImg = () => {
        const caty = ref.current
        caty.className = null
    }

    return (
        <TemplateDefault>


            <Container className='efeito-vidro-card'
                maxWidth='sm'
                sx={{ marginTop: 5, bgcolor: 'white', borderRadius: 3, padding: 2 }}>
                <FormControl sx={{ m: 1, maxWidth: '100%', width: '100%' }}>
                    <InputLabel color='secondary'>Status Cat Code</InputLabel>
                    <Select sx={{bgcolor:'white'}}
                        value={code}
                        onChange={handleChange}
                        color='secondary'
                        label="Status Cat Code"
                    >
                        
                        <MenuItem value={102}>102</MenuItem>
                        <MenuItem value={502}>502</MenuItem>
                        <MenuItem value={505}>505</MenuItem>
                        <MenuItem value={599}>599</MenuItem>
                        <MenuItem value={504}>504</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={110}>110</MenuItem>
                        <MenuItem value={95}>95</MenuItem>
                        <MenuItem value={525}>525</MenuItem>
                    </Select>

                    <img ref={ref} id='cat-code' className='img-cat' src={cat} alt='codes' />

                </FormControl>
            </Container>
        </TemplateDefault>
    )
}


export default HttpCats


