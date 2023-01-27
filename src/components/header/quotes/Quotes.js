import { Box, Typography } from '@mui/material'
import React from 'react'

function Quotes() {
  return (
    <> 
    <Box >
        <Typography variant='h6' sx={{ display:'flex', color:'#99ccff', fontWeight:"bold",justifyContent:'center'}}>
        When life gives you lemons, make memes.
        </Typography>

        <Box sx={{color:'#8585ad', display:'flex', justifyContent:'space-between', width:'90vw',marginTop:'20px'}}>
            <Box sx={{marginLeft:'50px'}}><b>EXPLORE TAGS</b></Box>
            <Box><b>MORE TAGS +</b></Box>
        </Box>
    </Box>
    </>
  )
}

export default Quotes