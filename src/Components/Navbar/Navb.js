import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


const pages = ['ENT', 'Proctology', 'Laparoscopy' , 'Urology' , 'Orthopedics'];

function Navbar() {
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <div className='p115'>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr:55,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>

          
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}
export default Navbar;
