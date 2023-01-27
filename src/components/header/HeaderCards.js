import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid,Box, Typography } from '@mui/material';
import headerData from '../../components/data/HeaderCardData'


function HeaderCards() {
    const [data,setData] = useState(headerData);
  return (
    <>
      
    <Grid container sx={{marginTop:'5px'}}>

    {data.map((card,i) => {
      return (
        <>
        <Grid item> 
    <Box sx={{width:'100%', marginLeft:'20px' }}>
   
    <Card key={card.heading}  sx={{height:'220px',maxWidth: 445, backgroundColor:'rgb(56, 60, 100)',color:'whitesmoke', margin:'2px', }}>
      <CardMedia 
        sx={{ height: "50%",width: '100%', padding:'5px' }}
        image={card.image}
      />
      <CardContent>
        <Typography   component="div" sx={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
         <b>{card.heading}</b>
         <small>{card.desc}</small>
        </Typography>
       
      </CardContent>
    </Card>
    </Box>
        </Grid>
        </>
      );
    })}
    </Grid>
   
    </>
  )
}

export default HeaderCards