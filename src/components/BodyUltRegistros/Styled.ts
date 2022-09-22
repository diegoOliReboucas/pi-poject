import styled from "styled-components";

export const Main = styled.div`
  padding: 0 30px;


`;

export const Itens = styled.div`
  display: flex;
  gap: 20px;
`;

export const Item = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  width: 150px;
  overflow-x: hidden;

  p{
    margin: 0;
    color: #000;
  }

  &:first-child, &:last-child{
    p{
      color: #26bda6;
    }
  }
`;

export const itemInside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.1rem;
  height: 70px;
  width: 100px;
  margin: 2px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 10px 0px;

  span{
    font-size: .8rem;
  }
`;

export const itemOutside = styled.p`
  font-size: .9rem;
  color: #000;
`;