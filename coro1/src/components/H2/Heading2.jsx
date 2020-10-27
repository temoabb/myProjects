import React from 'react'
import styled from 'styled-components'


const StyledHeading2 = styled.h2`
  width: 1089px;
  height: 28px;
  font-size: 24px;
  font-family: sans-serif;
  margin: 0px 0px 25px;
  text-align: center;
  /* background: yellow; */
  /* border: 1px dashed blue;   */
 
`



const Heading2 = ({ description }) => {
  return (
    <StyledHeading2>
      {description}
    </StyledHeading2>
  )
}


export default Heading2