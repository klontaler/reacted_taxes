'use client';

import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/UI/header/Header'
import { SalaryContext } from '@/context/SalaryContext'
import { useState } from 'react'

const inter = Inter({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'Плотина...логи',
  description: 'Небольшой калькулятор налогов, теперь сделанный с помошью реакта',
}

export default function RootLayout({ children }) {
  const [salary, setSalary] = useState(0);

  return (
    <html lang="ru">
      <body className={inter.className}>
        <SalaryContext.Provider value={{
          salary,
          setSalary
        }}>
          <Header />
          {children}
        </SalaryContext.Provider>
      </body>
    </html>
  )
}
