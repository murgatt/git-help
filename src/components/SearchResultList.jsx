import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import SearchResult from './SearchResult';

const ResultList = styled.ul`
    position: absolute;
    top: 80px;
    width: 600px;
    max-width: 100%;
    margin-top: 32px;
    padding: 16px;
    border-radius: 12px;
    background-color: var(--background-surface);
    box-shadow: 5px 8px 10px var(--shadow-bottom), -5px -8px 10px var(--shadow-top);
    list-style: none;

    &.fade-enter {
        opacity: 0;
        transform: translate(0, 25px);
        z-index: 1;
    }
    &.fade-enter.fade-enter-active {
        opacity: 1;
        transform: translate(0, 0);
        transition: opacity 250ms ease-out, transform 300ms ease;
    }
    &.fade-exit {
        opacity: 1;
        transform: translate(0, 0);
    }
    &.fade-exit.fade-exit-active {
        opacity: 0;
        transform: translate(0, 25px);
        transition: opacity 250ms ease-out, transform 300ms ease;
    }
`;

const SearchResultList = ({ activeResultIndex, onResultClick, onResultHover, searchResults = [] }) => (
    <ResultList>
        {searchResults.map((result, index) => (
            <SearchResult
                id={result.item.id}
                isActive={activeResultIndex === index}
                key={result.item.id}
                onClick={onResultClick}
                onHover={() => onResultHover(index)}
                title={result.item.title}
            />
        ))}
    </ResultList>
);

SearchResultList.propTypes = {
    activeResultIndex: PropTypes.number,
    onResultClick: PropTypes.func,
    onResultHover: PropTypes.func,
    searchResults: PropTypes.arrayOf(PropTypes.object),
};

export default SearchResultList;
