import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
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
  background-color: var(--background-surface);
  box-shadow: 5px 8px 10px var(--shadow-bottom), -5px -8px 10px var(--shadow-top);
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
  padding-left: 48px;
  background-color: var(--background-surface);
  color: var(--color-text);

  &::placeholder {
    transition: opacity 250ms ease-in-out;
  }

  &:focus {
    box-shadow: inset 2px 2px 4px var(--shadow-bottom), inset -2px -2px 4px var(--shadow-top);
    outline: none;
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
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text);
`;

const fuse = new Fuse(data, {
  keys: ['title', 'tags'],
  includeMatches: true,
});

function Search() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [activeResultIndex, setActiveResultIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const searchInputRef = useRef(null);
  const shouldShowResults = isFocused && searchResults.length > 0;

  const handleChange = event => {
    const search = event.target.value;
    const results = fuse.search(search).slice();
    setSearchValue(search);
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

  const onPageChange = () => {
    setSearchValue('');
    searchInputRef.current.blur();
    setSearchResults([]);
    setActiveResultIndex(0);
    const route = searchResults[activeResultIndex].item.id;
    navigate(route);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchResults.length) {
      onPageChange();
    }
  };

  return (
    <SearchSection>
      <SearchForm role="search" onSubmit={handleSubmit}>
        <SearchField>
          <Icon />
          <SearchInput
            type="search"
            placeholder="Search a Git command"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={searchValue}
            ref={searchInputRef}
          />
        </SearchField>
      </SearchForm>
      <CSSTransition in={shouldShowResults} timeout={300} classNames="fade" unmountOnExit>
        <SearchResultList
          activeResultIndex={activeResultIndex}
          onResultClick={onPageChange}
          onResultHover={handleResultHover}
          searchResults={searchResults}
        />
      </CSSTransition>
    </SearchSection>
  );
}

export default Search;
