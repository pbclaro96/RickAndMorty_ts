import Link from 'next/link'
import { useState } from 'react';
import { IGlobalCharacters } from '../context/interfaces'
import { ModalContent, ModalHeader, ModalBody, ModalFooter,Card, CardHeader, CardBody, Image,Divider, Tooltip, Button, useDisclosure, Modal } from "@nextui-org/react";
import { users } from './data';
import { FiPlusCircle } from "react-icons/fi";
import { FaRegHeart, FaHeart } from "react-icons/fa"
import { useRouter } from 'next/router';

const Character = ({ character }: {character: IGlobalCharacters}) => {
  const router = useRouter();
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [size, setSize] = useState('xs')
  const [isPressed, setIsPressed] = useState(false);
  const [localUsers, setLocalUsers] = useState(users);
  
  const handleOpen = (size:string) => {
    setSize(size)
    const isCharacterInFavorites = users.some((item) => item.id === character.id);
    if (isCharacterInFavorites) {
      console.log('');
    }else{
      onOpen();
    }
  }

  //función para determinar si el botón está siendo presionado
  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  //función para añadir personajes en la lista de favoritos
  const defineFavorites = () => {
    const isCharacterInFavorites = users.some((item) => item.id === character.id);
    if (isCharacterInFavorites) {
      DeleteCharacter(character.id)
    } else {
      users.push(character);
      console.log('Personaje Añadido');
    }
  }

  const prueba = () => {
    const isCharacterInFavorites = users.some((item) => item.id === character.id);
    if (isCharacterInFavorites) {
      return <FaHeart/>
    }else{
      return <FaRegHeart/>
    }
  }

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

 //función para definir el estado de los personajes 
 const state = () =>{
  if(character.status === "Alive"){
    return <Image alt="" width={26} height={26} src="/img/greenCircle.png" />
  }
  if(character.status === "unknown"){
    return <Image alt="" width={26} height={26} src="/img/greyCircle.png"  />
  }
  if(character.status === "Dead"){
    return <Image alt="" width={26} height={26} src="/img/redCircle.png"  />
  }else{
    return <Image alt="" width={26} height={26} src="/img/redCircle.png"  />
  }
 }

 //función para ir a la página del personaje individual seleccionado
 const goToOnlyCharacter = () => {
  const route = `indexCharacter/${character.id}`;
    router.push(route);
 }

  return(
    <div>
      <Card className="py-4 mx-8 my-8">
          <CardHeader className="pb-0 pt-2 px-5 flex-col items-start">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={character.image}
              width={270}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className='flex justify-between mx-2.5'>
              <h4 className="font-bold text-large">{character.name}</h4>
              <Tooltip content="Añadir a Favoritos">
                <span className='flex items-center cursor-pointer text-lg text-red-500' onClick={()=>{ handleOpen('md'),handlePress(); isPressed ? DeleteCharacter(character.id): defineFavorites()}}>
                  {/* {isPressed ? <FaHeart /> : <FaRegHeart />} */}
                  {prueba()}
                </span>
              </Tooltip>
            </div>
            <Divider className='my-2'/>
            <small className="text-default-500 flex ml-2 justify-between mr-2">Estado: {character.status}   {state()} </small>
            <small className="text-default-500 mb-3 ml-2">Especie: {character.species}</small>
            <Tooltip content="Ver más">
              <Button onClick={goToOnlyCharacter} className='text-lg font-medium' color="success">
                <h4 className='text-sm'>Ver más</h4>
                <FiPlusCircle />
              </Button>
            </Tooltip>
          </CardBody>
          <Modal
            size= "xs" 
            isOpen={isOpen} 
            onClose={onClose} 
          >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                <ModalBody>
                  <p> 
                    Personaje Añadido Exitosamente
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" onPress={onClose}>
                    Cerrar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Card>
      <Divider className='mx-5'/>
    </div>
  )
}

export default Character