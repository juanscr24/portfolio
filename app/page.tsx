import Footer from './components/Footer'
import Header from './components/Header'
import SectionOne from './components/SectionOne'
import Skills from './components/Skills'

export default function Home() {
  return (
    <div className=' bg-zinc-200 py-10 max-lg:py-0'>
      <div className='flex justify-center'>
        <Header />
      </div>
      <div className='flex justify-center'>
        <Skills />
      </div>
      <div className='flex justify-center'>
        <SectionOne />
      </div>
      <div className='flex justify-center'>
        <Footer />
      </div>
    </div>
  )
}
