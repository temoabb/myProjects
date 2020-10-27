import React from 'react'
import styled from 'styled-components'
import Heading2 from '../../components/H2/Heading2.jsx'
import Card from '../../components/Cards/Card.jsx'

const ContentContainer = styled.div`
  background: #f0f0f0;
  margin-top: 30px;
  padding: 0px 30px;
  /* height: 200vh; */
  /* box-sizing: border-box; */
  width: 100%;
  /* border: 1px solid black; */

`

const Div__for__h2 = styled.div`
  
  display: flex;
  /* border: 3px dashed indigo; */

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 93px;
  padding: 35px 100px 5px;
`

const Styled__container__for__cards = styled.div`
  display: flex;
  background: white;
  flex-direction: row;
  flex-wrap: wrap;
  /* border: 1px solid green; */
  width: 100%;
  justify-content: space-around;
`



const arr = [
  {
    ImgSrc: "https://s3images.coroflot.com/user_files/job_logos/149714_w38pl5hz6gnukwdvxydvpimms.png",
    job: "Visiting Assistant Teching Professor dsfdsdsfdssdfdsfdsfdsfsdfds",
    ImportedPosition: "Junior",
    university: "University of Notre Dame",
    address: "Notre Dame In"
  },
  {
    ImgSrc: "https://s3images.coroflot.com/user_files/job_logos/149714_w38pl5hz6gnukwdvxydvpimms.png",
    job: "Visiting Assistant Teching Professor dsfdsdsfdssdfdsfdsfdsfsdfds",
    ImportedPosition: "Junior",
    university: "University of Notre Dame",
    address: "Notre Dame In"
  },
  {
    ImgSrc: "https://s3images.coroflot.com/user_files/job_logos/149714_w38pl5hz6gnukwdvxydvpimms.png",
    job: "Visiting Assistant Teching Professor dsfdsdsfdssdfdsfdsfdsfsdfds",
    ImportedPosition: "Junior",
    university: "University of Notre Dame",
    address: "Notre Dame In"
  },
  {
    ImgSrc: "https://s3images.coroflot.com/user_files/job_logos/149714_w38pl5hz6gnukwdvxydvpimms.png",
    job: "Visiting Assistant Teching Professor dsfdsdsfdssdfdsfdsfdsfsdfds",
    ImportedPosition: "Junior",
    university: "University of Notre Dame",
    address: "Notre Dame In"
  },
  {
    ImgSrc: "https://s3images.coroflot.com/user_files/job_logos/149714_w38pl5hz6gnukwdvxydvpimms.png",
    job: "Visiting Assistant Teching Professor dsfdsdsfdssdfdsfdsfdsfsdfds",
    ImportedPosition: "Junior",
    university: "University of Notre Dame",
    address: "Notre Dame In"
  },
  {
    ImgSrc: "https://s3images.coroflot.com/user_files/job_logos/149714_w38pl5hz6gnukwdvxydvpimms.png",
    job: "Visiting Assistant Teching Professor dsfdsdsfdssdfdsfdsfdsfsdfds",
    ImportedPosition: "Junior",
    university: "University of Notre Dame",
    address: "Notre Dame In"
  },
]


const Content = () => {
  return (
    <ContentContainer>
      <Div__for__h2>
        <Heading2 description="Most Redcent Design Jobs" />
      </Div__for__h2>
      <Styled__container__for__cards>
        {arr.map(item => (
          <Card
            ImgSrc={item.ImgSrc}
            job={item.job}
            ImportedPosition={item.ImportedPosition}
            university={item.university}
            address={item.address}
          />
        ))}
      </Styled__container__for__cards>
    </ContentContainer>
  )
}


export default Content