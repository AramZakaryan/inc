import Link from 'next/link'
import { useForm } from 'react-hook-form'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormCheckbox } from '@/components/form/form-checkbox'
import { FormInput } from '@/components/form/form-input'

const loginSchema = zod.object({
  email: zod.string().email('Please enter a valid email address'),
  password: zod.string().min(5, 'minimum 5 symbols please').max(20, 'maximum 20 symbols please'),
  rememberMe: zod.boolean(),
})

type LoginFields = zod.infer<typeof loginSchema>

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: { rememberMe: false },
  })
  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <>
      <div>
        <Link href={'/'}>go home</Link>
        <form onSubmit={onSubmit}>
          <FormInput
            id={'sss'}
            control={control}
            name={'email'}
            label={'Email'}
            errorMessage={errors.email?.message}
          />
          <FormInput
            control={control}
            name={'password'}
            label={'Password'}
            errorMessage={errors.password?.message}
            type={'password'}
          />
          <FormCheckbox
            control={control}
            name={'rememberMe'}
            label={
              <span>
                RememberMe{' '}
                <a href="#" style={{ textDecoration: 'underline', color: 'blue' }}>
                  some link
                </a>
              </span>
            }
          />
          <button type={'submit'}>Save</button>
        </form>
      </div>
    </>
  )
}
