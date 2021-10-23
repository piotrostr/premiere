import styled from 'styled-components'
import { Column, Container, Row} from './common'
import Image from 'next/image'
import SmallTournament from './Tournament'
import { ArrowButton } from 'components/Buttons'

const HomeContainer = styled(Container)``

const YourWeeklyStats = styled.div`
  margin-top: 79px;
  margin-bottom: 55px;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`

const StatsRow = styled(Row)`
  marign-top: 35px;
  justify-content: space-between;
  width: 758px;
`

const GrayText = styled.div`
  font-style: Regular;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.gray};
  letter-spacing: 0.1em;
  font-weight: 400;
  text-transform: uppercase;
` 

const Numbers = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin-top: 6px;
`

const GreyTextColumn = styled(Column)``

const TopFriends = styled.div`
  margin-top: 84px;
  margin-bottom: 55px;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`

const FriendsRow = styled(Row)`
  margin-top: 43px;
`

const FriendColumn = styled(Column)`
  margin-right: 43px;
`

const FriendName = styled.div`
  margin-top: 15px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`

const RecommendedEvents = styled.div`
  text-transform: uppercase;
  margin-top: 84px;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 43px;
`

const TournamentsColumn = styled(Column)``

export default function Teams() {

  const friends = [
    {
      name: 'devonhenry_',
      image: 'devonhenry_',
    },
    {
      name: 'devonhenry_',
      image: 'devonhenry_',
    },
    {
      name: 'devonhenry_',
      image: 'devonhenry_',
    },
    {
      name: 'devonhenry_',
      image: 'devonhenry_',
    },
    {
      name: 'devonhenry_',
      image: 'devonhenry_',
    },
  ]

  const tournament = {
    game: 'csgo',
    region: 'USA + Europe',
    title: '5v5 | Search & Destroy | FACEIT',
    date: '24/08/2021',
    time: '9:15pm',
    prize: '$1,250',
  }

  const tournaments = [tournament, tournament] 

  return (
      <HomeContainer>
        <YourWeeklyStats>Your Weekly Statisctics</YourWeeklyStats>
        <StatsRow>
          <GreyTextColumn>
            <GrayText>events played</GrayText>
            <Numbers>101</Numbers>
          </GreyTextColumn>
          <GreyTextColumn>
            <GrayText>wins</GrayText>
            <Numbers>98</Numbers>
          </GreyTextColumn>
          <GreyTextColumn>
            <GrayText>losses</GrayText>
            <Numbers>3</Numbers>
          </GreyTextColumn>
          <GreyTextColumn>
            <GrayText>$prem earned</GrayText>
            <Numbers>2310994</Numbers>
          </GreyTextColumn>
          <GreyTextColumn>
            <GrayText>usd earned</GrayText>
            <Numbers>$4,301</Numbers>
          </GreyTextColumn>
        </StatsRow>
        <div style={{ marginTop: 46, fontSize: 15}}>
          <ArrowButton text={'event history'}/>
        </div>
        <TopFriends>Top friends</TopFriends>  
        <FriendsRow>
          {
            friends.map((friend, key) => 
              <FriendColumn key={key}>
                <Image
                  src={`/${friend.image}.svg`} 
                  width={89.74} 
                  height={89.74} 
                  alt={'friend-image'} 
                />
                <FriendName>{friend.name}</FriendName>
              </FriendColumn>
            )
          }
        </FriendsRow>
        <div style={{ marginTop: 46, fontSize: 15}}>
          <ArrowButton text={'view all friends'}/>
        </div>
        <TournamentsColumn>
          <RecommendedEvents>Recommended Events</RecommendedEvents>
          <Row>
            {tournaments.map((tournament, key) => (
              <SmallTournament tournament={tournament} key={key}/>
            ))}
          </Row>
        </TournamentsColumn>
        <div style={{ fontSize: 15}}>
          <ArrowButton text={'view all events'}/>
        </div>
      </HomeContainer>
  )
}
