import { useContext, useEffect } from 'react'
import { Contexto } from '../context/Context'
import type { NextPage } from "next"
import Layout from "../components/Layout"
import Grid from "../components/Grid"
import Character from "../components/Character"
import NextPrev from '../components/NextPrev';

const Home: NextPage = () => {
  
  const { page, characters, fetchPage } = useContext(Contexto)
  
  useEffect(() => {
    fetchPage(page)
  }, [page, fetchPage])
  return (
    <div>
      <Layout pagina='Inicio'>
        <div>
          <Grid
              characters = {characters}
              Pagina = {Character}
          />
          <NextPrev/>
        </div>
      </Layout>
    </div>
  )
}

export default Home
