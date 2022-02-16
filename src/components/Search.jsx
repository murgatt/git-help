import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Fuse from 'fuse.js';
import data from '../data/index';
import SearchIcon from './icons/SearchIcon';
import SearchResultList from './SearchResultList';

const SearchSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const SearchForm = styled.form`
    width: 600px;
    max-width: 100%;
    height: 80px;
    padding: 16px;
    border-radius: 12px;
    box-shadow: 0 6px 30px -10px #d5dbed;
    //background: var(--surface-background);
`;

const SearchField = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
    background: #f1f2f5;
    padding-left: 40px;

    &::placeholder {
        transition: opacity 250ms ease-in-out;
    }

    &:focus::placeholder {
        opacity: 0;
    }

    &::-webkit-search-cancel-button {
        display: none;
    }
`;

const Icon = styled(SearchIcon)`
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
`;

const fuse = new Fuse(data, {
    keys: ['title', 'description', 'tags'],
    includeMatches: true,
});

function Search() {
    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState([]);
    const [activeResultIndex, setActiveResultIndex] = useState(0);
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = event => {
        const search = event.target.value;
        const results = fuse.search(search);
        setSearchResults(results);
        setActiveResultIndex(0);
    };

    const handleKeyDown = event => {
        const isUpOrDownKey = event.key === 'ArrowDown' || event.key === 'ArrowUp';

        if (!isUpOrDownKey || !searchResults.length) {
            return;
        }

        event.preventDefault();
        const increment = event.key === 'ArrowUp' ? -1 : 1;
        const nextIndex = activeResultIndex + increment;

        if (nextIndex >= searchResults.length) setActiveResultIndex(0);
        else if (nextIndex < 0) setActiveResultIndex(searchResults.length - 1);
        else setActiveResultIndex(nextIndex);
    };

    const handleResultHover = resultIndex => setActiveResultIndex(resultIndex);

    const handleSubmit = event => {
        event.preventDefault();
        if (searchResults.length) {
            const route = searchResults[activeResultIndex].item.id;
            navigate(route);
        }
    };

    return (
        <SearchSection>
            <SearchForm role="search" onSubmit={handleSubmit}>
                <SearchField>
                    <Icon />
                    <SearchInput
                        type="search"
                        placeholder="Search"
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                </SearchField>
            </SearchForm>
            {isFocused && (
                <SearchResultList
                    activeResultIndex={activeResultIndex}
                    onResultHover={handleResultHover}
                    searchResults={searchResults}
                />
            )}
        </SearchSection>
    );
}

export default Search;
