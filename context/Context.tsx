import { createContext } from 'react'
import { IGlobalCharacters } from './interfaces';

const base: IGlobalCharacters = {
  id: 1, 
  name: '', 
  status: '', 
  species: '', 
  type: '', 
  gender: '',
  origin: {
    name: '',
    url: ''
  },
  location: {
    name: '',
    url: ''
  },
  image:''
}
export const Contexto = createContext({
  numero: 0,
  page: 1,
  characters: base as IGlobalCharacters[], 
  character: base as IGlobalCharacters,
  origin: {},
  location: {}, 
  fetchPage: async (page: number): Promise<void>  => {}, 
  fetchCharacter: async (id: string | string[]): Promise<void> => {}, 
  id: [], 
  resetPage: () => {},
})
