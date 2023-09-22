'use client'

import styles from './page.module.css'
import TextCard from '@/components/UI/textCard/TextCard'
import { useState } from 'react'

export default function Info() {
  const [cardNumber, setCardNumber] = useState(1);
  const minfinQuoteURL = 'https://minfin.gov.ru/ru/press-center/?id_4=37437-nalogovaya_nagruzka_na_grazhdan_v_rossii_odna_iz_samykh_nizkikh_v_mire#:~:text=2021%2013%3A05-,%D0%9D%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BD%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%B3%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD%20%D0%B2%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8%20%D0%BE%D0%B4%D0%BD%D0%B0%20%D0%B8%D0%B7%20%D1%81%D0%B0%D0%BC%D1%8B%D1%85%20%D0%BD%D0%B8%D0%B7%D0%BA%D0%B8%D1%85,%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B0%D1%85%20%D1%8D%D1%82%D0%BE%D1%82%20%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%20%D0%B4%D0%BE%D1%81%D1%82%D0%B8%D0%B3%D0%B0%D0%B5%D1%82%2035%25.'
  
  function nextCard() {
    if (cardNumber < 3) {
      setCardNumber(cardNumber + 1)
    }
  }

  function previousCard() {
    if (cardNumber > 1) {
      setCardNumber(cardNumber - 1)
    }
  }

  if (cardNumber == 1) {
    return (
      <main>
        <TextCard
          title="Это текст для info страницы"
          nextFunc={nextCard}
          prevFunc={previousCard}
          prevDisable={true}
          nextDisable={false}
        >
          <h2 className={styles.h2} style={{margin: '32px auto 32px',}}>Я не буду писать здесь о том, что вы платите совсем немаленькие налоги, а результата на инфраструктуре от этого не видно что-то...</h2>
          <h2 className={styles.h2} style={{marginBottom: '32px',}}>Минфин РФ, допустим, пишет: <q className={styles.q} cite={minfinQuoteURL}>Налоговая нагрузка на граждан в России одна из самых низких в мире, при этом она практически не меняется и остаётся на одном уровне уже многие годы. </q></h2>
        </TextCard>
      </main>
    )
  
  } else if (cardNumber == 2) {
    return (
      <main>
        <TextCard
          title="Это все еще текст для info страницы"
          nextFunc={nextCard}
          prevFunc={previousCard}
          prevDisable={false}
          nextDisable={false}
        >
          <h2 className={styles.h2} style={{margin: '32px auto 32px',}}>Фактическая же налоговая нагрузка на физическое лицо равна примерно 56% и включает в себя НДФЛ, отчисления в различные фонды, НДС, акцизы, налог на имущество и транспортный налог.</h2>
          <h2 className={styles.h2} style={{marginBottom: '32px',}}>А налоговая нагрузка на ВВП России по состоянию на 2017 год составляла 57,7%, что больше чем в Норвегии, Китае, Южной Корее, Финляндии или Австрии.</h2>
        </TextCard>
      </main>
    )
  } else if (cardNumber == 3) {
    return (
      <main>
        <TextCard
          title="Это последний заголовок текста для info страницы"
          nextFunc={nextCard}
          prevFunc={previousCard}
          prevDisable={false}
          nextDisable={true}
        >
          <h2 className={styles.h2} style={{margin: '32px auto 32px',}}>Действительно ли такой уровень налогооблажения соответсвует затратам на различные сферы нашей жизни?</h2>
{
  //          <span className={styles.NO} style={{marginBottom: '32px',}}>Нет.</span>
}
        </TextCard>
      </main>
    )
  }
}