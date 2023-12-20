import { createContext } from 'react'
import { IGlobalContext, IGlobalCharacters } from '../interfaces';

const defaultValue: IGlobalContext = {
  numero: 0, 
  page: 1, 
  characters: [], 
  character: {}, 
  origin: {}, 
  location: {}, 
  fetchPage: async (page: number): Promise<void>  => {}, 
  fetchCharacter: async (id: string | string[]): Promise<void> => {}, 
  id: [], 
  resetPage: () => {},
  image: ""

};

export const Contexto = createContext(defaultValue)