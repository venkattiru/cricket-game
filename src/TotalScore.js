
import { useSelector } from "react-redux";
import { styled } from "styled-components";


const TotalScore = () => {

    const StyledScore = styled.div`
    flex-grow: 1;
    display: inline-flex;
    font-weight: 600;
    font-size: 32px;
    color: #343974;
    flex-basis: 10rem;
    justify-content: center;
    `;

    const score = useSelector((state) => state.score.totalScore);
    const wickets = useSelector((state) => state.score.totalWickets);

    return(
        <StyledScore>
            <p>{score}</p>
            <p>/</p>
            <p>{wickets}</p>
        </StyledScore>
    )
}

export default TotalScore;