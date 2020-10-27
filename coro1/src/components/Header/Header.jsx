import React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'
import RightNavItem from './RightNav.jsx'
import Button from '../Button'


const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 66px;
  border-bottom: 1px solid grey;
  background-color: #fff;
  color: #363636;
`

const ColorfitLogo = styled.img`
    width: 157px;
    height: 30px;
    margin-left: 22px;
    cursor: pointer;
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  position: relative; 
  justify-content: space-between;
`

const StyledRightList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: row;
  align-items: center;
  margin-right: 22px;
  justify-content: space-between;
  padding-left: 0;
`
const Header = () => {
  return (
    <StyledHeader>
      <ColorfitLogo src='https://logos-download.com/wp-content/uploads/2018/09/Coroflot_Logo_text.png' alt="Coroflot__logo" />
      <StyledList>
        <NavItem title="Design Jobs" />
        <NavItem title="Designers" />
        <NavItem title="Projects" />
        <NavItem title="Salaries" />
      </StyledList>
      <StyledRightList>
        <RightNavItem rightTitle="Sign Up" />
        <RightNavItem rightTitle="Sign In" />
        <Button title="Post a Job" />
      </StyledRightList>

    </StyledHeader>
  )
}

export default Header