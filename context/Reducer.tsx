import { IGlobalAction, IGlobalInitialState } from "./interfaces";

export const Reducer = (state: IGlobalInitialState, action: IGlobalAction) => {
  
  
  const { payload, type, page } = action;

  switch (type) {
    case 'suma':
      return {
        ...state,
        page: state.page + 1,
      };
    case 'resta':
      return {
        ...state,
        page: state.page - 1,
      };
    case 'setCharacters':
      return {
        ...state,
        characters: payload,
        page,
      };
    case 'reset':
      if (typeof payload === 'number') {
        return {
          ...state,
          page: payload,
        };
      }
      return state; 
    case 'setCharacter':
      return {
        ...state,
        character: payload,
      };
      
    case 'next':
      return {
        ...state,
        page: typeof payload === 'number' ? payload + 1 : state.page,
      };
    case 'prev':
      return {
        ...state,
        page: typeof payload === 'number' ? payload - 1 : state.page,
      };
    case 'defineFavorites':
      return{
        ...state,
        data: [...state.data, action.payload]
      };
    case 'deleteFavorites':
      return{
        ...state,
        fav: state.data.findIndex((item) => item.id === action.payload)
      };
    default:
      return state;
  }
};
