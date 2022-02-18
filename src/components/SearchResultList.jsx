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
`;

const SearchResultList = ({ activeResultIndex, onResultHover, searchResults = [] }) => {
    if (searchResults.length === 0) {
        return null;
    }

    return (
        <ResultList>
            {searchResults.map((result, index) => (
                <SearchResult
                    description={result.item.description}
                    id={result.item.id}
                    isActive={activeResultIndex === index}
                    key={result.item.id}
                    onHover={() => onResultHover(index)}
                    title={result.item.title}
                />
            ))}
        </ResultList>
    );
};

SearchResultList.propTypes = {
    activeResultIndex: PropTypes.number,
    onResultHover: PropTypes.func,
    searchResults: PropTypes.arrayOf(PropTypes.object),
};

export default SearchResultList;
