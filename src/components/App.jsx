import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import Layout from './Layout';
import Content from './Content';

const AppRoot = styled.main`
    min-height: 100vh;
    padding-top: 32px;
    //background: var(--background-main);
`;

function App() {
    return (
        <AppRoot>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path=":contentId" element={<Content />} />
                </Route>
            </Routes>
        </AppRoot>
    );
}

export default App;
