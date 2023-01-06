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
      <AppBar sx={{ bgcolor: 'rgb(42 57 66)', borderBottom: '1px solid rgb(11 20 26)', alignItems:'center' }}>
        <Toolbar>
          <Typography variant="button" component="a" href='/random' sx={{
            mr: 3,
            
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
            
            fontFamily: 'monospace',
            textAlign: 'center',
            marginLeft: 3,
            color: 'inherit',
            textDecoration: 'none',
          }}>
            Random Dogs
          </Typography>

          <Typography variant="button" component="a" href='/customers' sx={{
            mr: 2,
            
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
      <AppBar sx={{ bgcolor: 'rgb(42 57 66)', borderBottom: '1px solid rgb(11 20 26)', alignItems:'center' }}>   
        <Toolbar>
        <Typography variant="button" component="a" href='/random' sx={{
            mr: 3,
            textAlign: 'center',
            fontFamily: 'monospace',
            
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