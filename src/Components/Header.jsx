import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import '../styles/global.css'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 , marginTop: 10}}>
      <AppBar sx={{background:'linear-gradient(to right, #5d4157 0%,  #a8caba 100% )'}} >
        <Container maxWidth='lg' sx={{marginLeft: 35}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="button" component="a" href='#' sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        marginLeft: 1,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
              Sharenergy Challenge
            </Typography>
                
            <Typography variant="button" component="a" href='/random' sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        marginLeft: 3,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
              Random User
            </Typography>

            <Typography variant="button" component="a" href='#' sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        marginLeft: 3,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
              HTTP Cat
            </Typography>

            <Typography variant="button" component="a" href='#' sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        marginLeft: 3,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
              Random Dog
            </Typography>

            <Typography variant="button" component="a" href='#' sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        marginLeft: 5,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
              Customers List
            </Typography>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}