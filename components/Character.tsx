import Image  from 'next/image'
import Link from 'next/link'
interface Characters{
  id: number, 
  name: string, 
  status: string, 
  species: string, 
  type: string, 
  gender: string,
  image: string
}

const Character = ({ character }: {character: Characters}) => {
  return(
    <div>
      <div>
        <Link href={`indexCharacter/${character.id}`}>
        <Image width={400} height={300} src={character.image} alt="personaje" style={{ height: 'auto', maxWidth: '100%' }} />
          <h2>{character.name}</h2>
          <h4>Estado: {character.status}</h4>
          <h4>Especie: {character.species}</h4>
          <h4>Género: {character.gender}</h4>
        </Link>
      </div>
    </div>
  )
}

export default Character