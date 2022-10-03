import { BottomNavigation,BottomNavigationAction, Box, CssBaseline, Paper } from '@mui/material';
import React from 'react'
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';

import './data.css'

function Footer() {
  return (

    <Box>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation sx={{
              "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
          color: "white",
          backgroundColor:"black"
   }
}}>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          hello
        </BottomNavigation>
      </Paper>
    </Box>
  )
}

export default Footer
