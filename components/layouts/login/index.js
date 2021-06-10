import classnames from 'classnames'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/client'
import { useDropdown } from 'hooks/useDropdown'
import Header from 'components/layouts/login/Header'
import Footer from 'components/layouts/login/Footer'

const Layout = ({
  children,
  className,
  disableClassChildren,
  hideFooter,
  onBack,
}) => {
  const [session, loading] = useSession()
  const [ref, isOpenProfile, setIsOpenProfile] = useDropdown(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div
        className={classnames(className, {
          'flex-grow py-10': !disableClassChildren,
        })}
      >
        {children}
      </div>
      {!hideFooter && <Footer />}
    </div>
  )
}

export default Layout
