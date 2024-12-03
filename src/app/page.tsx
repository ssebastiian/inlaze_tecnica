import { Metadata } from 'next';
import { HomeContent } from './components/HomeContent';


export const metadata: Metadata = {
  title: 'QUICKBET - Home',
  description: 'Mejor sitio de películas',
  keywords: ['QUICKBET','Quickbet'],
  icons: {
    icon: '/image/LogoVeoanime.png'
  }
};

export default function Home() {
  return (
    <HomeContent />
  )
}
