import { useReducer } from 'react'
import { useRouter } from 'next/router'
import { Contexto } from './Context';
import { Reducer } from './Reducer'
import { ReactNode } from 'react';
import axios from 'axios';
import { IGlobalInitialState } from './interfaces';
import { users } from '../components/PageComponents/data/data';

const State = ({ children }:{children: ReactNode}) => {
  const router = useRouter()
  const { id } = router.query

  const initialState: IGlobalInitialState = {
    numero: 4,
    characters: [],
    character: {id: 0, name: "", status: "", species: "", type: "", gender: ""},
    origin: {name: "", url: ""},
    location: {name: "", url: ""},
    page: 0,
    data: []
  }
  const [state, dispatch] = useReducer(Reducer, initialState)
  //console.log(state.numero);
  const resetPage = () => {
    dispatch({
      payload: 0,
      type: 'reset'
    })
  }

  const fetchCharacter = async (id: string | string[]) => {
    let character = 'setCharacter'
    const resp = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    const characterData = resp.data;
    dispatch({
        payload: characterData,
        type:character
    })
  }

  const fetchPage = async (page: number) => {
    page = page === 0 ? 1 : page;
    let characters = 'setCharacters'
    const resp = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
    const characterData = resp.data;
    dispatch({
        payload: characterData.results,
        type:characters,
        page
    })
  }

  const defineFavorites = () => {
    let define = 'defineFavorites'
    dispatch({
      payload: users,
      type: define
    })
  }

  const deleteFavorites = (id:number) => {
    let deleteFavoritesCharacters = 'deleteFavorites';
    dispatch({
      payload: id,
      type: deleteFavoritesCharacters
    });
  };


  return (
    <Contexto.Provider value={{
        numero: state.numero,
        page: state.page,
        characters:state.characters,
        character: state.character,
        origin: state.origin,
        location:state.location,
        fetchPage,
        fetchCharacter,
        id:[],
        resetPage,
        defineFavorites,
        deleteFavorites,
        data: state.data
    }}>
      {children}
    </Contexto.Provider>
)
  }
export default State
