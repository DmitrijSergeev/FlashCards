import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'

export function App() {
  const [check, setCheck] = useState([{ id: 1, isDone: false, title: 'Hello' }])

  function changeStatus(id: number, isDone: boolean) {
    setCheck(check.map(t => (t.id === id ? { ...t, isDone } : t)))
  }

  return (
    <div>
      Hello
      <ul>
        {check.map(t => {
          const changeCheck = (isDone: boolean) => {
            changeStatus(t.id, isDone)
          }

          return (
            <li key={t.id}>
              {t.title}
              <Checkbox checked={t.isDone} onChange={changeCheck} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
