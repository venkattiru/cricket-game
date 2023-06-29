
import { addScore, addWickets, addBalls, getRun } from './redux/features/scoreSlice';
import { useContext, useDeferredValue, useEffect, useState } from 'react';
import Image from './Image';
import { cricObj } from './utils/common';
import { styled } from 'styled-components';
import {  useDispatch } from 'react-redux';
import TotalScore from './TotalScore';
import CricModal from './CricModal';
import { useSelector } from 'react-redux';
import Settings from './Settings';
import { CommentaryContext } from './context/CommentaryContext';
import GameStatusModal from './GameStatusModal';



const Cricket = () => {
    const [num, setNum] = useState(0);
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState('playing');
  const wickets = useSelector((state) => state.score.totalWickets);
  const totalScore = useSelector((state) => state.score.totalScore);
  const totalBalls = useSelector((state) => state.score.totalBalls);
  const deferredStatus = useDeferredValue(status);
 
  const dispatch = useDispatch();

  const {commentary} = useContext(CommentaryContext);
  const mode = useSelector((state) => state.mode.mode );
  const target = useSelector((state) => state.mode.target.currentTarget);
  
  const StyledDesc = styled.p`
    font-size: 20px;
    color: ${props => props.ctype === 'W' ? "red" : "#487648"};
    font-weight: 700;
    flex-grow: 1;
    @media only screen and (min-width:1024px) {
      flex-basis: 32rem;g
    }
    text-align:center;
    margin-right: 18px;
  `;
  const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media only screen and (max-width:1024px) {
      flex-direction: column;
    }
  `;

  const StyledBtn = styled.button`
    all: unset;
    padding: 10px;
    font-weight: 700;
    background-color: #3a76c4;
    width: 60px;
    color: white;
    text-align: center;
  `;

  const StyledHeader = styled.h2`
  background:#24247c;
  text-align: center;
    color: coral;
    margin: 0;
    padding: 10px;
  `;

  const StyledCricImg = styled.img`
    top: 8px;
    position: absolute;
    left: 10px;
  `;

  useEffect(() => {
    if(totalBalls === 60 || wickets === 10 ) {
      if(totalScore >= target) {
        setStatus('won');
      } else {
        setStatus('loss');
      }
    }
    if(totalScore >= target && target !== 0) {
      setStatus('won');
    }
  },[totalBalls,wickets,totalScore]);
  
    const handlebtn = () => {
        setNum(Math.floor(Math.random()*14));
        const value = Math.floor(Math.random() * 62);
        setDesc(cricObj[value]);
        dispatch(getRun(cricObj[value].sign));
        if(cricObj[value].name !== 'freehit' || cricObj[value].sign !== 'WD') {
          dispatch(addBalls());
        }
        
        if(cricObj[value].name === 'runs' || cricObj[value].name === 'freehit') {
          dispatch(addScore(cricObj[value]?.value));
        } else if(cricObj[value].name === 'out') {
          dispatch(addWickets(1));
        } 
        if(commentary) {
          speechSynthesis.cancel();
          const cmtry = new SpeechSynthesisUtterance(cricObj[value]?.desc);
          speechSynthesis.speak(cmtry);
        }
        
      }

    return(
        <div className="App">
      <header>
        <StyledCricImg src='../cricket-white32.png' alt='cricket logo'/>
        <StyledHeader>Cricket</StyledHeader>
        <Settings/>
        </header>
     <StyledDiv>
     <Image num={num}/>
       <StyledDesc ctype={desc.sign}>{desc?.desc || 'Click on play button to play first ball'}</StyledDesc>
       {mode === 'target' && <marquee className='display-target'>Target : {target}</marquee>}
        <TotalScore/>
     </StyledDiv>
     
     <div style={{textAlign:'center'}}>
     <StyledBtn onClick={handlebtn}>Play</StyledBtn>
     </div>
     <CricModal open={true} />
     {status !== 'playing' && <GameStatusModal open={true} status={deferredStatus} />}
    </div>
    )
}

export default Cricket;