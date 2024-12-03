import { Metadata } from 'next';
import { MovieContent } from './components/MovieContent';

export const metadata: Metadata = {
    title: 'QUICKBET - movies',
    description: 'Mejor sitio de películas',
    keywords: ['QUICKBET','Quickbet'],
    icons: {
      icon: '/image/Quickbet.png'
    }
  };

export default async function MoviePage({
  params,
}: {
    params: Promise<{ id: string }>
}) {

    const idMovie = (await params).id

  return (
    <MovieContent idMovie={idMovie}/>
  )
}