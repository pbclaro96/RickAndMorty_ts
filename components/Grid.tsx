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
const Grid = ({ characters, Pagina }: {characters:Character[], Pagina?: React.ComponentType<{ character: Character }>}) => {
  return (
    <div>
      <div>
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