import { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import Over from './Over'

const TotalScore = () => {
  const StyledScore = styled.div`
    flex-grow: 1;
    display: inline-flex;
    font-weight: 600;
    font-size: 32px;
    color: #343974;
    flex-basis: 10rem;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    `

  const score = useSelector((state) => state.score.totalScore, shallowEqual)
  const wickets = useSelector((state) => state.score.totalWickets)
  const balls = useSelector((state) => state.score.totalBalls)

  let ball = 0
  let over = 0

  if (balls % 6 === 0) {
    over = balls / 6
  } else {
    over = Math.floor(balls / 6)
    ball = balls % 6
  }

  return (

        <StyledScore>
            <div className="score-display">
            <p data-aos='up-show'>{score}</p>
            <p>/</p>
            <p data-aos='up-show'>{wickets}</p>
            </div>
            <div>
            <p style={{ margin: '10px 0' }}>Overs : {over}.{ball}</p>
            </div>
            <Over/>
        </StyledScore>

  )
}

export default memo(TotalScore)
