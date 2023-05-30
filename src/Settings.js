import {useContext, useState} from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from 'styled-components';
import { Switch } from '@mui/material';
import { CommentaryContext } from './context/CommentaryContext';

const Settings = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const   {commentary, setCommentary} = useContext(CommentaryContext);

    const open = Boolean(anchorEl);

    const StyledSettings = styled(SettingsIcon)`
    position: absolute;
        top: 10px;
        right: 23px;
    `;

    const handleSettings = (e) => {

        setAnchorEl(e.currentTarget);
      }
      
      const handleClose = () => {
        setAnchorEl(null);
      };

      const handleComment = () => {
        setCommentary((prev) => !prev);
        setAnchorEl(null);
      }
      
    return (
        <div>
        <StyledSettings fontSize='large' sx={{color:'white'}} onClick={handleSettings}/>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        
      >
        <MenuItem>Commentary <Switch checked={commentary} onClick={handleComment}/></MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      </div>
    )
}

export default  Settings;