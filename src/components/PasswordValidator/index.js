import {useState} from 'react'
import {
  MainContainer,
  Mini,
  Heading,
  Paragraph,
  Input,
  Warning,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const countPassword = event => {
    setPassword(event.target.value)
  }
  return (
    <MainContainer>
      <Mini>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input type="password" value={password} onChange={countPassword} />

        <Warning>
          {password.length < 8 && 'Your password must be at least 8 characters'}
        </Warning>
      </Mini>
    </MainContainer>
  )
}

export default PasswordValidator
