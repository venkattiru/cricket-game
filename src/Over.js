import { useSelector } from 'react-redux'
const Over = () => {
  const runs = useSelector(state => state.score.runScored)

  return (

    <div style={{ display: 'flex' }}>
      <div className="circle"><p style={{ margin: 0 }} >{runs}</p></div>
    </div>

  )
}

export default Over
