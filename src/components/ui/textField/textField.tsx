import { ComponentPropsWithoutRef } from 'react'

export type TextFieldProps = {
  className: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = (props: TextFieldProps) => {
  const {} = props

  return <div></div>
}
