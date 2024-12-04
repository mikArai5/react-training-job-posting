import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { BaseFlexBox, BaseInput, BaseButton } from '@/components/bases'
import httpClient from '@/libs/httpClient'

const LoginPage: FC = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })

  const idDisabled = loginInfo.email === '' || loginInfo.password === ''

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value

    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    await httpClient
      .post('/auth/login', loginInfo)
      .then((res) => {
        console.log(res)
        alert('ログインしました。')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <BaseFlexBox el="form" flexDirection="column" rowGap="3xl" onSubmit={handleSubmit}>
        <BaseInput type="email" name="email" value={loginInfo.email} onChange={handleChange} />
        <BaseInput
          type="password"
          name="password"
          value={loginInfo.password}
          onChange={handleChange}
        />
        <BaseButton disabled={idDisabled}>ログイン</BaseButton>
      </BaseFlexBox>
    </>
  )
}

export default LoginPage
