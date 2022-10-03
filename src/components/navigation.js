
import * as React from 'react';
import { useTheme as theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button } from '@mui/material';

function Navigation() {
  return (
    <div>
     <Card sx={{ my:5,display: 'flex' }} justifyContent="center" id="jmbotron">
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <CardContent sx={{ flex: 'center' }}>
          <Typography component="div" variant="h5">
            You can create articles
            from all over the world.
          </Typography>
          <Typography component="div" variant="h5">
            BE THE PART OF FAMILY
          </Typography>
        
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <Typography component="div" variant="h5">
            ALPHA-Blog
          </Typography>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <Button href='/signup' 
											variant="contained" color="success">SignUp</Button>&nbsp;
       
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
    
    </Card>
    </div>
  )
}

export default Navigation
