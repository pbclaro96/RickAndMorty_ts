import { IGlobalState, IGlobalAction } from "../interfaces";

export const Reducer = (state: IGlobalState, action: IGlobalAction) => {
  const { payload, type, page } = action
  switch (type) {
    case 'suma':
      return {
        page: state.page + 1,
      };
    case 'resta':
      return {
        page: state.page - 1,
      };
    case 'setCharacters':
      if(typeof action.payload === 'object' && action.payload !== null) {
        return {
          ...state,
          characters: action.payload,
          page
        };
      }

    case 'reset':
      if(typeof payload === 'number'){
        return {
        ...state,
        page: payload,
        };
      }
      

    case 'setCharacter':
        if (typeof action.payload === 'object' && action.payload !== null) {
          const { id, image, name, status, species, gender, origin, location } = action.payload;
      
          return {
            ...state,
            character: {
              id,
              image,
              name,
              status,
              species,
              origin,
              location,
              gender,
            },
            
          };
        } else {
          
          return state;
        }
      
    case 'next':
      return {
        page: typeof payload === 'number' ? payload + 1 : state.page,
      }

    case 'prev':
      return {
        page: typeof payload === 'number' ? payload - 1 : state.page,
      }

    default:
      return state;
  }
};
