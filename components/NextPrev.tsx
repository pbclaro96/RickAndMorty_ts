import { useContext, useState } from 'react'
import { Contexto } from '../context/Context'
import { Button, Pagination } from "@nextui-org/react";

const NextPrev = () => {
  
  const { page, fetchPage } = useContext(Contexto)

  const [currentPage, setCurrentPage] = useState(1);
  
  const next = () => {
    fetchPage(page + 1)
  }
  const prev = () => {
    fetchPage(page - 1)
  }

  return (
    <div className="flex Class Properties place-content-center my-5 space-x-0.5 > * + *" >
      {/* <Button color="success" variant="shadow" name="prev"
        onClick={prev}
        style={{ display: (page - 1) === 0 ? 'none' : 'flex' }}>
        Prev
      </Button> 
      <Button color="success" variant="shadow" name="next" onClick={next} style={{ display: (page + 1) === 43 ? 'none' : 'flex' }}>
        Next
      </Button> */}
      <div className="flex flex-col gap-5">
        <Pagination
          total={42}
          color="success"
          page={page}
          onChange={fetchPage}
        />
        <div className="flex gap-2 justify-center">
          <Button
            size="sm"
            variant="flat"
            color="success"
            onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
            onClick={prev}
            style={{ display: (page - 1) === 0 ? 'none' : 'flex' }}
          >
            Anterior
          </Button>
          <Button
            size="sm"
            variant="flat"
            color="success"
            onPress={() => setCurrentPage((prev) => (prev < 42 ? prev + 1 : prev))}
            onClick={next}
            style={{ display: (page + 1) === 43 ? 'none' : 'flex' }}
          >
            Siguiente
          </Button>
        </div>
      </div> 
    </div>
  )
}


export default NextPrev