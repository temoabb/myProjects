import React from 'react'
import styled from 'styled-components'


const StyledBtnPosition = styled.button`
  font-size: 16px;
  color: #48D1A9;
  /* padding: 2px 10px 0 10px; */
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  background: none;
  /* margin-left: 10px; */
  color: #999;
  margin-top: 0;
  cursor: pointer;
`

const BtnPosition = ({ position }) => {
  return (
    <StyledBtnPosition>{position}</StyledBtnPosition>
  )
}


export default BtnPosition