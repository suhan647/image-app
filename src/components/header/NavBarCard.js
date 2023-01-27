// import React, { useState } from 'react'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import { Grid,Box, Typography } from '@mui/material';
// import headerData from '../../components/data/HeaderCardData'

// function NavBarCard() {
//   const [data,setData] = useState(headerData);
//   return (
//     <>
//     <Grid container sx={{overflow:'hidden'}}>

//     {data.map((card,i) => {
//       return (
//         <>
        
//         <Grid  item xs={1} sm={6} md={2} sx={{overflow:'hidden'}}>
//       <Box className='card_hover'>
//     <Card key={card.heading}  sx={{ height:'220px',maxWidth: 445, backgroundColor:'rgb(56, 60, 100)',color:'whitesmoke', margin:'5px' }}>
//       <CardMedia 
//         sx={{ height: "50%",width: '100%', padding:'5px' }}
//         image={card.image}
//       />
//       <CardContent>
//         <Typography   component="div" sx={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
//          <b>{card.heading}</b>
//          <small>{card.desc}</small>
//         </Typography>
       
//       </CardContent>
//     </Card>
//     </Box>
//     </Grid>

//         </>
//       );
//     })}
//     </Grid>
//     </>
//   )
// }

// export default NavBarCard