import styles from './Header.module.css';
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.headerLink} href='./'>Home</Link>
      <Link className={styles.headerLink} href='./calculator'>Calculator</Link>
      <Link className={styles.headerLink} href='./info'>Info</Link>
      <Link className={styles.headerLink} href='./about'>About</Link>
    </header>
  )
}
