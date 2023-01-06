import {
    Card,
    Grid,
    Typography,
    TextField,
    CardContent,
    Container,
    FormControl,
} from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import '../../styles/global.css'
import theme from '../../styles/styled'
import { ThemeProvider } from '@mui/material/styles'

import { TemplateDefault } from '../../Templates/TemplateDefault'

const RandomUsers = () => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {

        axios.get('https://randomuser.me/api/?results=12')
            .then(response => {
                const data = response.data.results
                setUsers(data)
            })
    }, [])

    const filterUsers = (() => {
        return users.filter((user) => user.name.first.includes(input)
            || user.login.username.includes(input)
            || user.email.includes(input))
    })


    const handlePage = (event, value) => {
        axios.get(`https://randomuser.me/api/?page=${value}&results=12&seed=abc`)
            .then(response => {
                const data = response.data.results
                setUsers(data)
            })
        setPage(value)
    }

    const changeRandler = (e) => {
        setInput(e.target.value)
    }

    return (

        <TemplateDefault>
            <ThemeProvider theme={theme}>
                <Container className="efeito-vidro" component='form'
                    maxWidth='xl'
                    sx={{
                        marginTop: 15,
                        borderRadius: 10,
                    }}>

                    <FormControl sx={{ width: '30%', marginTop: 4, bgcolor: 'white' }}>
                        <TextField
                            type="name"
                            placeholder="Pesquisar por alguém"
                            name="name"
                            color="secondary"
                            onChange={changeRandler}
                        />

                    </FormControl>

                    <Grid container
                        justifyContent="center"
                        alignItems='center'
                        marginTop={7}

                    >
                        {
                            filterUsers().map((user) => (

                                <Card key={user.cell} sx={{

                                    bgcolor: 'rgb(16, 28, 36)',
                                    border: '1px solid white',
                                    textAlign: 'center',
                                    margin: '0 10px 10px 0',
                                    width: '250px',
                                    height: '320px'

                                }}>
                                    <img alt='randoms' width='200px' height={'50%'} className='rounded-circle' src={user.picture.large}></img>
                                    <CardContent>
                                        <Typography textAlign='center' variant="body2" color="white">
                                            Nome: {user.name.first} {user.name.last}<br></br>
                                            Usuário: {user.login.username}<br></br>
                                            Email: {user.email}<br></br>
                                            Idade: {user.dob.age}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </Grid>
                </Container>

                <Stack spacing={1} alignItems={'center'} marginBottom='30px'>
                    <Typography>Page: {page}</Typography>
                    <Pagination count={10} size='large' variant="outlined" shape="rounded"
                        onChange={handlePage}
                    />
                </Stack>
            </ThemeProvider>
        </TemplateDefault>

    )
}


export default RandomUsers