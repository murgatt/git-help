import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Search from './Search';

const LayoutStyled = styled.div`
    padding: 0 32px;
`;

const Layout = () => (
    <LayoutStyled>
        <Search />
        <Outlet />
    </LayoutStyled>
);

export default Layout;
