import React from "react";
import styled from "styled-components";
import ProfileAvatar from "../assets/profile.jpg";
import LinkTo from "./link";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { MdPerson, MdMenuBook, MdWork, MdPhoneIphone } from "react-icons/md";
import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
function sidenavbar() {
  return (
    <SidebarContainer>
      <ProfileContainer>
        <ProfileImage src={ProfileAvatar} />
        <Name>Poovanna P K</Name>
        <Title>UI Developer</Title>
      </ProfileContainer>
      <LinkContainer>
        <LinkTo title="About Me">
          <MdPerson style={{ color: "#a53b11" }} />
        </LinkTo>
        <LinkTo title="Education">
          <MdMenuBook style={{ color: "#a53b11" }} />
        </LinkTo>
        <LinkTo title="Experience">
          <MdWork style={{ color: "#a53b11" }} />
        </LinkTo>
        <LinkTo title="Contact">
          <MdPhoneIphone style={{ color: "#a53b11" }} />
        </LinkTo>
      </LinkContainer>
      <FooterContainer>
        <Icon>
          <a href="https://www.facebook.com/public/PK-Poovanna" target="_blank">
            <RiFacebookBoxFill
              style={{
                color: "#3b5998 ",
                height: "2rem",
                width: "2rem",
                paddingRight: "5px",
              }}
            />
          </a>
          <a href="" target="">
            <RiTwitterFill
              style={{
                color: "#00acee",
                height: "2rem",
                width: "2rem",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            />
          </a>
          <a href="https://www.instagram.com/poovannapk/?hl=en" target="_blank">
            <RiInstagramFill
              style={{
                color: "#8a3ab9",
                height: "2rem",
                width: "2rem",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            />
          </a>
          <a href="https://in.linkedin.com/in/poovanna-pk" target="_blank">
            <RiLinkedinBoxFill
              style={{
                color: "#0077b5",
                height: "2rem",
                width: "2rem",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            />
          </a>
        </Icon>
      </FooterContainer>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
width: 35%;
height: 100%;
background: rgba(255, 255, 255, 0.7);x
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;

@media (min-width: 768px) {
  height: 100%;
}

@media (min-width: 1024px) {
  height: 100%;
}
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 25%;
  padding: 3rem 0 1rem 0;
`;

const ProfileImage = styled.img`
  height: 7rem;
  border-radius: 5rem;
`;

const Name = styled.h1`
  color: #a53b11;
  font-size: 1.1rem;
  margin: 1rem 0 0.2rem 0;
`;

const Title = styled.h2`
  color: #a53b11;
  font-size: 1.1rem;
`;
const LinkContainer = styled.div`
  padding-left: 1.7rem;
  margin: 2rem 0;
`;

const FooterContainer = styled.div`
  padding-left: 3rem;
  cursor: pointer;
`;

const Icon = styled.div`
  display: flex;
`;

export default sidenavbar;
