import Button from '@/components/UI/button/Button'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
        <h1>Это вступительный текст</h1>
        <h2 style={{margin: '12px 0 0'}}>для калькулятора налогов (сейчас только тех, что платятся с зарплаты)</h2>

        <div className={styles.buttonWrapper}>
          <Button option="margin">
            <Link href="/calculator" className="link">Калькулятор</Link>  
          </Button>
          <Button option="margin">
            <Link href="/info" className="link">Инфо</Link>  
          </Button>
        </div>

    </main>
  )
}
