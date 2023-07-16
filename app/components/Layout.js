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
                <div className='w-96'>
                    <Sidenav />
                </div>
            )}
            <div className='bg-contain bg-center bg-no-repeat w-full max-h-screen ' style={{
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