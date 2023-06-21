import Image from 'next/image'
import Header from './components/Header'
import BannerText from './components/BannerText'
import MiddleBanner from './components/MiddleBanner'

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/slide01.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
      }}>
        <Header />
        <BannerText />
        <MiddleBanner />
    </div>
  )
}
