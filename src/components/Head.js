import React from 'react';
import styled from 'styled-components';
import Hero from './Layout/Hero/Hero';
import SearchBar from './Layout/Hero/SearchBar';

const Head = () => {
  return (
    <Wrapper>
      <Hero />
      <SearchBar />
    </Wrapper>
  );
};

export default Head;
const Wrapper = styled.div`
  background-color: #f0f0f0;
`;
