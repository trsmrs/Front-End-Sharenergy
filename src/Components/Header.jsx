import { useState } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  SwipeableDrawer,
  Divider,
  Link,
  List,
  ListItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import '../styles/global.css'
import { ChevronLeft } from '@mui/icons-material';
import theme from '../styles/styled'
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles'

export function HeaderGlobal() {
  const [open, setOpen] = useState(false)
  const handleLogout = () => {
    localStorage.removeItem('token')
    sessionStorage.removeItem('token')
    window.location = '/'
  }

  const navgationLinks = [
    { name: "Usuários aleatórios", href: '/random' },
    { name: "HTTP Cat", href: '/httpcat' },
    { name: "Random Dogs", href: '/random/dogs' },
    { name: "Clientes", href: '/customers' },
  ]

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar sx={{ bgcolor: 'rgb(42 57 66)', borderBottom: '1px solid rgb(11 20 26)', alignItems: 'center' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: 'block', md: 'none', lg: 'none' } }}
            >
              <MenuIcon onClick={() => setOpen(true)} />
            </IconButton>

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
        <SwipeableDrawer anchor='left'
          open= {open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: { bgcolor: '#151c21' }
          }}
        >
        
          <IconButton>
            <ChevronLeft onClick={() => setOpen(false)} />
          </IconButton>
          <Divider />
          <List>
            {navgationLinks.map((item) => (
              <ListItem>
                <Link
                  
                  color='secondary'
                  variant='button'
                  underline='none'
                  href={item.href}
                >
                  {item.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </Box>
    </ThemeProvider>
  )
}

export function HeaderLogin() {
  return (
    <Box >
      <AppBar sx={{ bgcolor: 'rgb(42 57 66)', borderBottom: '1px solid rgb(11 20 26)', alignItems: 'center' }}>
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