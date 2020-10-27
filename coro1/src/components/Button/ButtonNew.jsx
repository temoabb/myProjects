import React from 'react'
import styled from 'styled-components'


const StyledBtnNew = styled.button`
  font-size: 14px;
  color: #48D1A9;
  padding: 0px 5px;
  border: 1px solid #48d1a9;
  border-radius: 3px;
  background: none;
  cursor: pointer;
`

const BtnNew = () => {
  return (
    <StyledBtnNew>New</StyledBtnNew>
  )
}


export default BtnNew