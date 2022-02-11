import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Fuse from 'fuse.js';
import data from './data/index';
import SearchIcon from './components/icons/SearchIcon';

const SearchSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SearchWrapper = styled.div`
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
    minMatchCharLength: '3',
    includeMatches: true,
});

function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => {
        const search = event.target.value;
        const results = fuse.search(search);
        setSearchResults(results);
    };

    return (
        <SearchSection>
            <SearchWrapper>
                <SearchField>
                    <Icon />
                    <SearchInput type="search" placeholder="Search" onChange={handleChange} />
                </SearchField>
            </SearchWrapper>
            <ul>
                {searchResults.map(result => {
                    const { id, title, description } = result.item;

                    return (
                        <li key={id}>
                            <Link to={id}>
                                {title} - {description}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </SearchSection>
    );
}

export default Search;
