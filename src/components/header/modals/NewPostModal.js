import * as React from 'react';
import { Modal, Backdrop, Fade, makeStyles } from '@material-ui/core';
import { Box, Button, Grid } from '@mui/material';
import axios from 'axios';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CollectionsIcon from '@mui/icons-material/Collections';
import { Fab } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
        },
    },
    paper: {
        backgroundColor: "grey",
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
    },
}));

export default function NewPostMoadal() {
    const classes = useStyles();

    const [image, setImage] = React.useState('')
    const [urls, setUrl] = React.useState('')

    const submitHandler = async (e) => {
        e.preventDefault();
        handleClose()

        const data = new FormData()
        data.append('file', image)
        data.append("upload_preset", "imagesUpload")
        data.append("cloud_name", "dwhgqwwat")

        await axios.post("https://api.cloudinary.com/v1_1/dwhgqwwat/image/upload", data)
            .then((data) => {
                setUrl(data.data.secure_url)
            })

        let formdata = {
            urls: urls
        }

        await axios.post('https://imgur-b474b-default-rtdb.firebaseio.com/img.json', formdata)

            .then((img) => {
                console.log(img);

            }).catch((err) => {
                console.log(err);
            })

        // setImage('')
       
    }

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <span onClick={handleOpen}>New Post</span>

            <Modal
                aria-labelledby="responsive-modal-title"
                aria-describedby="responsive-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
    <Fade in={open}>
        <div className={classes.paper}>

            <Grid container>
                <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                        <Box className='modalimage' sx={{ display: { xs: '1', sm: '10', md: '10px' } }}>

                            <label className="filelabel">
                                <Box sx={{ marginTop: '25px' }}>
                                    <CloudUploadIcon />
                                </Box>
                                <span className="title">
                                    Add Files
                                </span>

                                <input className="FileUpload1" id="FileInput" name="myImage" accept="image/png, image/gif, image/jpeg" type="file" onChange={(e) => { setImage(e.target.files[0]) }} />
                            </label>
                        </Box>

                        <Box sx={{ alignItems: 'center', marginTop: '40px',  marginRight: '0px',padding:'10px' }}>
                            <Box sx={{ color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <span style={{backgroundColor:'black',display:'flex'}}> <CollectionsIcon /><b> Choose Photo? Video</b></span>
                                <Box sx={{ display: 'flex', marginY: '20px' }}>
                                    <div className='line'></div>
                                    <div>or</div>
                                    <div className='line'></div>
                                </Box>
                            </Box>
                            <Box sx={{display:'flex', justifyContent:'center',}}>
                            <Button variant='text' sx={{  color: 'white', backgroundColor: 'black',height: '20px', borderRadius: '1px', marginY: '20px', display: 'flex', justifyContent: 'center', }}> Paste Image or url</Button>
                            </Box>
                        </Box>

                        
                    </Box>
                    <Button variant="contained" sx={{  width:'100%', fontSize:'20px',  backgroundColor: '#413839', color: 'white', borderRadius: '1px', }} onClick={submitHandler} startIcon={<CloudUploadIcon />}>
                    Upload
                </Button>
                </Grid>

<Grid item sx={{ display: { xs: 'block', md: 'none', lg: 'block' } }}>
    <Box sx={{ display: { xs: 'block', sm: 'none', md: 'block' } }}>

        <Box sx={{ alignItems: 'center', marginTop: '40px', display: { xs: 'block', lg: 'none', xl: 'block'} }}>
        <Box sx={{ display: { xs: 'block', xl: 'none' } }}>
            <Box sx={{ color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '90px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    
                    <label htmlFor="upload-photo">
                        <input
                            style={{ display: 'none', padding: '10px' }}
                            id="upload-photo"
                            name="upload-photo"
                            type="file"
                            onChange={(e) => { setImage(e.target.files[0]) }}
                        />

                        <Fab
                            color="light grey"
                            size="small"
                            component="span"
                            aria-label="add"
                            variant="extended"
                            sx={{  width:'100%', fontSize:'20px',  backgroundColor: '#413839', color: 'white', borderRadius: '1px', }} 
                        >
                            <AddIcon /> Select photo
                        </Fab>
                    </label>
                    </Box>
               
                <Box sx={{ display: 'flex', marginTop: '40px', }}>
                    <div className='line'></div>
                    <small>Click Upload</small>
                    <div className='line'></div>
                </Box>
                <Box sx={{ display:'flex',justifyContent:'center',
                width:'100%' ,marginTop:'30px' }}>
                <Button variant="contained" sx={{  width:'100%', fontSize:'20px',  backgroundColor: '#413839', color: 'white', borderRadius: '1px', }} onClick={submitHandler} startIcon={<CloudUploadIcon />}>
                    Upload
                </Button>
            </Box>
            </Box>
            </Box>

            
        </Box>
    </Box>
</Grid>

    </Grid>
        </div>
    </Fade>
</Modal>


        </>
    );
}

