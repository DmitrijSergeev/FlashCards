import { ComponentPropsWithoutRef, forwardRef } from 'react'

export type TextFieldProps = {
  className: string
  label: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, id, label, onChange }, forwardRef) => {
    return <div></div>
  }
)
