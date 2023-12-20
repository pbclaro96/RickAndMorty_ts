import { IGlobalCharacters } from "../interfaces";
import Styles from '../styles/Grid.module.css'

const Grid = ({ characters, Pagina }: {characters:IGlobalCharacters[], Pagina?: React.ComponentType<{ character: IGlobalCharacters }>}) => {
  console.log(characters);
  return (
    <div>
      <div className={Styles.contenedorPrincipal}>
        {characters.map((character, i) => (
          <div key={i}>
            <Pagina character={character} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Grid