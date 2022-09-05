import { AuthenticationProvider } from 'contexts/authentication'
import { WaitingProvider } from 'contexts/waiting'
import { TeamProvider } from 'contexts/teamsContext'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '@fontsource/inter/900.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/400.css'
import 'react-activity/dist/Dots.css'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-activity/dist/Spinner.css'

import { firebaseConfig } from '../firebase/firebase'
import { getFirestore } from 'firebase/firestore'
import {
  FirebaseAppProvider,
  FirestoreProvider,
  AuthProvider,
  useFirebaseApp
} from 'reactfire'
import { getAuth } from 'firebase/auth'
import { app } from '../firebase/firebase'

const THEME = 'light'

const theme = {
  colors: {
    black: '#0c0a09',
    gray: '#7e7f83',
    cultured: '#f3f3f4',
    ruby: '#982649',
    red: '#f71735',
    white: '#ffffff',
    grayish: '#7B7B7B'
  }
}

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    max-width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
    font-family: Inter;
    font-style: normal;
    background-color: rgb(243,243,244);
    @media screen and (max-width: 800px) {
      width: 700px;
      margin: auto;
    }
  }

  th {
    display: flex;
    justify-content: flex-start;
    height: 45px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.1em;
    color: ${theme.colors.black};
    align-items: center;
  }

  tr {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, p {
    color: ${THEME === 'light' ? theme.colors.black : theme.colors.white};
    margin: 0;
    padding: 0;
  }

  h1 {
    font-style: italic;
    font-weight: bold;
    font-size: 48px;
    line-height: 58px;
  }

  h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
  }

  h3 {
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
  }

  h4 {
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
  }

  h5 {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  }
`

function FirebaseSDKProviders({ children }) {
  const firestore = getFirestore(app)
  const auth = getAuth(app)

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>{children}</FirestoreProvider>
    </AuthProvider>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <WaitingProvider>
          <TeamProvider>
            <AuthenticationProvider>
              <ThemeProvider theme={theme}>
                <FirebaseSDKProviders>
                  <Component {...pageProps} />
                </FirebaseSDKProviders>
              </ThemeProvider>
            </AuthenticationProvider>
          </TeamProvider>
        </WaitingProvider>
      </FirebaseAppProvider>
      <ToastContainer />
    </>
  )
}

export default MyApp
