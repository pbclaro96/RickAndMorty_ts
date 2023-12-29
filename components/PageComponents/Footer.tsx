import Image from 'next/image'

const Footer = (): JSX.Element => {
  return(
    <footer className='flex Class Properties place-content-center py-2 space-x-5 > * + *'>
      <Image alt="heart" width={32} height={32} src='/heart.png'  />
      <h4>Paola Barros</h4>
      <Image alt="racoon" width={32} height={32} src='/racoon.png' />
    </footer>
  )
}

export default Footer