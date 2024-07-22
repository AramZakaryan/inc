import { Checkbox, CheckboxProps } from '@/components/checkbox/checkbox'
import { Control, FieldValues, useController, UseControllerProps } from 'react-hook-form'

type FormCheckboxProps<T extends FieldValues> = Omit<UseControllerProps<T>, 'control'> & {
  control: Control<T>
} & Omit<CheckboxProps, 'checked' | 'onCheckedChange'>

export const FormCheckbox = <T extends FieldValues>({
  control,
  name,
  disabled,
  shouldUnregister,
  ...restProps
}: FormCheckboxProps<T>) => {
  const {
    field: { value, onChange, ...rememberMeFieldRestProps },
  } = useController({ control, name, disabled, shouldUnregister })
  return (
    <Checkbox
      {...rememberMeFieldRestProps}
      checked={value}
      onCheckedChange={onChange}
      {...restProps}
    />
  )
}
