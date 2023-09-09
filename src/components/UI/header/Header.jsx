import styles from './Header.module.css';
import Link from 'next/link'

export default function Header({...props}) {
  return (
    <header {...props} className={styles.header}>
      <Link className={styles.headerLink} href="./">Домой</Link>
      <Link className={styles.headerLink} href="./calculator">Калькулятор</Link>
      <Link className={styles.headerLink} href="./info">Инфо</Link>
      <Link className={styles.headerLink} href="./about">О нас</Link>
    </header>
  )
}
