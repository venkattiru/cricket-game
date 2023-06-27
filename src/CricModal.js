import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box'; 
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { styled } from 'styled-components';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from 'react';
import { resetScore } from './redux/features/scoreSlice';
import { useDispatch } from 'react-redux';
import { addTarget, modeChange } from './redux/features/modeDetails';
import { red } from '@mui/material/colors';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'inline-flex',
  };
  const StyledBtn = styled.button`
  all: unset;
  padding: 10px;
  font-weight: 700;
  background-color: #3a76c4;
  width: auto;
  color: white;
  text-align: center;
  margin: 5px;
`;
// const Styledp = styled.p`
// margin: 10px 0;
// font-size: 28px;
// font-weight: 600;
// color: #091652;
// `;

const CricModal = ({open}) => {
    const [isOpen, setOpen] = useState(open);
    const dispatch = useDispatch();

    const handleModalClose = () => {
        setOpen(false);
        dispatch(resetScore());
    }

    const handleTarget = () => {
      let target_val = Math.floor(Math.random()*200);
      target_val = target_val > 50 ? target_val : target_val+50;
      dispatch(addTarget(target_val));
      dispatch(modeChange({mode:'target'}));
      setOpen(false);
    }

    return(
        <div>
            <Modal
            aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleModalClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
            >
                <Fade in={isOpen}>
                <Box sx={style}>
          
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          
            <StyledBtn onClick={handleTarget}>Target Mode</StyledBtn>
            <StyledBtn>High Score Mode</StyledBtn>
            <div style={{color:'red', fontWeight:700,textAlign:'center'}}>
              <p>Total wickets :10</p>
              <p>Total overs :10</p>
            </div>
          </Typography>
        </Box>
        </Fade>
            </Modal>
        </div>
    )
}

export default  CricModal;