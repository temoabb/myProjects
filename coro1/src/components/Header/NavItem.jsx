import React from 'react'
import styled from 'styled-components'

const StyledNavItem = styled.li`

  list-style-type: none;
  cursor: pointer;
  padding: 0px 20px;
  font-size: 16px;
  font-weight: 600;
  /* border: 1px solid tomato; */

  :hover {
    position: relative;
  }

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 4px;
    bottom: -5px;
    left: 0;
    background-color: orange;
    transform-origin: top bottom;
    transition: transform 0.3s ease-out;
  }
  :hover:before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const NavItem = ({ title }) => {
  return (
    <StyledNavItem>{title}</StyledNavItem>
  )
}

export default NavItem
