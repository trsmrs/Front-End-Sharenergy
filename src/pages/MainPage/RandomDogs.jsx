import axios from 'axios'
import { useState, useEffect } from 'react'
import {
    Card,
    Chip,
    CardActionArea,
    CardMedia,
    CardActions,
    Container
} from '@mui/material'
import PetsTwoToneIcon from '@mui/icons-material/PetsTwoTone'


import '../../styles/global.css'
import { TemplateDefault } from '../../Templates/TemplateDefault'

const RandomDogs = () => {
    const [dogs, setDogs] = useState(null)


    useEffect(() => {
        handlePage()
    }, [])


    const handlePage = () => {
        axios.get(`https://random.dog/woof.json`)
            .then(response => {
                const data = response.data.url
                setDogs(data)

            })

    }

    return (
        <TemplateDefault>
            <Container maxWidth='sm' sx={{ marginTop: 15 }}>
                <Card Card sx={{ maxWidth: '100%' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height='500px'
                            src={`${dogs}`}
                            alt="Dogsssss"
                        />
                    </CardActionArea>
                    <CardActions>
                        <Chip sx={{
                            bgcolor: "#462c40",
                            color: '#fff',
                            "&:hover": { bgcolor: '#5d4157' }, width: 100, height: 40
                        }}
                            icon={<PetsTwoToneIcon fontSize='large' color='#fff' />}
                            label="Woof"
                            onClick={handlePage} />
                    </CardActions>
                </Card >
            </Container>
        </TemplateDefault>
    )
}


export default RandomDogs



