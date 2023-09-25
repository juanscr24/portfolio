import Header from './components/Header'
import SectionOne from './components/SectionOne'

export default function Home() {
  return (
    <div className=' bg-zinc-200 pt-10 max-lg:pt-0'>
      <div className='flex justify-center'>
        <Header />
      </div>
      <div className='flex justify-center'>
        <SectionOne />
      </div>
    </div>
  )
}
