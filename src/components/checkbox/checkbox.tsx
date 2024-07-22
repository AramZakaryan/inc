import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import s from './styles.module.scss'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { useFinalId } from '@/hooks/useFinalId'

export type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxRadix.Root> & {
  label: ReactNode
}

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ className, id, label, ...restProps }, ref) => {
    const finalId = useFinalId(id)
    return (
      <div>
        <CheckboxRadix.Root
          className={clsx(className, s.CheckboxRoot)}
          {...restProps}
          ref={ref}
          id={finalId}
        >
          <CheckboxRadix.Indicator>
            <CheckIcon />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        <label htmlFor={finalId}>{label}</label>
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
