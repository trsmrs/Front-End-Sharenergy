import { useState } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
} from '@mui/material';
import '../styles/global.css'


export function HeaderGlobal() {
  const [auth, setAuth] = useState(true);


  const handleChange = (event) => {
    setAuth(event.target.checked);
    handleLogout()

  };

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location = '/'
  }

  return (
    <Box sx={{display:'flex' , marginTop: 10 }}>
      <AppBar sx={{bgcolor: '#4a2f40be', borderBottom: '1px solid #553f4d' }}>
        <Container maxWidth='md' sx={{ marginLeft: 5 }}>
          <Toolbar>

            <Typography variant="button" component="a" href='/random' sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              marginLeft: 3,
              color: 'inherit',
              textDecoration: 'none',
            }}>
              Lista Random de Usuários
            </Typography>

            <Typography variant="button" component="a" href='/httpcat' sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              marginLeft: 3,
              color: 'inherit',
              textDecoration: 'none',
            }}>
              HTTP Cat
            </Typography>

            <Typography variant="button" component="a" href='/random/dogs' sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              marginLeft: 3,
              color: 'inherit',
              textDecoration: 'none',
            }}>
              Random Dogs
            </Typography>

            <Typography variant="button" component="a" href='/customers/add' sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              marginLeft: 5,
              color: 'inherit',
              textDecoration: 'none',
            }}>
              Adicionar Clientes
            </Typography>

            <Typography variant="button" component="a" href='/customers' sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              marginLeft: 5,
              color: 'inherit',
              textDecoration: 'none',
            }}>
              Lista de Clientes
            </Typography>

            <Button color="inherit" onClick={handleChange}>Logout</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}


export function HeaderLogin() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 25 }}>
    <AppBar sx={{ display: 'flex', bgcolor: '#4a2f40', borderBottom: '1px solid #553f4d' }}>
      <Container maxWidth='lg' sx={{ marginLeft: 15 }}>
        <Toolbar>
          <Typography sx={{ textDecoration: 'none' }}
            variant='button'
            component='a'
            color='#fff'
            href="https://github.com/trsmrs"
            rel="noreferrer"
            target="_blank">
            Para mais detalhes acesse:
          </Typography>

          <Typography variant="h6" component="h6" sx={{
            mr: 2,
            display: { xs: 'flex', md: 'flex' },
            fontFamily: 'monospace',
            marginLeft: 25,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
          }}>
            Bem Vindo ao Desafio da Sharenergy
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
  )

}