import React from 'react';
import { AppBar ,Toolbar, Typography,Container} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <AppBar position='sticky'>
        <Container maxWidth="lg">
        <Toolbar>
            <Typography component="h1" variant='h5' fontWeight="700" flex={1}><Link to="/" style={{textDecoration:"none", color:"#ffff"}}>وبلاگ اطلاعات برنامه نویسی</Link></Typography>
            <Link to="/" style={{color:"#ffff"}}>
            <MenuBookIcon/>
            </Link>
       
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Header
