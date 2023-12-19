import { useContext } from 'react'
import { Contexto } from '../context/Context'
const NextPrev = () => {
  
  const { page, fetchPage } = useContext(Contexto)
  
  const next = () => {
    fetchPage(page + 1)
  }
  const prev = () => {
    fetchPage(page - 1)
  }


  return (
    <div>
      <button
        name="prev"
        onClick={prev}
        style={{ display: (page - 1 === 0) ? 'none' : '' }}
      >
        Prev
      </button>

      <button name="next" onClick={next} style={{ display: (page + 1 === 43) ? 'none' : '' }}>Next</button>
    </div>
  )
}


export default NextPrev