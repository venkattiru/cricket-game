import { useContext, useDeferredValue, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CommentaryContext } from './context/CommentaryContext'
import { addScore, addWickets, addBalls, getRun, getDesc } from './redux/features/scoreSlice'
import { cricObj } from './utils/common'
import Image from './Image'
import TotalScore from './TotalScore'
import CricModal from './CricModal'
import GameStatusModal from './GameStatusModal'
import { styled } from 'styled-components'

const Cricket = () => {
  const [num, setNum] = useState(0)
  const [status, setStatus] = useState('playing')
  const desc = useSelector((state) => state.score.commentDesc)
  const wickets = useSelector((state) => state.score.totalWickets)
  const totalScore = useSelector((state) => state.score.totalScore)
  const totalBalls = useSelector((state) => state.score.totalBalls)
  const deferredStatus = useDeferredValue(status)

  const dispatch = useDispatch()
  const { commentary } = useContext(CommentaryContext)
  const mode = useSelector((state) => state.mode.mode)
  const target = useSelector((state) => state.mode.target.currentTarget)
  const highScore = useSelector((state) => state.mode.highScore)
  const StyledDesc = styled.p`
    font-size: 20px;
    color: ${props => props.ctype === 'W' ? 'red' : '#487648'};
    font-weight: 700;
    flex-grow: 1;
    height:12vh;
    @media only screen and (min-width:1024px) {
      flex-basis: 32rem;
      height: auto;
    }
    text-align:center;
    margin-right: 18px;
  `
  const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media only screen and (max-width:1024px) {
      flex-direction: column;
    }
  `

  const StyledBtn = styled.button`
    all: unset;
    padding: 10px;
    font-weight: 700;
    background-color: #3a76c4;
    width: 60px;
    color: white;
    text-align: center;
  `

  useEffect(() => {
    if (totalBalls === 60 || wickets === 10) {
      if (totalScore >= target) {
        setStatus('won')
      } else {
        setStatus('loss')
      }
    }
    if (totalScore >= target && target !== 0) {
      setStatus('won')
    }
  }, [totalBalls, wickets, totalScore])

  const handlebtn = () => {
    setNum(Math.floor(Math.random() * 14))
    const value = Math.floor(Math.random() * 62)
    dispatch(getDesc(cricObj[value]))
    dispatch(getRun(cricObj[value].sign))
    if (cricObj[value].name !== 'freehit' || cricObj[value].sign !== 'WD') {
      dispatch(addBalls())
    }

    if (cricObj[value].name === 'runs' || cricObj[value].name === 'freehit') {
      dispatch(addScore(cricObj[value]?.value))
    } else if (cricObj[value].name === 'out') {
      dispatch(addWickets(1))
    }
    if (commentary) {
      speechSynthesis.cancel()
      const cmtry = new SpeechSynthesisUtterance(cricObj[value]?.desc)
      speechSynthesis.speak(cmtry)
    }
  }
  return (
        <div>
            <StyledDiv>
     <Image num={num}/>
       <StyledDesc data-aos = 'zoom-in' ctype={desc.sign}>{desc?.desc || 'Click on play button to play first ball'} </StyledDesc>
       {mode === 'target' && <marquee className='display-target'>Target : {target}</marquee>}
       {mode === 'highscore' && <p className='display-target'>High Score : {highScore}</p>}
        <TotalScore/>
     </StyledDiv>
     <div style={{ textAlign: 'center', padding: 10 }}>
     <StyledBtn onClick={handlebtn}>Play</StyledBtn>
     </div>
     <CricModal open={true} />
     {status !== 'playing' && <GameStatusModal open={true} status={deferredStatus} mode={mode}/>}
        </div>
  )
}

export default Cricket
