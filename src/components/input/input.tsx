import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'
import clsx from 'clsx'

export type InputProps = ComponentPropsWithoutRef<'input'> & {
  label?: string
  errorMessage?: string
}

export const Input = forwardRef<ElementRef<'input'>, InputProps>(
  ({ id, className, label, errorMessage, ...restProps }, ref) => {
    const generatedId = useId()
    const finalId = id || generatedId
    return (
      <div>
        {label && <label htmlFor={finalId}>{label}</label>}
        <input
          id={finalId}
          className={clsx(className, 'customInput')}
          {...restProps}
          ref={ref}
        ></input>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
