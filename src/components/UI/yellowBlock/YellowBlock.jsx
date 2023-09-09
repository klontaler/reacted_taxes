import styles from './YellowBlock.module.css';

export default function YellowBlock({children, option = 'classic', ...props}) {
  const isHeading = option == 'heading' && styles.heading;
  return (
    <div {...props} className={styles.yellowBlock + ' ' + isHeading}>
      {children}
    </div>
  )
}
