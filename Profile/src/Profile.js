import React from 'react';

import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  height: 40vh;
  background: url('https://i.scdn.co/image/ab676186000010167f61d45ad74b38e57ee92b68');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 24px 32px;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 5rem;
    font-weight: bolder;
  }

  p {
    line-height: 2;
    font-size: 16px;
  }
`;

const Profile = () => {
  return (
    <Container>
      <h1>Red Hot Chili Peppers</h1>
      <p>25.250.121 ouvintes mensais</p>
    </Container>
  );
};

export default Profile;
