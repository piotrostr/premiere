import styled from 'styled-components'
import { Column as _Column } from 'components/common'
import Image from 'next/image'


const Column = styled(_Column)`
  min-width: 80px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const Footer = styled.footer`
  min-height: 380px;
  width: 100%;
  background: #2B2B2B;
  bottom: 0;
  left: 0;
  padding-top: 68px;
`

const Container = styled(Row)`
  width: min(60%, 864px);
  margin: auto;
  justify-content: space-between;
`

const FooterLogo = styled.div`
  font-family: Inter;
  font-style: italic;
  font-weight: 900;
  font-size: 27px;
  line-height: 140.62%;
  letter-spacing: 0.2em;
  color: #FFFFFF;
  margin-bottom: 14px;
  user-select: none;
`

const Heading = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 140.62%;
  color: #FFFFFF;
  margin-bottom: 22px;
`

const Text = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140.62%;
  color: #FFFFFF;
  margin-bottom: 8px;
`

function FooterDivider() {
  return <Image src={'/footer_divider.svg'} width={5} height={310} />
}

export default function _Footer() {
  // carry over the same properties with max-width and stuff from socials section, match the socials section
  return (
    <Footer>
      <Container>
        <Column>
          <FooterLogo>PREMIERE</FooterLogo>
          <Text style={{ width: 370 }}>
            This is where some text will go about Premiere. This is where some
            text will go about Premiere. This is where some text will go about
            Premiere. This is where some text will go about Premiere.
          </Text>
          <br />
          <Text>
            Premiere © 2021
          </Text>
        </Column>
        <div />
        <Row>
          <Column style={{ marginLeft: 40}}>
            <Heading>
              Explore
            </Heading>
            <Text>
              Games
            </Text>
            <Text>
              Touranments
            </Text>
            <Text>
              Leaderboards
            </Text>
            <Text>
              Support
            </Text>
            <Text>
              Premiere Stream
            </Text>
          </Column>
          <Column style={{ marginLeft: 40 }}>
            <Heading>
              Useful links
            </Heading> 
            <Text>
              Login
            </Text>
            <Text>
              Dashboard
            </Text>
            <Text>
              Privacy -- Terms
            </Text>
          </Column>
        </Row>
      </Container>
    </Footer>
  )
}