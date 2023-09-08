import styles from './YellowBlock.module.css';

export default function YellowBlock({children, ...props}) {
  return (
    <div {...props} className={styles.yellowBlock}>
      {children}
    </div>
  )
}
