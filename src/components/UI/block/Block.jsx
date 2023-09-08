import styles from './Block.module.css';

export default function Block({children, ...props}) {
  return (
    <div className={styles.block}>
      {children}
    </div>
  )
}
