import { Card, Grid, Box, Typography, TextField, Container } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import '../../styles/global.css'
import TemplateDefault from '../../Templates/TemplateDefault'

const RandomUsers = () => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {

        fetch('https://randomuser.me/api/?results=12')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.results)
                console.log(data)
            })


    }, [])

    const mapUsers = () => {
        return filterUsers().map((user) => {

            return <Grid key={user.cell} sx={{ marginLeft: 4, marginTop: 4 }}>
                <Card maxWidth='lg' sx={{
                    display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
                    color: '#dbcccc',
                    bgcolor: 'rgb(110 70 103)',
                    width: 290, height: 380,
                    textAlign: 'center',
                    flexDirection: 'column',


                }}>
                    <Box sx={{ borderRadius: 10 }}>
                        <img alt='' width='250px' className='rounded-circle' src={user.picture.large}></img>
                    </Box>
                    <Box>
                        <Typography variant='h6' component='h6'>Name: {user.name.first} {user.name.last}</Typography>
                    </Box>
                    <Box sx={{ marginBottom: 1 }}>
                        <Typography variant='span' component='span'>Username: {user.login.username}</Typography>
                    </Box>
                    <Box sx={{ marginBottom: 1 }}>
                        <Typography variant='span' component='span'>Email: {user.email}</Typography>
                    </Box>
                    <Box sx={{ marginBottom: 1 }}>
                        <Typography variant='span' component='span'>Age: {user.dob.age}</Typography>
                    </Box>
                </Card>
            </Grid>

        })
    }
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
        <>
            <TemplateDefault>

                <Container sx={{ display: 'flex' }} maxWidth='xl'>
                    <TextField sx={{ width: 400, marginLeft: '35%' }}
                        label='Search'
                        type='text' value={input}
                        onChange={changeRandler}
                        color='secondary'
                    />
                </Container>
                <Grid sx={{ padding: '56px' }} container spacing={{ xs: 4, md: 4 }}
                    columns={{ xs: 2, sm: 4, md: 4 }}
                    margin='auto'
                    display='flex'
                    justifyContent="center"
                    alignItems='center'
                >

                    {/* Renderizando a Grid aqui */}

                    {mapUsers()}

                </Grid>
                <Container sx={{ position: 'relative', left: 300 }}>
                    <Stack spacing={2} marginTop={4}>
                        <Typography>Page: {page}</Typography>
                        <Pagination count={10} size='large' variant="outlined" shape="rounded"
                            onChange={handlePage}
                        />
                    </Stack>
                </Container>

            </TemplateDefault>
        </>
    )
}


export default RandomUsers























// const [list, setList] = useState([])

// useEffect(() => {
//   axios.get('https://randomuser.me/api/')
//     .then(response => {
//       const data = response.data.results
//       setList(data)
//       console.log(data)

//     })
// }, [])