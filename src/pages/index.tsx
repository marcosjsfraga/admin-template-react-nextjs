import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/template/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title='Home' subtitle='Under construction'>
      <h3>Conteúdo</h3>
    </Layout>
  )
}
