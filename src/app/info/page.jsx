import TextWrapper from '@/components/UI/textWrapper/TextWrapper'
import styles from './page.module.css'

export default function Info() {
  return (
    <main>
      <TextWrapper>
        <h1>Это текст для info страницы</h1>
        <h2 style={{margin: '16px 0 0'}}>я не буду писать здесь о том, что вы платите совсем немаленькие налоги, а результата на инфраструктуре от этого не видно что-то...</h2>
      </TextWrapper>
    </main>
  )
}