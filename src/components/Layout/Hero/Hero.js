import React from 'react';
import styled from 'styled-components';

const ilustration = require('../../../images/heroilu.png');

const Hero = () => {
  return (
    <div>
      <Wrapper>
        <Text>
          <section>
            <h1>Together we can survive this crisis</h1>
            <p>
              Search the largest database of projects and organizations
              dedicated to fighting COVID-19
            </p>
          </section>
          <img src={ilustration} alt="ilustration" />
        </Text>
        {/*      <h2>Find the right project for you</h2> */}
      </Wrapper>
    </div>
  );
};

export default Hero;

const Wrapper = styled.div`
  z-index: 8;

  height: 600px;
`;
const Text = styled.div`
  @media (max-width: 1200px) {
    section {
      margin: 50px auto;
    }
  }
  @media (max-width: 800px) {
    section {
      width: 100%;
      h1 {
        font-size: 3rem;
      }
      position: absolute;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 500px;
    width: 100%;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 0px 0px 300px 300px;
    img {
      width: auto;
      height: 600px;
      object-fit: contain;
      float: right;
    }
    section {
      float: left;
      margin: 100px auto;
      margin-left: 10%;
    }
    h1 {
      font-size: 4.5rem;
      color: #1b1464;
    }
    p {
      font-size: 1.5rem;
      margin: 30px auto;
    }
    h2 {
      font-size: 2.5rem;
      color: #1b1464;
    }
  }
`;
