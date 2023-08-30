import { useMediaQuery } from 'react-responsive'
import DesktopView from './views/DesktopView'
import MobileView from './views/MobileView'



function App() {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 900px)'})
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })

  return (
    <div>
      {isDesktopOrLaptop && <DesktopView />}
      {isTabletOrMobile && <MobileView />}
    </div>
  )
}

export default App
