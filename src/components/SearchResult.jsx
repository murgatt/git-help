import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const ResultLink = styled(Link)`
  text-decoration: none;
  padding: 16px;
  border-radius: 8px;
  display: block;
  opacity: 0.7;
  color: var(--color-text);
  background-color: transparent;
  transition: opacity 250ms ease-in-out, background-color 250ms ease-in-out;

  &.active {
    opacity: 1;
    background-color: var(--background-focus);
  }
`;

const SearchResult = ({ isActive, id, onClick, onHover, title }) => (
  <li onMouseEnter={onHover}>
    <ResultLink to={id} isActive={isActive} onClick={onClick} tabIndex="-1" className={isActive ? 'active' : ''}>
      {title}
    </ResultLink>
  </li>
);

SearchResult.propTypes = {
  isActive: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onHover: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default SearchResult;
