import Image from 'next/image'
import Link from 'next/link'
import { Contexto } from '../../context/Context'
import { useContext, useState } from 'react'
import { HeartIcon } from '../Icons/HeartIcon';
import { Badge, Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, NavbarItem, Button, Tooltip } from "@nextui-org/react";
import { ThemeSwitcher } from './ThemeSwitcher'; 
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
      "Inicio",
      "Caracteristicas",
      "Contacto",
      "Blog",
      "API",
      "Favoritos",
      "Iniciar Sesión",
    ];
    const { resetPage } = useContext(Contexto)

    const inicio = () =>{
        const pages=0
        resetPage()
    }

    return (
        <div>
            <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link onClick={inicio} href="/">
                        <Image alt='logo' width={180} height={100} src="/img/letrasRM.png" priority={true}/>
                    </Link>
                    <p className="font-bold text-inherit"></p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                        <Link onClick={inicio} color="foreground" href="/">
                            Inicio
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link onClick={inicio} color="foreground" href="#">
                            Caracteristicas
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link onClick={inicio} color="foreground" href="#">
                            Contacto
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link onClick={inicio} color="foreground" href="#">
                            Blog
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="https://rickandmortyapi.com/"  target="_blank" aria-current="page">
                            API
                        </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="success" href="#" variant="flat">
                        Iniciar Sesión
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Tooltip content="Ver Favoritos">
                        <Button isIconOnly color="danger" aria-label="Like">
                            <HeartIcon/>
                        </Button>
                    </Tooltip>
                </NavbarItem>
                <NavbarItem>
                    <ThemeSwitcher/>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                    color={
                        index === 4 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                    }
                    className="w-full"
                    href="/"
                    >
                    {item}
                    </Link>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
    </Navbar>
            
        </div>
    )
}


export default Nav