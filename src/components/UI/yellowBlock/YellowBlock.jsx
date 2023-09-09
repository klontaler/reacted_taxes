import styles from './YellowBlock.module.css';

export default function YellowBlock({children, option = 'classic', isLoading, ...props}) {
  const isClassic = option == 'classic' && styles.classic;
  const isHeading = option == 'heading' && styles.heading;
  const loadingOption = isLoading == true ? {width: 'auto',} : {};

  return (
    <div {...props} className={styles.yellowBlock + ' ' + isClassic + ' ' + isHeading} style={loadingOption}>
      <div className={styles.wrapper}>
        {children}
      </div>
    </div>
  )
}
