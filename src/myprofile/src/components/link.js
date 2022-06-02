import React from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Link} from 'react-router-dom'

function LinkTo(props) {

    const {title, children, path} = props
  return (
    <LinkContainer>
    <Router>
      <Icon>
    <svg width="0" height="0">
        <linearGradient id='gradient' xl="100%" yl="100%" x2="0%" y2="0%">
            <stop stopColor='#ff6100' offset="0%" />
            <stop stopColor='#ee0979' offset="100%"/>
        </linearGradient>
    </svg>
    {children}
    </Icon>
    <LinkText>{title}</LinkText>
    </Router>
    </LinkContainer>
  )
}

const LinkContainer = styled.div`
display: flex;
margin: 0.5rem 0;
color: black;
font-weight: 600
`

const Icon =  styled.div`
svg{
    height: 2rem;
    width: 2rem;
}
cursor: pointer;
`

const LinkText =  styled.div`
padding-left: 1rem;
padding-top: 0.2rem;
cursor: pointer;
`

export default LinkTo