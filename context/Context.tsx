import { createContext } from 'react'
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
const defaultValue = {
  numero: 0, 
  page: 1, 
  characters: ["", 0,], 
  character: {}, 
  origin: {}, 
  location: {}, 
  fetchPage: (page: number) => {}, 
  fetchCharacter: (id: string | string[]) => {}, 
  id: [""], 
  resetPage: (pages: number) => {} 
};

export const Contexto = createContext(defaultValue)