import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
    text-align: center;
    color: var(--color-text);
    margin: 0 0 48px;
`;

const MainTitle = styled.h1`
    margin: 0 0 8px;
`;

const MainTitleLink = styled(Link)`
    font-size: 4rem;
    color: var(--color-text);
    text-decoration: none;
`;

const Subtitle = styled.h2`
    font-size: 1rem;
    font-weight: normal;
    margin: 0;
`;

const Header = () => (
    <HeaderWrapper>
        <MainTitle>
            <MainTitleLink to="/">GitHelp</MainTitleLink>
        </MainTitle>
        <Subtitle>A simple Git commands reminder</Subtitle>
    </HeaderWrapper>
);

export default Header;
