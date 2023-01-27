import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { Grid } from '@mui/material';

function Tags() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>

        <Tooltip title="Most Viral">
          <Typography aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined} sx={{ paddingLeft: '10%', alignItems: 'center', display: 'flex' }}><b>MOST VIRAL<ArrowDropDownIcon onClick={handleClick1} /></b></Typography>
        </Tooltip>

        <Menu
          anchorEl={anchorEl1}
          id="account-menu"
          open={open1}
          onClose={handleClose1}
          onClick={handleClose1}
          PaperProps={{
            elevation: 0,
            sx: {
              backgroundColor: "grey",
              color: 'white',
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'grey',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            MOST VIRAL
          </MenuItem>
          <MenuItem>
            USER SUBMITTED
          </MenuItem>
          <MenuItem>
            HIGHEST SCORING
          </MenuItem>

        </Menu>
        <Tooltip title="Newest">
          <Typography aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined} sx={{ paddingRight: '10%' }}><b>NEWEST<ArrowDropDownIcon onClick={handleClick} /></b></Typography>
        </Tooltip>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              backgroundColor: "grey",
              color: 'white',
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'grey',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            POPULAR
          </MenuItem>
          <MenuItem>
            NEWEST
          </MenuItem>
          <MenuItem>
            BEST
          </MenuItem>
          <MenuItem>
            RANDOM
          </MenuItem>

        </Menu>

      </Box>

      {/* Cards */}

      <Grid container>

      </Grid>
    </>
  )
}

export default Tags