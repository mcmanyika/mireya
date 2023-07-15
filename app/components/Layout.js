import { useGlobalState, setGlobalState } from '../store'
import Footer from './Footer'
import Header from './Header'
import Join from './Join'
import Sidenav from './Sidenav'

function Layout(props) {
    const [isOpen] = useGlobalState('isOpen')
  
  return (
        <div className='flex'>
            
            {isOpen && (
                <div className='flex-1'>
                    <Sidenav />
                </div>
            )}
            <div className='flex-1 bg-contain bg-center bg-no-repeat w-full h-screen' style={{
  backgroundImage: "url('/assets/images/slide01.jpeg')"}}>
            <Header />
            {props.children}
            <Join />
            <Footer />
            </div>
        </div>
  )
}

export default Layout