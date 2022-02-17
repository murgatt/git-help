import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const ResultLink = styled(Link)`
    text-decoration: none;
    padding: 12px;
    border-radius: 8px;
    display: block;
    opacity: 0.7;
    color: var(--color-text);
    transition: opacity 250ms ease-in-out, box-shadow 250ms ease-in-out;

    &.active {
        opacity: 1;
        box-shadow: inset 2px 2px 4px var(--shadow-bottom), inset -2px -2px 4px var(--shadow-top);
    }
`;

const SearchResult = ({ description, isActive, id, onHover, title }) => (
    <li onMouseEnter={onHover}>
        <ResultLink to={id} isActive={isActive} tabIndex="-1" className={isActive ? 'active' : ''}>
            {title} - {description}
        </ResultLink>
    </li>
);

SearchResult.propTypes = {
    description: PropTypes.string,
    isActive: PropTypes.bool,
    id: PropTypes.string.isRequired,
    onHover: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default SearchResult;
