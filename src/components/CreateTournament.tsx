import { useState, useContext } from 'react'
import styled from 'styled-components'
import { Heading, Caption, Subtext, Entry, Input } from 'components/Forms'
import { useForm } from 'react-hook-form'
import { Column, Row, Circle } from 'components/common'
import AuthenticationContext from 'contexts/authentication'
import WaitingContext from 'contexts/waiting'
import Select from 'react-select'
import Image from 'next/image'
import Checkbox, { CheckboxProps } from 'components/Checkbox'
import { LoginButton } from './Buttons'
import GameTile from 'components/GameTile'
import moment from 'moment'

const FormContainer = styled.form`
  margin: auto;
`

const SubmitEntry = styled(Entry)`
  margin-top: 40px;
  height: 85px;
`

const ErrorMessage = styled.p`
  margin-top: 8px;
  color: ${(props) => props.theme.colors.red};
`

const SignupIfNotGotAnAccount = styled.div`
  display: flex;
  justify-content: center;
`

const ErrorMessageContainer = styled.div`
  color: ${(props) => props.theme.colors.red};
  line-height: 19px;
  font-size: 16px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`

const SmallInput = styled(Input)`
  width: 232px;
`

const DescriptionInput = styled.textarea`
  width: 589px;
  height: 201px;
  resize: none;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140.62%;
  color: ${(props) => props.theme.colors.black};
  padding-left: 25px;
  padding-top: 15px;
  line-height: 125%;
`

const DescriptionEntry = styled(Entry)`
  margin-right: 50px;
  margin-bottom: 50px;
  height: 232px;
`

const TournamentEntry = styled(Entry)`
  margin-right: 50px;
  margin-bottom: 50px;
  height: 91px;
`

const CheckboxRow = styled(Row)`
  width: 232px;
  padding-top: 8px;
  justify-content: space-between;
`

const ImageCircle = styled(Circle)`
  box-shadow: 0px 4px 8px 0px #0000000d;
`

const DateEntry = styled(TournamentEntry)`
  margin-right: 50px;
`

const DateInput = styled(Input)`
  width: 232px;
  padding-right: 15px;
`

const InputColumn = styled(Column)``

const CheckboxInput = styled(Checkbox)<CheckboxProps>``

const PrizeInput = styled(SmallInput)`
  background-image: url(eth.svg);
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 7%;
`
interface Tournament {
  region: string
  name: string
  description: string
  game: string
  time: number
  prize: number
  prize_currency: string
  users: string
  creator: string
  platform: string
}

export default function CreateTournament() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { user } = useContext(AuthenticationContext)
  const [errorMessage, setErrorMessage] = useState('')
  const [waiting, setWaiting] = useContext(WaitingContext)
  const onSubmit = async (data: Tournament) => {
    const creator = user
    const tournamentData = { ...data, creator: creator, users: '' }
    console.log('tournaent', tournamentData)
  }

  const regionOptions: { label: string; value: string }[] = [
    { label: 'international', value: 'international' },
    { label: 'Europe', value: 'Europe' },
    { label: 'North America', value: 'North America' },
    { label: 'Asia', value: 'Asia' },
    { label: 'Australia', value: 'Australia' }
  ]

  const getTimes = () => {
    const timeOptions: { label: string; value: string }[] = []
    const hours = Array.from(
      {
        length: 48
      },
      (_, hour) =>
        moment({
          hour: Math.floor(hour / 2),
          minutes: hour % 2 === 0 ? 0 : 30
        }).format('HH:mm')
    )

    for (var i = 0; i < hours.length; i++) {
      timeOptions.push({ label: hours[i], value: hours[i] })
    }
    return timeOptions
  }

  const gameOptions: { label: any; value: string }[] = [
    {
      label: <GameTile game={'cs-go'} caption={''} />,
      value: 'cs-go'
    },
    {
      label: <GameTile game={'rl'} caption={''} />,
      value: 'rl'
    },
    {
      label: <GameTile game={'cod'} caption={''} />,
      value: 'cod'
    },
    {
      label: <GameTile game={'mc'} caption={''} />,
      value: 'mc'
    },
    {
      label: <GameTile game={'dirt'} caption={''} />,
      value: 'dirt'
    }
  ]

  const regionStyles = {
    control: (styles, state) => ({
      ...styles,
      width: '232px',
      height: '60px',
      fontFamily: 'Inter',
      fontWeight: '500',
      fontStyle: 'normal',
      fontSize: '16px',
      border: state.isFocused ? '2px black solid' : 0,
      boxShadow: 0,
      paddingLeft: '15px',
      lineHeight: '140.62%',
      broderRadius: '5px',
      boxSizing: 'border-box',
      '&:hover': {
        ...styles[':hover'],
        border: state.isFocused ? '2px black solid' : 0
      }
    }),
    option: (styles) => {
      return {
        ...styles,
        width: '100%',
        height: '55px',
        alignItems: 'center',
        lineHeight: '40px',
        fontFamily: 'Inter',
        fontWeight: '500',
        color: (props) => props.theme.colors.black,
        backgroundColor: '#ffffff',
        ':hover': {
          ...styles[':hover'],
          backgroundColor: 'lightgray'
        }
      }
    }
  }

  const gameStyles = {
    control: (styles, state) => ({
      ...styles,
      width: '232px',
      height: '60px',
      fontFamily: 'Inter',
      fontWeight: '500',
      fontStyle: 'normal',
      fontSize: '16px',
      border: state.isFocused ? '2px black solid' : 0,
      boxShadow: 0,
      paddingLeft: '15px',
      lineHeight: '140.62%',
      broderRadius: '5px',
      boxSizing: 'border-box',
      '&:hover': {
        ...styles[':hover'],
        border: state.isFocused ? '2px black solid' : 0
      }
    }),
    option: (styles) => {
      return {
        ...styles,
        wdith: '211px',
        height: '296px'
      }
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Heading>Create Tournament</Heading>
      <Subtext>Create your own tournament on Premiere!</Subtext>
      <Row>
        <InputColumn>
          <TournamentEntry>
            <Caption>name</Caption>
            <Input required={true} {...register('name')} type={'text'} />
          </TournamentEntry>
          <DescriptionEntry>
            <Caption>description</Caption>
            <DescriptionInput required={true} {...register('description')} />
          </DescriptionEntry>
        </InputColumn>
        <InputColumn>
          <TournamentEntry>
            <Caption>region</Caption>
            <Select options={regionOptions} styles={regionStyles} />
          </TournamentEntry>
          <TournamentEntry>
            <Caption>time</Caption>
            <Select options={getTimes()} styles={regionStyles} />
          </TournamentEntry>
          <DateEntry>
            <Caption>date</Caption>
            <DateInput required={true} {...register('date')} type={'date'} />
          </DateEntry>
        </InputColumn>
        <InputColumn>
          <TournamentEntry>
            <Caption>game</Caption>
            <Select options={gameOptions} styles={gameStyles} />
          </TournamentEntry>
          <TournamentEntry>
            <Caption>prize</Caption>
            <PrizeInput required={true} {...register('prize')} type={'text'} />
          </TournamentEntry>
          <TournamentEntry>
            <Caption>Available on</Caption>
            <CheckboxRow>
              <ImageCircle>
                <Image src={'/laptop.svg'} width={20} height={20} alt={'pc'} />
              </ImageCircle>
              <CheckboxInput {...register('platform')} value={'pc'} />
              <ImageCircle>
                <Image src={'/xbox.svg'} width={20} height={20} alt={'xbox'} />
              </ImageCircle>
              <CheckboxInput {...register('platform')} value={'xbox'} />
              <ImageCircle>
                <Image src={'/ps.svg'} width={20} height={20} alt={'ps'} />
              </ImageCircle>
              <CheckboxInput {...register('platform')} value={'ps'} />
            </CheckboxRow>
          </TournamentEntry>
        </InputColumn>
      </Row>
      <SubmitEntry>
        <LoginButton type={'submit'} text={'log in'} disabled={false} />
      </SubmitEntry>
      {errorMessage && (
        <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
      )}
    </FormContainer>
  )
}
