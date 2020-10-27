import React from 'react'
import styled from 'styled-components'
import DesignedCard from '../../components/Cards/DesignedCard.jsx'



const StyledMain = styled.div`
  width: 100%;
  /* border: 2px solid brown; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #fff;;
  padding: 10px 10px;
  /* border: 1px solid black; */
  /* align-items: center; */

`
// https://i.ya-webdesign.com/images/icon-email-png-7.png
// https://cdn.onlinewebfonts.com/svg/img_432566.png

const mainArr = [
  {
    imgsrc: "https://s3images.coroflot.com/user_files/individual_files/large_311617_plkjmdzbizylzwccaskblkytj.png",
    avatarimgsrc: "https://s3images.coroflot.com/user_files/individual_files/avatars/avatar_887670_uciuqjuhwposjhdeiubczbf_w.png",
    username: "Daniel Rutkowski",
    hashtag: "@danrutkowski",
    position: "Exhibit Designer / Enterpreneur",
    skillone: "3D modelling +3 more skills",
    skilltwo: "Consumer Electronics +5 more industries"
  },
  {
    imgsrc: "https://s3images.coroflot.com/user_files/individual_files/large_280523_zgvpxokkptxzaauzemkmbc5my.jpg",
    avatarimgsrc: "https://s3images.coroflot.com/user_files/individual_files/avatars/avatar_230253_rp4mhnr7ckfqsdlidewgotsay.jpg",
    username: "Daniel Rutkowski",
    hashtag: "@danrutkowski",
    position: "Exhibit Designer / Enterpreneur",
    skillone: "3D modelling +3 more skills",
    skilltwo: "Consumer Electronics +5 more industries"
  },
  {
    imgsrc: "https://s3images.coroflot.com/user_files/individual_files/large_280523_sig5mhvc5lgcxtshvgtotxqfs.jpg",
    avatarimgsrc: "https://s3images.coroflot.com/user_files/individual_files/avatars/avatar_903497_bzl8pwu_thmbkdzt5zkvsezbv.jpeg",
    username: "Daniel Rutkowski",
    hashtag: "@danrutkowski",
    position: "Exhibit Designer / Enterpreneur",
    skillone: "3D modelling +3 more skills",
    skilltwo: "Consumer Electronics +5 more industries"
  },
  {
    imgsrc: "https://s3images.coroflot.com/user_files/individual_files/large_230253_qwrkiyuhxyje3nc_sqsgwvuhn.jpg",
    avatarimgsrc: "https://s3images.coroflot.com/user_files/individual_files/avatars/avatar_128112_sefhcjzirkal74zdnc90vqunx.jpg",
    username: "Daniel Rutkowski",
    hashtag: "@danrutkowski",
    position: "Exhibit Designer / Enterpreneur",
    skillone: "3D modelling +3 more skills",
    skilltwo: "Consumer Electronics +5 more industries"
  },
  {
    imgsrc: "https://s3images.coroflot.com/user_files/individual_files/large_507055_u9_trnihmb4swccwkcwn80r_w.jpg",
    avatarimgsrc: "https://s3images.coroflot.com/user_files/individual_files/avatars/avatar_280523_kicfas5nkjotusox49cpzgqko.jpg",
    username: "Daniel Rutkowski",
    hashtag: "@danrutkowski",
    position: "Exhibit Designer / Enterpreneur",
    skillone: "3D modelling +3 more skills",
    skilltwo: "Consumer Electronics +5 more industries"
  },
  {
    imgsrc: "https://s3images.coroflot.com/user_files/individual_files/large_507055_igllm2kjytmljdld4snblhizf.jpg",
    avatarimgsrc: "https://s3images.coroflot.com/user_files/individual_files/avatars/avatar_36208_ozhdd4bophcnbzi2xxx8h3ugt.jpg",
    username: "Daniel Rutkowski",
    hashtag: "@danrutkowski",
    position: "Exhibit Designer / Enterpreneur",
    skillone: "3D modelling +3 more skills",
    skilltwo: "Consumer Electronics +5 more industries"
  }

]


const Main = () => {
  return (
    <StyledMain>
      {mainArr.map(item => (
        <DesignedCard
          imgsrc={item.imgsrc}
          avatarimgsrc={item.avatarimgsrc}
          username={item.username}
          hashtag={item.hashtag}
          position={item.position}
          skillone={item.skillone}
          skilltwo={item.skilltwo}
        />
      ))}
    </StyledMain>
  )
}


export default Main