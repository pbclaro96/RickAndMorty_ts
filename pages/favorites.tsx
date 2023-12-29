import Layout from "../components/Layout"
import Image from "next/image";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps } from "@nextui-org/react";
import { EditIcon } from "../components/EditIcon";
import { DeleteIcon } from "../components/DeleteIcon";
import { EyeIcon } from "../components/EyeIcon";
import { columns, users } from "../components/data";
import { useCallback, useContext, useState } from "react";
import { Contexto } from '../context/Context'

const statusColorMap: Record<string, ChipProps["color"]>  = {
  Alive: "success",
  Dead: "danger",
  unknown: "warning",
};

type IGlobalCharacters = typeof users[0];

export default function App() {

  //crea un estado para que al eliminar se refleje en el instante
  const [localUsers, setLocalUsers] = useState(users);

  //llama el contexto de character para que recorrerlo y poder eliminarlo de la lista
  const { character } = useContext(Contexto)

  //para eliminar un personaje de la lista de favoritos
  const DeleteCharacter = (id:number) => {
    const indexToRemove = localUsers.findIndex((item) => item.id === id);
    if (indexToRemove !== -1) {
      users.splice(indexToRemove, 1);
      const updatedUsers = [...localUsers];
      setLocalUsers(updatedUsers);
      console.log('El personaje ha sido eliminado de la lista de favoritos');
    } else {
       console.log('El personaje no existe en la lista de favoritos');
    } 
  }
  
  const renderCell = useCallback((user: IGlobalCharacters, columnKey: React.Key) => {
    const cellValue:any = user[columnKey as keyof IGlobalCharacters];
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{radius: "lg", src: user.image}}
            description={user.gender}
            name={cellValue}
          >
            {user.gender}
          </User>
        );
      case "species":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-default-400">{user.species}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => DeleteCharacter(user.id)}>
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Layout pagina={'Personaje'}>
      <div className="flex place-items-center justify-center mt-8 space-x-4 > * + *">
        <p className="text-4xl">Personajes Favoritos</p>
        <Image src="/iconoFavoritos.png" alt="favoritos" width={64} height={64}/>
      </div>
      <Table aria-label="Example table with custom cells" className="my-10">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Layout>
  );
}