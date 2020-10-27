import React from 'react'
import styled from 'styled-components'
import BtnNew from '../Button/ButtonNew.jsx'
import BtnPosition from '../Button/ButtonPosition.jsx'

const StyledCard = styled.div`
  width: 629px;
  height: 242px;
  color: #363636;
  background: #ffffff;
  margin: 0px 0px 20px 5px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* border: 1px dashed black; */
  :hover {
    box-shadow: 1px 2px 2px grey;
    transition: 300ms;
  }
`

const StyledCardImage = styled.img`
  width: 200px;
  height: 176px;
  cursor: pointer;
`

const StyledCardFirstDiv = styled.div`
  max-width: 300px;
  max-height: 200px;
  /* display: flex;
  flex-direction: column; */
  /* border: 1px solid brown; */
  height: 100%;
  cursor: pointer;

`

const StyledCardFirstDivFirstSpan = styled.span`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;


`


const StyledCardSecondDiv = styled.div`
  max-width: 100px;
  max-height: 200px;
  border: 1px dashed indigo;
  cursor: pointer;
 
`




const Card = ({ ImgSrc, job, university, address, ImportedPosition }) => {
  return (
    <StyledCard>
      <StyledCardImage src={ImgSrc} />

      <StyledCardFirstDiv>
        <StyledCardFirstDivFirstSpan>
          {job}
          <BtnPosition position={ImportedPosition} />
          {university}
          {address}
        </StyledCardFirstDivFirstSpan>
      </StyledCardFirstDiv>

      <StyledCardSecondDiv>
        <BtnNew />
      </StyledCardSecondDiv>
    </StyledCard>
  )
}


export default Card


