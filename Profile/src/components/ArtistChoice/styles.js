import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 32px;

  img {
    width: 76px;
    height: 76px;
    margin-right: 20px;
  }

  h3 {
    font-size: 13px;
    margin-bottom: 3px;
  }

  span {
    color: #b3b3b3;
    font-size: 13px;
  }

  & > div {
    display: flex;
  }
`;

export const Tag = styled.div`
  background: #fff;
  width: 240px;
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 100px;
  margin-bottom: 3px;

  span {
    display: block;
    color: #000;
    font-size: 14px;
    margin-left: 5px;
  }

  & > img {
    width: 24px;
    height: 24px;
    border-radius: 100%;
    margin: 0;
  }
  div {
    display: flex;
  }
`;
