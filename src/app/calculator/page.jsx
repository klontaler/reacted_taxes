'use client';

import { useState } from 'react'

import styles from './page.module.css'
import Button from '@/components/UI/button/Button';
import Input from '@/components/UI/input/Input';
import Block from '@/components/UI/block/Block';

export default function Calculator() {
  const [salary, setSalary] = useState();
  const [expenses, setExpenses] = useState(
    {
      whole: 0,
      ndfl: 0,
      funds: 0,
    }
  );

  const [blockNum, setBlockNum] = useState(1);
  
  const calculatedExpenses = {
    whole: 0,
    ndfl: 0,
    funds:0,
  }

  function handleSalary(e) {
    setSalary(e.target.value - 0);
  }

  function calculate() {
    if (salary / 75 * 1200 > 5000000) {
      calculatedExpenses.ndfl = Math.round(salary / 85 * 15);
    } else {
      calculatedExpenses.ndfl = Math.round(salary / 87 * 13)
    }

    calculatedExpenses.funds = Math.round(salary * 0.304)
    calculatedExpenses.whole = Math.round(salary + calculatedExpenses.ndfl + calculatedExpenses.funds);
    setExpenses(calculatedExpenses);
  }

  if (blockNum == 1) {
    return(
      <main>
        <Block>
          <div className={styles.yellowBlock}><h1 className={styles.h1}>Какая у вас заработная плата до вычета налогов?</h1></div>
          <h2 className={styles.h2}>Введите свою заработную плату, получаемую на руки:</h2>
          <Input Inputmode="numeric" type="text" placeholder="В рублях" onChange={handleSalary} style={{margin: '16px auto 16px',}}/>
          <Button option="next" onClick={() => setBlockNum(2)} disabled={salary/salary != 1 || salary <= 0}>Далее</Button>
        </Block>
      </main>
    )
  } else if (blockNum == 2) {
    return (
      <main>
        <Block>
          <h1 id={styles.h1} className={styles.h1}>Это будет clarification block, но его пока нет...</h1>
          <h2 className={styles.h2} style={{marginBottom: '18px'}}>Скорее всего, я напишу его для того, чтобы уточнить по поводу налогов с покупок и тд</h2>
          <Button option="next" onClick={() => [setBlockNum(3), calculate()]}>Далее</Button>
        </Block>
      </main>
    )
  } else if (blockNum == 3) {
    return (
      <main>
        <Block id="resultBlock">
          <h1 id={styles.h1} className={styles.h1}>Это будет result block, но его пока тоже нет...</h1>
          <h2 className={styles.h2}>Для чего он существует вполне ясно и понятно</h2>
          <h2 className={styles.h2}>Всего работодатель тратит на вас: {expenses.whole}</h2>
          <h2 className={styles.h2}>Это включает в себя НДФЛ: {expenses.ndfl}</h2>
          <h2 className={styles.h2}>И взносы в различные фонды, в т.ч. и пенсионный: {expenses.funds}</h2>
          <h2 className={styles.h2} id={styles.resultMarginFix}>Для чего он существует вполне ясно и понятно</h2>
          <Button option='prev' onClick={() => setBlockNum(1)}>В начало</Button>
        </Block>
      </main>
    )
  }

}
