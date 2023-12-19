import { useContext } from 'react'
import { Contexto } from '../context/Context'
import Styles from '../styles/Grid.module.css'
import Image from 'next/image'
const OnlyCharacter = () => {
  interface Character{
    id?: number, 
    name?: string, 
    status?: string, 
    species?: string, 
    type?: string, 
    gender?: string
    origin?: {
      name: string,
      url: string
    },
    location?: {
      name: string,
      url: string
    }
  }
  const { character, location, origin } = useContext(Contexto)


  console.log(character);
  return (
    <div>
      <div className={Styles.containerOnlyCharacter}>
        <div className={Styles.nombre}>
          <h2>{character.name}</h2>
        </div>
        <div className={Styles.container2}>
          <div className={Styles.contenedorImagen}>
            {character.image && (
              <Image
                className={Styles.imagenOnlyCharacter}
                width={400}
                height={300}
                src={character.image}
                alt="personaje"
                style={{ height: 'auto', maxWidth: '100%' }}
              />
            )}
          </div>
          <div className={Styles.letras}>
            <h4>Estado: {character.status}</h4>
            <h4>Especie: {character.species}</h4>
            <h4>Género: {character.gender}</h4>
            <h4>Origen: {origin.name}</h4>
            <h4>Ubicación: {location.name}</h4>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OnlyCharacter