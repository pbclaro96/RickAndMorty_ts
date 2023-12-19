import { useContext } from 'react'
import { useRouter } from 'next/router'
import { Contexto } from '../../context/Context'
import { useEffect } from 'react';
import Link from 'next/link'
import Layout from '../../components/Layout';
import Grid from '../../components/Grid';
import OnlyCharacter from '../../components/OnlyCharacter';
import Styles from '../../styles/Grid.module.css'

const EachCharacter = () => {
  const router = useRouter();
  const { id } = router.query;
  const { character, fetchCharacter } = useContext(Contexto)
  
  useEffect(() => {
    if (id) {
      fetchCharacter(id);
    }
  }, [id]);

  return (
    <div>
      <Layout pagina={'character'}>
        {
          <Grid
            characters={[character]}
            Pagina={OnlyCharacter}
          />
        }
        <div className={Styles.volver}>
          <Link href="/">
            <button className={Styles.volverButton}>Volver</button>
          </Link>
        </div>
      </Layout >
    </div>
  );
};

export default EachCharacter;
