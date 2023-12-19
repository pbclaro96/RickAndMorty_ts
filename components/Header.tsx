import Link from 'next/link'
import Image from 'next/image'

const Header = (): JSX.Element => {
  return(
    <header>
      <div>
        <div>
          <Link href="/">
              <h1>Este es el Header!!</h1>
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Header