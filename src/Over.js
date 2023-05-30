import { useSelector } from "react-redux";


const Over = () => {
  const runs = useSelector(state => state.score.runScored);
  

  const handleBall = () => {};

  return (
    
    
    <div style={{ display: 'flex' }}>
      <div className="circle">{runs}</div>
    </div>
    
    
  );
};

export default Over;
