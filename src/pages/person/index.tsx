import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/template/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Person() {
  return (
    <Layout title='Pessoas' subtitle='Pesquisa'>
      <h3>Conteúdo</h3>
    </Layout>
  )
}
