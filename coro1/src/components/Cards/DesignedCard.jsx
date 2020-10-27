import React from 'react'
import styled from 'styled-components'

const StyledDesignedCard = styled.div`
  width: 408.61px;
  height: 512px;
  color: #666666;
  background: #fff;
  /* border: 1px solid #f0f0f0; */
  border-radius: 4px;
  font-size: 12px;
  margin: 0px 0px 12.875px 0px;
  :hover {
    box-shadow: 2px 2px 5px black;
    transition: 600ms;
  }
  cursor: pointer;
  /* padding: 0px 20px; */
`


const StyledDesignerCardImageSlide = styled.div`
  width: 367px;
  height:280px;
  font-size: 12px;
  color: #363636;
  /* border: 1px solid #f0f0f0; */
`

const StyledDesignerCardImage = styled.img`
  width: 367px;
  height: 280px;
  padding: 0px 30px;
  /* border: 1px solid #f0f0f0;  */
`

const StyledDesignedCardWrapper = styled.div`
  width: 406px;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  height: 210px;
  color: #666;
  font-size: 12px;
  padding: 20px;
`

const StyledWrapperFIrstSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  /* border: 1px solid black; */
`

const StyledWrappedFirstSectionUserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`

const StyledCoroflotGoldenIcon = styled.span`
  background: #f9df5e;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  text-align: center;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 10%;
  /* border-start-start-radius: 15px; */
  left: -5px;
  bottom: -5px;
`

const StyledWrappedFirstSectionUserNameSurnameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const StyledWrappedFirstSectionUserNameSpan = styled.span`
  max-width: 100%;
  font-size: 16px;
  color: #363636;

`
const StyledWrappedFirstSectionUserNameHashtagSpan = styled.span`
  max-width: 100%;
  font-size: 15px;

`


const StyledWrapperSecondSection = styled.div`
  width: 100%;
  font-size: 14.4px;
  color: #404040;

`
const StyledWrapperSecondSectionUl = styled.ul`
  max-width: 100%;
  padding: 10px 0px 0px;
  list-style-type: none;
`
const StyledWrapperSecondSectionUlLi = styled.li`
  :before {
    content: "•";
    margin-right: 5px;
  }
`

const StyledWrapperThirdSection = styled.div`
  width: 100%;
`




const DesignedCard = ({ imgsrc, avatarimgsrc, username, hashtag, position, skillone, skilltwo }) => {
  return (
    <StyledDesignedCard>
      <StyledDesignerCardImageSlide>
        <StyledDesignerCardImage src={imgsrc} />
      </StyledDesignerCardImageSlide>
      <StyledDesignedCardWrapper>
        <StyledWrapperFIrstSection>
          <StyledWrappedFirstSectionUserImg src={avatarimgsrc} />
          <StyledCoroflotGoldenIcon>G</StyledCoroflotGoldenIcon>
          <StyledWrappedFirstSectionUserNameSurnameDiv>
            <StyledWrappedFirstSectionUserNameSpan>{username}</StyledWrappedFirstSectionUserNameSpan>
            <StyledWrappedFirstSectionUserNameHashtagSpan>{hashtag}</StyledWrappedFirstSectionUserNameHashtagSpan>
          </StyledWrappedFirstSectionUserNameSurnameDiv>
        </StyledWrapperFIrstSection>
        <StyledWrapperSecondSection>
          <StyledWrapperSecondSectionUl>{position}
            <StyledWrapperSecondSectionUlLi>{skillone}</StyledWrapperSecondSectionUlLi>
            <StyledWrapperSecondSectionUlLi>{skilltwo}</StyledWrapperSecondSectionUlLi>
          </StyledWrapperSecondSectionUl>
        </StyledWrapperSecondSection>
        <StyledWrapperThirdSection>fhfhdj</StyledWrapperThirdSection>
      </StyledDesignedCardWrapper>
    </StyledDesignedCard>
  )
}


export default DesignedCard