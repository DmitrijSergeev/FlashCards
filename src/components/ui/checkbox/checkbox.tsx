import Check from '@/assets/icons/check'
import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
  required?: boolean
}
export const Checkbox = ({
  checked,
  className,
  disabled,
  id,
  label,
  onChange,
  required,
}: CheckboxProps) => {
  const classNames = {
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
    container: clsx(s.container, className),
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
    root: s.root,
  }

  return (
    <div className={classNames.container}>
      <LabelRadix.Root asChild>
        <Typography as={'label'} className={classNames.label} variant={'body2'}>
          <div className={classNames.buttonWrapper}>
            <CheckboxRadix.Root
              checked={checked}
              className={classNames.root}
              disabled={disabled}
              id={id}
              onCheckedChange={onChange}
              required={required}
            >
              {checked && (
                <CheckboxRadix.Indicator className={classNames.indicator}>
                  <Check />
                </CheckboxRadix.Indicator>
              )}
            </CheckboxRadix.Root>
          </div>
          {label}
        </Typography>
      </LabelRadix.Root>
    </div>
  )
}
