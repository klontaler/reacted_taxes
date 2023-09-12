import styles from './TextWrapper.module.css';

export default function TextWrapper({children, inside, ...props}) {
  const isInside = inside ='y' ? styles.inside : styles.usual;

  return (
    <div {...props} className={styles.textWrapper + ' ' + isInside}>
      {children}
    </div>
  )
}
