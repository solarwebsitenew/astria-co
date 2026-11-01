import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link
      href='/'
      className='text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-navy dark:text-white whitespace-nowrap'>
      Astria & Co
    </Link>
  )
}

export default Logo
