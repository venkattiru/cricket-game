import {useContext, useEffect, useRef, useState} from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from 'styled-components';
import { Switch } from '@mui/material';
import { CommentaryContext } from './context/CommentaryContext';

const Settings = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [music, setMusic] = useState(false);

    const   {commentary, setCommentary} = useContext(CommentaryContext);

    const audioRef = useRef();
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

      const handleMusic = () => {
        const isMusic = !music;
        setMusic(isMusic);
        if(isMusic) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
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
        <MenuItem>Music <Switch checked={music} onClick={handleMusic}/></MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <audio  ref={audioRef} preload loop>
        <source src='../audio/BBC-testCricket.mp3' type='audio/mp3'/>
        </audio>
      </div>
    )
}

export default  Settings;