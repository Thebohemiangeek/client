import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
  return (
    <Section>
      <Bar>
        <form className="searchform cf" id="site-search">
          <label htmlFor="site-search">
            Find the right project for you
            <input
              type="text"
              placeholder="Search for a project by name, country, or keywords..."
            />
          </label>
          <button type="submit">Search</button>
        </form>
      </Bar>{' '}
      <a href="undefined">Advanced Search</a>
    </Section>
  );
};

export default SearchBar;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  a {
    margin: auto;
    align-self: center;
    text-decoration: underline;
    color: #1b1464;
  }
`;
const Bar = styled.div`
  background-color: white;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.13);
  width: 80%;
  margin: 0 auto;
  border-radius: 15px;
  height: 80px;
  align-items: center;
  display: flex;
  position: relative;
  label {
    position: absolute;
    top: -3rem;
    left: 15px;
    font-size: 2.5rem;
    color: #1b1464;
  }
  form {
    height: 60px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    input {
      width: 90%;
      border: none;
      border-bottom: solid 1.5px #dcdcdc;
      height: 60px;
      outline: none;
      margin-left: 15px;
    }
    button {
      background-color: #1b1464;
      color: white;
      border-radius: 5px;
      height: 60px;
      width: 150px;
      border: none;
      margin: auto 5px;
    }
  }
`;
