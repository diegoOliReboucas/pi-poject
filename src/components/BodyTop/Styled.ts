import styled from "styled-components";

type propsMenu = {
  open?: boolean
}

export const menuOpen = styled.div<propsMenu>`
  content: '';
  background-color: #26bda6;
  height: 100vh;
  display: ${props => props.open ? 'flex' : 'none'};
  flex-direction: column;
  padding: 5px 30px;
  color: #fff;
  position: fixed;
  width: 90vw;
  z-index: 10;
`;

export const menuBody = styled.div`
  margin-top: 50px;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li{
    font-size: 1.3rem;
    border-top: 1px solid black;
    display: flex;
    gap: 15px;
    box-sizing: border-box;

    &:last-child{
      border-bottom: 1px solid black;
    }

    img{
      width: 35px;
    }
  }
`;

export const closeMenuButton = styled.button`
    margin-top: 100px;
    padding: 10px 40px;
    border-radius: 50px;
    border: none;
    background-color: #70efdc;
    color: #000;
    display: flex;
    align-self: center;
`;

export const bodyFooter = styled.div`
display: flex;
align-self: center;
position: absolute;
bottom: 30px;
color: #000;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #fff;
  background: linear-gradient(120deg, #000 45%,  #70efdc);
  height: 200px;
  padding: 5px 30px;
`;

export const headerTop = styled.div`
  display: flex;
  justify-content: space-between;

  img{
    width: 50px;
  }

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p{
    margin: 0;
  }
`;

export const headerMain = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const imgPerfil = styled.div`
  content: '';
  height: 100px;
  width: 100px;
  background-color: #fff;
  border-radius: 50%;
`;