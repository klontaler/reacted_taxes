import styles from './Block.module.css';

export default function Block({children, option ='classic', margins, height400, ...props}) {
  const isResult = option == 'result' && styles.resultBlock;
  const isMargin = margins == true && styles.margin;
  const isHeight400 = height400 == true && styles.height400;
  
  return (
    <div {...props} className={styles.block + ' ' + isResult + ' ' + isMargin + ' ' + isHeight400}>
      {children}
    </div>
  )
}
