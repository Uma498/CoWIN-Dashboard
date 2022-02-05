import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #161625;
`
export const CowinDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  max-width: 1100px;
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

export const Logo = styled.img`
  height: 30px;
  width: 30px;
`
export const LogoHeading = styled.h1`
  color: #2cc6c6;
  font-size: 24px;
  margin-left: 12px;
  font-style: normal;
  font-family: 'Roboto';
  font-weight: bold;
  line-height: 1.5;
`

export const Heading = styled.h1`
  color: #cbd5e1;
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: bold;
  line-height: 1.5;
`

export const LoadingView = styled.div`
  display: flex;
  justify-content:center
  align-items: center;
  flex-grow:1; 
  `

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center
  align-items: center;
  `
export const FailureImage = styled.img`
  width: 50%;
  margin: 12px;
`
export const FailureText = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-family: 'Bree Serif';
  line-height: 1.5;
  text-align: center;
`
