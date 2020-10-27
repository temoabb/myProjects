import React from 'react'
import styled from 'styled-components'

const StyledRightNav = styled.li`
  cursor: pointer;
  font-weight: 600;
  /* border: 1px solid green; */
  padding: 0 30px;
`

const RightNavItem = ({ rightTitle }) => {
  return (
    <StyledRightNav>{rightTitle}</StyledRightNav>
  )
}

export default RightNavItem