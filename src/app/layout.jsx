import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import Header from '@/components/UI/header/Header'
import { SalaryContext } from '@/context/SalaryContext'

const jetbrains_mono = JetBrains_Mono({
  weight: ['400', '700'], 
  subsets: ['cyrillic-ext'],
  variable: '--font-jetbrains_mono',
})

export const metadata = {
  title: 'Плотина...логи',
  description: 'Небольшой калькулятор налогов, теперь сделанный с помошью реакта',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={jetbrains_mono.className}>
          <Header />
          {children}
      </body>
    </html>
  )
}
