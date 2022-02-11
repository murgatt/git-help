import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';
import 'github-markdown-css';
import data from './data/index';

const MarkdownContent = styled.article`
    width: 800px;
    max-width: 100%;
    margin: 32px auto;
`;

function Content() {
    const { contentId } = useParams();
    const content = data.find(item => item.id === contentId);

    return (
        <MarkdownContent className="markdown-body">
            <ReactMarkdown>{content.markdown}</ReactMarkdown>
        </MarkdownContent>
    );
}

export default Content;
