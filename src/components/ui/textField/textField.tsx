import { ComponentPropsWithoutRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './textField.module.scss'
export type TextFieldProps = {
  className: string
  label: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, id, label, onChange }, forwardRef) => {
    const classNames = {
      root: clsx(s.root),
    }

    return (
      <div>
        <input />
        <button></button>
      </div>
    )
  }
)
