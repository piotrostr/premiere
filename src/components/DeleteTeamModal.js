import Modal from 'react-modal'
import styled from 'styled-components'
import { Button as BaseButton } from 'components/Buttons'
import { Center, Column, Row } from './common'
import { deleteTeam } from '../firebase/teams'

const Button = styled(BaseButton)`
  margin-bottom: 49px;
  margin-left: 16px;
  margin-right: 16px;
  width: 192px;
  height: 50px;
`

const Cancel = styled(Button)`
  background: linear-gradient(266.89deg, #982649 -18.13%, #f71735 120.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 1px ${(props) => props.theme.colors.ruby} solid;
  width: 178px;
  &:hover {
    -webkit-background-clip: initial;
    -webkit-text-fill-color: initial;
    border: initial;
  }
`

const Question = styled.div`
  font-size: 26px;
  line-height: 31.5px;
  font-weight: 600;
  color: #0c0a09;
  margin-top: 54px;
  margin-bottom: 41px;
`

const SpaceBetween = styled(Row)`
  justify-content: center;
`

export default function DeleteTeamModal({ isOpen, setOpen, teamId }) {
  const deleteTeamHandler = async (teamId) => {
    await deleteTeam(teamId)
  }

  const style = {
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 674,
      height: 205,
      margin: 'auto',
      borderRadius: 15,
      boxShadow: '0px 8px 50px 2px #00000040',
      zIndex: 500
    }
  }
  return (
    <Modal
      isOpen={teamId === isOpen ? true : false}
      onRequestClose={() => setOpen(false)}
      style={style}
      ariaHideApp={false}
    >
      <Column>
        <Question>Are you sure you want to delete this team?</Question>
        <SpaceBetween>
          <Cancel onClick={() => setOpen(false)}>no, cancel</Cancel>
          <Button
            onClick={() => {
              deleteTeamHandler(teamId)
              setOpen(false)
            }}
          >
            yes, delete it
          </Button>
        </SpaceBetween>
      </Column>
    </Modal>
  )
}
