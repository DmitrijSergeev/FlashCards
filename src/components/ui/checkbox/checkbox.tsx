import { forwardRef } from 'react'

import Check from '@/assets/icons/check'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

type CheckboxProps = {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, onCheckedChange }, forwardRef) => {
    return (
      <div>
        <RadixCheckbox.Root>
          <RadixCheckbox.Indicator>
            <Check />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
      </div>
    )
  }
)
