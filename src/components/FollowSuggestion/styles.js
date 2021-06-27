import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h:8;

  > div {
    
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  img {
    width: 49px;
    height: 49px;
    // background: var(--gray);
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;

