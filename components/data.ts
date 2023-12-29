import { IGlobalCharacters } from "../context/interfaces";

const columns = [
  {name: "NOMBRE", uid: "name"},
  {name: "ESPECIE", uid: "species"},
  {name: "ESTADO", uid: "status"},
  {name: "OPCIONES", uid: "actions"},
];

const users: IGlobalCharacters[] = [
  {
      id: 0, 
      name: 'Paola', 
      status: 'Alive', 
      species: 'human', 
      type: '', 
      gender: 'female',
      origin: {
        name: '',
        url: ''
      },
      location: {
        name: '',
        url: ''
      },
      image:"https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
];

export {columns, users};
