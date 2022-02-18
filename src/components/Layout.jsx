import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Search from './Search';
import Header from './Header';

const LayoutStyled = styled.div`
    padding: 0 24px;
`;

const Layout = () => (
    <LayoutStyled>
        <Header />
        <Search />
        <Outlet />
    </LayoutStyled>
);

export default Layout;
