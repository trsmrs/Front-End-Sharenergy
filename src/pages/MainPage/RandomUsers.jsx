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

            <Container sx={{ border: '1px solid red', marginTop: 10 }} maxWidth='xl'>
                <FormControl fullWidth>
                    <TextField sx={{ marginLeft: 50, width: '20%', position: 'relative' }}
                        label='Pesquisa'
                        type='text'
                        onChange={changeRandler}>
                    </TextField>
                </FormControl>
                <Grid container spacing={2}
                    justifyContent="center"
                    alignItems='center'
                    marginTop={7} >
                    {
                        filterUsers().map((user) => (

                            <Card key={user.cell} sx={{
                                color: '#dbcccc',
                                bgcolor: 'rgb(110 70 103)',
                                border: '1px solid white',
                                padding: 3,
                                textAlign: 'center',
                                margin: '0 10px 10px 0',
                                width: '300px',
                                height: '355px'

                            }}>
                                <img alt='' width='250px' className='rounded-circle' src={user.picture.large}></img>
                                <CardContent>
                                    <Typography textAlign='center' variant="body2" color="text.secondary">
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

        </TemplateDefault>

    )
}


export default RandomUsers