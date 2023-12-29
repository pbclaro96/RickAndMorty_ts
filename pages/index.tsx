import React from 'react'
import { useContext, useLayoutEffect, useRef, useEffect } from 'react'
import { Contexto } from '../context/Context'
import type { NextPage } from "next"
import Layout from "../components/PageComponents/Layout"
import Grid from "../components/PageComponents/Grid"
import Character from "../components/PageComponents/Character"
import NextPrev from '../components/PageComponents/NextPrev';

if (typeof window  !== 'undefined') {
  React.useLayoutEffect = React.useEffect;
}

const Home: NextPage = () => {
  
  const { page, characters, fetchPage } = useContext(Contexto)
  
  const fetchPageRef = useRef(fetchPage);
  useEffect(() => {
    fetchPageRef.current(page);
  }, [page]);

  return (
    <div>
      <Layout pagina='Inicio'>
        <div>
          {<Grid
              characters = {characters}
              Pagina = {Character}
          />}
          <NextPrev/>
        </div>
      </Layout>
    </div>
  )
}

export default Home
