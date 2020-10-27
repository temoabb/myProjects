import React from 'react'
import styled from 'styled-components'

import Content from './Content.jsx'
import Button from '../../components/Button/Button.jsx'
// import DesignedCard from '../../components/Cards/DesignedCard.jsx'
import Main from '../Home/Main.jsx'


const StyledDiv = styled.div`
  width: 100%;
  height: 400px;
  background-image:  linear-gradient(rgba(0, 0, 0, 0.9), rgba(100, 0, 0, 0.9)), url('https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/e0747190170311.5e0fc565b94c8.jpg');
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Description = styled.div`
  /* width: 100%; */
  /* border: 1px solid white; */
  font-size: 70px;
  color: white;
  margin: 0 0 30px;
`
const DescriptionButtons = styled.div`
  /* border: 1px solid white; */
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const Home = () => {
  return (
    <>
      <StyledDiv>
        <Description>The Design Talent Market</Description>
        <DescriptionButtons>
          <Button title="Post a job" />
          <Button title="Join as Talent" />
        </DescriptionButtons>
      </StyledDiv>
      <Content />
      <Main />
    </>
  )
}

export default Home