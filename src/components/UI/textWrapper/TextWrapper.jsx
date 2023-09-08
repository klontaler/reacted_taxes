import styles from './TextWrapper.module.css';

export default function TextWrapper({children, ...props}) {
  return (
    <div className={styles.textWrapper}>
      {children}
    </div>
  )
}
