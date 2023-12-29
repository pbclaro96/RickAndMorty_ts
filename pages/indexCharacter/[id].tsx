import React from 'react'
import { useContext, useRef, useLayoutEffect, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Contexto } from '../../context/Context'
import Link from 'next/link'
import Layout from '../../components/PageComponents/Layout';
import Grid from '../../components/PageComponents/Grid';
import OnlyCharacter from '../../components/PageComponents/OnlyCharacter';
import { Button } from "@nextui-org/react";

const EachCharacter = () => {
  const router = useRouter();
  const { id } = router.query;
  const { character, fetchCharacter } = useContext(Contexto)
  

  const fetchCharacterRef = useRef(fetchCharacter);
  useEffect(() => {
    if (id) {
      fetchCharacterRef.current(id);
    }
    if (typeof window !== 'undefined') {
      React.useLayoutEffect = useEffect;
    }
  }, [id]);

  return (
    <div>
      <Layout pagina={'Personaje'}>
        {
          <Grid
            characters={[character]}
            Pagina={OnlyCharacter}
          />
        }
        <div className="flex Class Properties place-content-center mb-10">
          <Link href="/">
            <Button color="success" variant="shadow"onClick={(e) => {
                e.preventDefault();
                router.push('/'); 
            }}>
              Volver
            </Button>
          </Link>
        </div>
      </Layout >
    </div>
  );
};

export default EachCharacter;
