
export interface IRequest {
  info: InfoModel;
  result: IGlobalCharacters;
}

export interface InfoModel {
  count: number;
  pages: number;
  next: string;
  prev: string;
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

export interface IGlobalInitialState {
  numero: number,
  characters: IGlobalCharacters[],
  character: IGlobalCharacters,
  origin: IIndication,
  location: IIndication,
  page: number,
  data:  IGlobalCharacters[]
}

export interface IIndication {
  name: string,
  url: string
}

export interface IGlobalAction {
  payload: any, 
  type: string, 
  page?: number
}