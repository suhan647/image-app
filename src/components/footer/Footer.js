import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import '../../App.css'

function Footer() {
  return (
    <div >
        <Grid container >
            <Grid  item sx={{ display: { xs: 'none', sm: 'block' } }} >
                <Box className='footer' sx={{display:'flex', justifyContent:'space-between'}}>
        <Typography  variant='b'>&copy; 2023 Imgur.Inc</Typography>
        <Typography  variant='b'>About</Typography>
        <Typography  variant='b'>Privacy</Typography>
        <Typography  variant='b'>Rules</Typography>
        <Typography  variant='b'>Help</Typography>
        <Typography  variant='b'>Emerald</Typography>
        <Typography  variant='b'>Store</Typography>
        <Typography  variant='b'>Advertise</Typography>
        <Typography  variant='b'>Blog</Typography>
        <Typography  variant='b'>Wellness</Typography>
        </Box>
        </Grid>
        </Grid>
    </div>
  )
}

export default Footer