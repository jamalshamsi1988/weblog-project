import React from 'react';
import { AppBar ,Toolbar, Typography,Container} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';


const Header = () => {
  return (
    <div>
      <AppBar>
        <Container maxWidth="lg">
        <Toolbar>
            <Typography component="h1" variant='h5' fontWeight="bold" flex={1}>وبلاگ اطلاعات برنامه نویسی</Typography>
            <MenuBookIcon/>
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Header
