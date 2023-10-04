import Footer from './components/Footer'
import Header from './components/Header'
import SectionOne from './components/SectionOne'
import Skills from './components/Skills'

export default function Home() {
  return (
    <div className=' bg-zinc-200 py-10 max-lg:py-0'>
      <div className='flex justify-center flex-col items-center'>
        <Header />
        <Skills />
        <SectionOne />
        <Footer />
      </div>
    </div>
  )
}
