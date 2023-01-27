import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';
import { db } from '../firebase/Firebase';
import {ref, onValue} from 'firebase/database'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box } from '@mui/system';
import '../../App.css'

export default function MainCards() {

  const [images,setImages] = React.useState([])

  React.useEffect(() =>{

const starCountRef = ref(db, 'img/')
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  const newPosts = Object.keys(data).map(key => ({
    id:key,
    ...data[key]
  }))
  setImages(newPosts)
})
  },[])

// React.useEffect(() => {

// const fetchUrl = async () => {
//   const response = await fetch("https://imgur-b474b-default-rtdb.firebaseio.com/img.json")
//   const responseData = await response.json()

//   const loadedUrl = []

//   for(const key in responseData){
//     loadedUrl.push({
//       urls: key,
//       image:responseData[key].urls
//     })
//   }
//   setImages(loadedUrl)
// }
//   fetchUrl()
// },[])

  console.log('state fromx',images);

  return (
    <>

    <Grid container sx={{padding:'10px'}}>

{images.map((URL) => {
return(
  <>
  <Grid item xs={12} md={3}> 
  <Card sx={{ maxWidth: 345,backgroundColor:'grey',color:'white',margin:'20px', }}>
<CardMedia
sx={{ height: 180 }}
image={URL.urls}
title="green iguana"
/>
<CardContent sx={{height:80}}>
<Box  sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<p className='icons'><ArrowUpwardIcon fontSize='small'/><span>150</span></p>
<p className='icons'><ChatBubbleIcon fontSize='small'/><span>19</span></p>
<p className='icons'><VisibilityIcon fontSize='small'/><span>200k</span></p>
</Box>
</CardContent>
</Card>
</Grid>
  </>
);
})}





       

        </Grid>
    </>
  );
}
