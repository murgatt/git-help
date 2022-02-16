import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const ResultLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    padding: 12px;
    border-radius: 8px;
    transition: background-color 250ms ease-in-out;
    display: block;
    background-color: ${props => (props.isActive ? '#f1f2f5' : 'none')};
`;

const SearchResult = ({ description, isActive, id, onHover, title }) => (
    <li onMouseEnter={onHover}>
        <ResultLink to={id} isActive={isActive} tabIndex="-1">
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
