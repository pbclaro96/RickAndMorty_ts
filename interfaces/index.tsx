export interface IGlobalContext {
  characters: IGlobalCharacters[],
  character: any,
  id: []
  origin?: {
    name?: string,
    url?: string
  },
  location?: {
    name?: string,
    url?: string
  },
  numero:number,
  page: number,
  fetchPage: (page: number) => Promise<void>,
  fetchCharacter: (id: string | string[]) => Promise<void>,
  resetPage: () => void,
  image?:string
}

export interface IGlobalState {
  numero?: number;
  page?: number;
  characters?: IGlobalCharacters[];
  character?: {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
  };
  origin?: {
    name: string;
    url: string;
  };
  location?: {
    name: string;
    url: string;
  },
}

export interface IGlobalInitialState {
  numero?: number,
  characters?: IGlobalCharacters[],
  character?: { id: number, name: string, status: string, species: string, type: string, gender: string},
  origin?: {name: string, url: string},
  location?: {name: string, url: string},
  page?: number
}

export interface IGlobalAction {
  payload?: any,
  type?:string, 
  page?: number
}

export interface IGlobalCharacters {
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
  },
  image?:string
}