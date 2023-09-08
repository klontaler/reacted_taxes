import styles from './Block.module.css';

export default function Block({children, option ='classic', ...props}) {
  const isResult = option == 'result' && styles.resultBlock;
  return (
    <div {...props} className={styles.block + ' ' + isResult}>
      {children}
    </div>
  )
}
