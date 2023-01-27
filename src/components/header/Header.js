import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NewPostMoadal from './modals/NewPostModal';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Grid, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Quotes from './quotes/Quotes';
import HeaderCards from './HeaderCards';



const drawerWidth = 240;

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{
            textAlign: 'center',alignItems:'center', backgroundImage:
                'url("https://s.imgur.com/desktop-assets/desktop-assets/homebg.e52b5cdf24f83bcd55f9f1318855f2ef.png")'
        }}>
            <Typography variant="h6" sx={{ my: 2, color: 'white' }}>
                <img src='https://www.pngkey.com/png/full/610-6103115_imgur-logo-png.png' width='100px' height='30vh' alt='img' />
            </Typography>
            <Divider />

            {/* <Box  sx={{ color: "white" }}>
                <Button sx={{
                    color: 'white',
                    fontSize: '10px',
                }}  >
                 <NewPostMoadal />
                </Button>
            </Box> */}
            <Box sx={{ color: "white" }}>
                <Button sx={{
                    color: 'white',
                    fontSize: '10px',
                    marginTop:'20px'
                }} >
                    <b>Sign In</b>
                </Button>
            </Box>
            <Box sx={{ color: "white" }}>
                <Button sx={{
                    color: 'white',
                    fontSize: '10px',
                    marginTop:'20px'
                }} >
                    <b> Sign Up</b>
                </Button>
            </Box>
            <Box sx={{ color: "white" }}>
                <Button sx={{
                    color: 'white',
                    fontSize: '10px',
                    marginTop:'20px'
                }} >
                    <b> Go Ad-Free</b>
                </Button>
            </Box>

        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{
            display: 'flex', backgroundImage:
                'url("https://s.imgur.com/desktop-assets/desktop-assets/homebg.e52b5cdf24f83bcd55f9f1318855f2ef.png")'
        }}>
            <CssBaseline />
            <AppBar component="nav" sx={{
                backgroundImage:
                    'url("https://s.imgur.com/desktop-assets/desktop-assets/homebg.e52b5cdf24f83bcd55f9f1318855f2ef.png")'
            }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <img src='https://www.pngkey.com/png/full/610-6103115_imgur-logo-png.png' width='100vw' height='30vh' alt='img' />
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

                        <Grid container>
                            <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <Button sx={{
                                    color: 'white',
                                    marginRight: '30px',
                                    fontSize: '10px', width: '25vh',
                                    backgroundColor: '#1bb761', fontSize: '1vw'
                                }} startIcon={<AddBoxIcon />}>
                                    <b> <NewPostMoadal /></b>
                                </Button>


                                <TextField size="small" variant="outlined" sx={{ borderRadius: '10px', backgroundColor: 'hsla(0,0%,100%,.25)', maxWidth: "500px", marginRight: '180px' }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end" sx={{ color: 'white' }}>
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <Button sx={{ color: 'white', fontSize: '10px', marginLeft: '30px' }} variant="contained" >
                                    <b> Go Ad-Free</b>
                                </Button>

                                <Button sx={{ color: 'white', fontSize: '11px', marginLeft: '30px' }} variant="text">
                                    <b>Sign in</b>
                                </Button>

                                <Button sx={{ color: 'white', backgroundColor: '#1bb761', fontSize: '10px', marginLeft: '30px' }} variant="contained" >
                                    <b> Sign Up</b>
                                </Button>

                            </Grid>
                           
                        </Grid>
                    </Box>
                    <Grid item sx={{ display:{xs:"3", sm:'none', md:'none'}}}>
                            <TextField size="small" variant="outlined" sx={{ borderRadius: '10px', backgroundColor: 'hsla(0,0%,100%,.25)',maxWidth:'200px' }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end" sx={{ color: 'white' }}>
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item sx={{ display:{xs:"3", sm:'none', md:'none'}}}>
                            <Button sx={{
                                    color: 'white',
                                    // fontSize: '40px',
                                    marginLeft:'18px',
                                    backgroundColor: '#1bb761', fontSize: '10px'
                                }} startIcon={<AddBoxIcon />}>
                                    <b> <NewPostMoadal /></b>
                                </Button>
                            </Grid>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3,  }}>
                <Toolbar />
                <Box>
                    <Quotes />
                </Box>

                <Box>
                    <HeaderCards />
                </Box>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
