import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(236, 236, 236);
  border-radius: 14px;
`;

export const Item = styled.div`
  padding: 10px 16px;

  & + div {
   
  }

  &:first-child {
    border-bottom: 1px solid var(--outline);
    padding-top: 13px;
  }

  &:last-child {
    padding-bottom: 17px;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 19px;
`;
