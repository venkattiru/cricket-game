import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box'; 
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { styled } from 'styled-components';
import { useState } from 'react';
import { resetScore } from './redux/features/scoreSlice';
import { useDispatch } from 'react-redux';


const GameStatusModal = ({open, status}) => {


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


    const [isOpen, setOpen] = useState(open);
    const dispatch = useDispatch();

    const handleModalClose = () => {
        setOpen(false);
        dispatch(resetScore());
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
            <div style={{fontWeight:700,textAlign:'center'}}>
              <p>{status === 'won' ? 'you won' : 'you loss'}</p>
              <StyledBtn onClick={handleModalClose}>Play again</StyledBtn>
            </div>
          </Typography>
        </Box>
        </Fade>
            </Modal>
        </div>
    )
}


export default GameStatusModal;