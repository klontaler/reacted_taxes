import styles from './Button.module.css'

export default function Button({children, option = 'classic', ...props}) {
  const ifNext = option == 'next' && styles.nextButton;
  const ifPrev = option == 'prev' && styles.prevButton;
  const ifMargin = option == 'margin' && styles.marginButton
  
  return (
        <button {...props} className={styles.button + ' ' + ifNext + ' ' + ifPrev + ' ' + ifMargin}>
          {children}
        </button>
  )
}
