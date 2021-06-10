import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex">
      <div className="w-full text-white flex justify-center my-4 container mx-auto">
        <Link href="/">
          <img
            src="/images/omise-logo.svg"
            style={{ height: 28, width: 100 }}
            className="cursor-pointer"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
