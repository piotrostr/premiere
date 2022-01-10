import { Row, GradientText, Column } from 'components/common'
import {
  Heading,
  Caption,
  Subtext,
  Entry,
  Input,
  SmallInput
} from 'components/Forms'
import styled from 'styled-components'
import Link from 'next/link'
// TODO use this when isLoading is there
// import { Dots } from 'react-activity'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const DateInput = styled(SmallInput)`
  padding-right: 15px;
`

const RowEntry = styled(Row)`
  height: 130px;
  width: 589px;
  margin: auto;
`

const ColumnEntry = styled(Column)``

const Alert = styled.div`
  line-height: 17px;
  font-size: 12px;
  font-weight: 400;
  color: #ec9ba6;
  margin-top: 10px;
`

const SubmitEntry = styled(Entry)`
  margin-top: 40px;
  height: 85px;
`

const LoginIfGotAnAccount = styled.div`
  display: flex;
  justify-content: center;
`

const Form = styled.form``

export default function Signup() {
  const passwordValidation =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  const passwordMessage =
    'Password should contain at least one ' +
    'capital letter, one special character and one number'

  const matchValidation = password => password == formik.values.password

  const ageValidation = dateOfBirth => {
    const date18YrsAgo = new Date()
    date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18)
    return dateOfBirth <= date18YrsAgo
  }

  const over18 = 'You have to be over 18 years old'

  const noMatch = 'Passwords do not match'

  const formik = useFormik({
    initialValues: {
      username: '',
      birthDate: '',
      email: '',
      password: ''
    },

    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      birthDate: Yup.date()
        .required('Birthdate is required')
        .test('isAdult', over18, value => ageValidation(value)),
      email: Yup.string()
        .email('Email is not valid')
        .required('Email is required'),
      password: Yup.string()
        .required('No password provided')
        .min(8, 'Password is too short - should be minimum of 8 characters')
        .matches(passwordValidation, passwordMessage),
      confirmPassword: Yup.string()
        .required()
        .test('confirmPassword', noMatch, value => matchValidation(value))
    }),

    onSubmit: values => {
      console.log(values)
      console.log(formik.errors)
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Heading>sign up</Heading>
      <Subtext>Premiere is only available to users that are 18+</Subtext>
      <RowEntry>
        <Entry>
          <Caption>username</Caption>
          <SmallInput
            id="username"
            type="text"
            name="username"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <Alert>{formik.errors.username}</Alert>
          ) : null}
        </Entry>
        <Entry style={{ marginLeft: 65 }}>
          <Caption>date of birth</Caption>
          <DateInput
            id="birthDate"
            type="date"
            name="birthDate"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.birthDate}
          />
          {formik.touched.birthDate && formik.errors.birthDate ? (
            <Alert>{formik.errors.birthDate}</Alert>
          ) : null}
        </Entry>
      </RowEntry>
      <ColumnEntry>
        <Entry>
          <Caption>email address</Caption>
          <Input
            id="emai"
            type="email"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Alert>{formik.errors.email}</Alert>
          ) : null}
        </Entry>
        <Entry>
          <Caption>password</Caption>
          <Input
            id="password"
            type="password"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <Alert>{formik.errors.password}</Alert>
          ) : null}
        </Entry>
        <Entry>
          <Caption>confirm password</Caption>
          <Input
            id="confirmPassowrd"
            type="password"
            name="confirmPassword"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <Alert>{formik.errors.confirmPassword}</Alert>
          ) : null}
        </Entry>
        <SubmitEntry type="submit">Submit</SubmitEntry>
        <LoginIfGotAnAccount>
          Already have an account?
          <GradientText style={{ display: 'inline', marginLeft: 5 }}>
            <Link href="/login">Log In</Link>
          </GradientText>
        </LoginIfGotAnAccount>
      </ColumnEntry>
    </Form>
  )
}
