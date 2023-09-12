'use client';

import Block from '../block/Block'
import Button from '../button/Button'
import TextWrapper from '../textWrapper/TextWrapper';
import YellowBlock from '../yellowBlock/YellowBlock'
import styles from './TextCard.module.css'

export default function TextCard({children, title, nextFunc, prevFunc, nextDisable, prevDisable, option = 'classic', ...props}) {
  if (option = 'classic') {
    return (
      <Block {...props} margins={true} option='result'>
        <YellowBlock>
          <h1>{title}</h1>
        </YellowBlock>
        <TextWrapper inside="y">
          {children}
        </TextWrapper>
        <div className={styles.buttonWrapper}>
          <Button onClick={prevFunc} disabled={prevDisable}>Назад</Button>
          <Button onClick={nextFunc} disabled={nextDisable}>Далее</Button>
        </div>
      </Block>
    )
  } else if (option = 'lack_of_buttons') {
    return (
      <Block {...props} margins={true}>
        <YellowBlock>
          <h1>{title}</h1>
        </YellowBlock>
        {children}
      </Block>
    )
  }

}
