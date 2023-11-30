import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/template/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Settings() {
  return (
    <Layout title='Configurações' subtitle='Ajustes do sistema'>
      <h3>Conteúdo</h3>
    </Layout>
  )
}
