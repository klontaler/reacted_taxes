'use client';

import { useState } from 'react'

import styles from './page.module.css'

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

  function handleSalary(e) {
    setSalary(e.target.value / 77 * 100);
  }

  function calculate() {
    const calculatedExpenses = {
      whole: Math.round(salary * 1.3),
      ndfl: Math.round(salary * 0.13),
      funds: Math.round(salary * 0.30),
    }
    setExpenses(calculatedExpenses);
  }

  if (blockNum == 1) {
    return(
      <main>
        <div className={styles.block}>
          <div className={styles.yellowBlock}><h1 className={styles.h1}>Какая у вас заработная плата до вычета налогов?</h1></div>
          <h2 className={styles.h2}>Введите свою заработную плату, получаемую на руки:</h2>
          <input Inputmode="numeric" type="text" className={styles.input} placeholder="В рублях" onChange={handleSalary}/>
          <button className="nextButton" onClick={() => setBlockNum(2)} disabled={salary/salary != 1}>Далее</button>
        </div>
      </main>
    )
  } else if (blockNum == 2) {
    return (
      <main>
        <div className={styles.block}>
          <h1 id={styles.h1} className={styles.h1}>Это будет clarification block, но его пока нет...</h1>
          <h2 className={styles.h2} style={{marginBottom: '18px'}}>Скорее всего, я напишу его для того, чтобы уточнить по поводу налогов с покупок и тд</h2>
          <button className="nextButton" onClick={() => [setBlockNum(3), calculate()]}>Далее</button>
        </div>
      </main>
    )
  } else if (blockNum == 3) {
    return (
      <main>
        <div className={styles.block} id={styles.resultBlock}>
          <h1 id={styles.h1} className={styles.h1}>Это будет result block, но его пока тоже нет...</h1>
          <h2 className={styles.h2}>Для чего он существует вполне ясно и понятно</h2>
          <h2 className={styles.h2}>Всего работодатель тратит на вас: {expenses.whole}</h2>
          <h2 className={styles.h2}>Это включает в себя НДФЛ: {expenses.ndfl}</h2>
          <h2 className={styles.h2}>И взносы в различные фонды, в т.ч. и пенсионный: {expenses.funds}</h2>
          <h2 className={styles.h2} id={styles.resultMarginFix}>Для чего он существует вполне ясно и понятно</h2>

          <button className="prevButton" onClick={() => setBlockNum(1)}>В начало</button>
        </div>
      </main>
    )
  }

}
