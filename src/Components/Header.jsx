import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import '../styles/global.css'


export function HeaderGlobal() {
 
  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location = '/'
  }

  return (
    <Box>
      <AppBar sx={{ bgcolor: '#4a2f40be', borderBottom: '1px solid #553f4d', alignItems:'center' }}>
        <Toolbar>
          <Typography variant="button" component="a" href='/random' sx={{
            mr: 3,
            display: { xs: 'none', md: 'flex' },
            textAlign: 'center',
            fontFamily: 'monospace',
            marginLeft: 15,
            color: 'inherit',
            textDecoration: 'none',
          }}>
            Lista Random de Usuários
          </Typography>

          <Typography variant="button" component="a" href='/httpcat' sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            textAlign: 'center',
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
            textAlign: 'center',
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
            textAlign: 'center',
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
            textAlign: 'center',
            marginLeft: 5,
            color: 'inherit',
            textDecoration: 'none',
          }}>
            Lista de Clientes
          </Typography>

          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}


export function HeaderLogin() {
  return (
    <Box >
      <AppBar sx={{ bgcolor: '#4a2f40be', borderBottom: '1px solid #553f4d', alignItems:'center' }}>
        <Toolbar>
          <Typography variant="h6" component="h1" sx={{
            fontFamily: 'monospace',
            textAlign: 'center',
            color: 'inherit',
            textDecoration: 'none',
          }}>
            Desafio Sharenergy
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>



  )

}