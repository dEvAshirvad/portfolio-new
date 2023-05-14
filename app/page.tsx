import Image from 'next/image'
import HomePage from '../components/pages/HomePage'
import Header from '@/components/ui/Header/Header'
import { Sheet } from '@/components/ui/sheet'

export default function Home() {
  return (
    <>
      <Sheet>
        <Header />
        <HomePage />
      </Sheet>
    </>
  )
}
