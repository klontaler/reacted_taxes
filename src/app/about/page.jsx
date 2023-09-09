import TextWrapper from '@/components/UI/textWrapper/TextWrapper'
import styles from './page.module.css'
import YellowBlock from '@/components/UI/yellowBlock/YellowBlock'

export default function Calculator() {
  return (
    <main>
      <TextWrapper>
        <YellowBlock option='heading'>
        <h1>Это about page для сайтика</h1>
        </YellowBlock>
        <h2 style={{margin: '20px auto 0'}}>Данный сайт был написан только в качестве пет-проекта и не преследует цели кого-либо оскорбить, что-либо дискредитировать и тд. У автора вообще лапки.</h2>
      </TextWrapper>
    </main>
  )
}
