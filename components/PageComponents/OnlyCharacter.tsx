import { useContext, useState } from 'react'
import { Contexto } from '../../context/Context'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Card, CardHeader, CardBody, CardFooter, Image, Button, Tooltip,Divider } from "@nextui-org/react";
import { IGlobalCharacters } from '../../context/interfaces';
import { users } from "./data/data";
import { BsHeart } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa"

const OnlyCharacter = ({character}:{character: IGlobalCharacters}) => {
  
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [size, setSize] = useState('xs')
  
  const handleOpen = (size:string) => {
    setSize(size)
    onOpen();
  }
  const { location, origin } = useContext(Contexto)

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

   const prueba = () => {
    const isCharacterInFavorites = users.some((item) => item.id === character.id);
    if (isCharacterInFavorites) {
      return <FaHeart/>
    }else{
      return <FaRegHeart/>
    }
  }

   const defineFavorites = () => {
    const isCharacterInFavorites = users.some((item) => item.id === character.id);
    if (isCharacterInFavorites) {
      console.log('El personaje ya existe en la lista de favoritos');
    } else {
      users.push(character);
    }
   }

   const toolTips = () => {
    const isCharacterInFavorites = users.some((item) => item.id === character.id);
    if (isCharacterInFavorites) {
      return <Tooltip content="Retirar de Favoritos"/>
    }else{
      return <Tooltip content="Añadir a Favoritos"/>
    }
   }

  return (
    <div>
      <Card isFooterBlurred className="w-full h-[520px] mt-8 col-span-12 sm:col-span-7">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <div className="flex flex-wrap gap-3">
          <Tooltip content="Añadir a Favoritos">
            <Button className='text-base' onPress={() => handleOpen('md')} onClick={defineFavorites} color="danger" radius="full" size="sm">
              {prueba()}
            </Button>
          </Tooltip>
        </div>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-5/6 object-cover"
          src={character.image}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center justify-center">
            <div className="flex flex-col text-sm text-white/60 ">
                <h4 className="text-white/90 font-medium text-xl">{character.name}</h4>
                <Divider className='my-2'/>
                <h4 className='flex justify-between font-bold text-sm'>Estado:  {character.status}  {state()}</h4>
                {/* <h4 className='flex justify-between font-bold text-base'>{character.status}  {state()}</h4> */}
                <h4 className='flex mb-2 font-bold text-sm'>Especie: {character.species}</h4>
                {/* <h4 className='flex mb-2 font-bold text-base'>{character.species}</h4> */}
                <h4 className='flex font-bold text-sm'>Género: {character.gender}</h4>
                {/* <h4 className='flex font-bold text-base'>{character.gender}</h4> */}
            </div>
          </div>
          
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
        </CardFooter>
      </Card>
    </div>
  )
}

export default OnlyCharacter