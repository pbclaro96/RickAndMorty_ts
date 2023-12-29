import Link from 'next/link'
import Nav from './Nav'

const Header = (): JSX.Element => {
  return(
    <header>
      <div>
        <div>
          <Link href="/">
            
          </Link>
          <Nav />
        </div>
      </div>
      
    </header>
  )
}
export default Header