import { useForm } from 'react-hook-form'
import Input from 'components/Input'
import Layout from 'components/layouts/login'
import Button from 'components/Button'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <Layout className="flex justify-center items-center">
      <div className="w-96">
        <div className="flex justify-between items-end my-8">
          <p className="text-24 text-black font-black">Log in</p>
          <p className="text-black-100 text-12">
            or
            <a className="text-primary-400 ml-1" role="button">
              Create an account
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('email', { required: true })}
            label="Email"
            id="email"
            type="text"
            errors={errors}
            message="Email is invalid. Try again."
          />
          <Input
            {...register('password', { required: true })}
            label="Password"
            id="password"
            type="password"
            errors={errors}
          />
          <div className="my-8">
            <Button type="submit" onClick={() => null} block variant="fill">
              Log in
            </Button>
          </div>
        </form>
        <p className="text-black-100 text-12 text-center">
          <a className="text-primary-400">Forgot your password?</a>
        </p>
      </div>
    </Layout>
  )
}

export default Login
