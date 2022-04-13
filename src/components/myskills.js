import React from 'react'
import styled from "styled-components";

function Myskills(props) {

    const {percent, skillname} = props
  return (
    <MyskillContainer>
        <SkillContainer>
        <ProgressContainer>
            <SkillText>
                {skillname}
            </SkillText>
            {/* <SkillText>
                Version: {version}
            </SkillText> */}
        </ProgressContainer>
        <ProgressValueContainer>
        <ProgressBAR value={percent} max="10" />
        <Percent>Rating: {percent}</Percent>
        </ProgressValueContainer>
        </SkillContainer>    
    </MyskillContainer>
  )
}

const MyskillContainer = styled.div`
display: grid;
background : rgba(255, 255, 255, 0.4);
width: 50%;
border-radius: 1rem;
height: 4.2rem;
` 

const SkillContainer = styled.div`
`
const ProgressContainer = styled.div`
margin-top: 0.2rem;
`
const SkillText =  styled.h5`
font-weight: 700;
padding-left: 2.3rem;
`

const ProgressValueContainer = styled.div`

`
const ProgressBAR = styled.progress`
border-radius: 0;
width: 80%;
height: 1.2rem;
padding-left: 2rem;

&::-webkit-progress-bar{
    background-color: #ffff;
    border-radius: 0.6rem;
}
&::-webkit-progress-value{
    background: linear-gradient(to right, #8ac6d1, #f9bcdd);
    border-radius: 0.6rem;
}
`

const Percent =  styled.h6`
font-size: 12px;
padding-left: 2.3rem;
`

export default Myskills