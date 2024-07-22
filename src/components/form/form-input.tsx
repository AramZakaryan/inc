import { Control, FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { Input, InputProps } from '@/components/input/input'

type FormInputProps<T extends FieldValues> = Omit<UseControllerProps<T>, 'control'> & {
  control: Control<T>
} & Omit<InputProps, 'value' | 'onChange'>

export const FormInput = <T extends FieldValues>({
  control,
  name,
  disabled,
  shouldUnregister,
  ...restProps
}: FormInputProps<T>) => {
  const { field } = useController({ control, name, disabled, shouldUnregister })
  return <Input {...field} {...restProps} />
}
