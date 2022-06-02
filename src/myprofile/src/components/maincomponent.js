import React, { useState } from "react";
import styled from "styled-components";
import { MdVerified, MdOutlineHome } from "react-icons/md";
import { saveAs } from 'file-saver'
import Resume from '../assets/Resume_PoovannaPK.docx'
import Mybio from "./mybio";
import Myskills from "./myskills";

function maincomponent() {

    const handleDownload = () => {
      saveAs(Resume, "Resume_PoovannaPK.docx");
    }
    
  return (
    <MainContentContainer>
      <HomeButton>
        <MdOutlineHome style={{marginTop:'3px'}}/>Home
      </HomeButton>
      <MainTitle>
        Profile<MdVerified style={{color:"green",paddingTop:"5px"}}/>
      </MainTitle>
      <BioContainer>
      <Mybio />
      <button
          onClick={() => {handleDownload()}}
            style={{
              border: "none",
              backgroundColor: "#a53b11",
              color: "white",
              fontWeight: "600",
              fontSize: "20px",
              paddingRight: "10px",
              paddingTop: "5px",
              paddingBottom: "5px",
              borderRadius: "0.3rem",
              cursor: "pointer",
              margin: "1.5rem 0 0 0",
            }}
          >
            Download CV
          </button>
      </BioContainer>
      <MyskillText>
          My Skills
        </MyskillText>
      <MyskillContainer>
        <Myskills 
        skillname="HTML"
        percent="7"
        version="HTML5"
        />
         <Myskills 
        skillname="CSS"
        percent="7"
        />
         <Myskills 
        skillname="JAVASCRIPT"
        percent="5.5"
        />
         <Myskills 
        skillname="REACT JS"
        percent="5.5"
        />
      </MyskillContainer>
      <MyskillContainer2>
        <Myskills 
        skillname="NODE JS"
        percent="3"
        version="HTML5"
        />
         <Myskills 
        skillname="WORDPRESS"
        percent="3.5"
        />
         <Myskills 
        skillname="HARDWARE"
        percent="8"
        />
         <Myskills 
        skillname="NETWORKING"
        percent="8"
        />
      </MyskillContainer2>
    </MainContentContainer>
  );
}

const MainContentContainer = styled.div`
  margin: 4rem 4rem 0 4rem;
  justify-content: space-between;
  width: 100%
`;

const HomeButton = styled.button`
border: none;
background: transparent;
color: #a53b11;
font-size: 13px;
margin-left:-5px;
cursor: pointer;
`
const MainTitle = styled.div`
  display: flex;
  color: #a53b11;
  font-size: 25px;
  font-weight: 700;
  width: 100%;
`;

const RightContent = styled.div`
`;

const BioContainer = styled.div`
margin: 1.5rem 0rem 0 0rem;
font-size: 16px;
font-weight: 600;
`
const MyskillText = styled.div `
margin: 1.5rem 0rem 0 0rem;
color: #a53b11;
font-size: 25px;
font-weight: 700;
width: 100%;
`

const MyskillContainer = styled.div`
display: flex;
gap: 0.5rem;
width: 100%;
margin: 0.5rem 0rem 0 0rem;
font-size: 18px;
font-weight: 600;
` 
const MyskillContainer2 = styled.div`
display: flex;
gap: 0.5rem;
width: 100%;
margin-top: 3rem;
margin: 1.5rem 0rem 0 0rem;
font-size: 18px;
font-weight: 600;
`

export default maincomponent;
