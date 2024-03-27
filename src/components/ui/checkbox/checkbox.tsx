import Check from '@/assets/icons/check'
import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

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
    container: s.container,
    indicator: s.indicator,
  }

  return (
    <div className={classNames.container}>
      <LabelRadix.Root asChild>
        <CheckboxRadix.Root>
          <Typography as={'label'} variant={'body2'}>
            <div>
              <CheckboxRadix.Indicator className={classNames.indicator}>
                <Check />
              </CheckboxRadix.Indicator>
            </div>
          </Typography>
        </CheckboxRadix.Root>
      </LabelRadix.Root>
    </div>
  )
}
