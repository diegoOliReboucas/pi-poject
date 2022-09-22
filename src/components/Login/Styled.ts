import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  color: white;
  background-color: black;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Links = styled.div`
font-size: .8rem;
display: flex;
color: #70efdc;
justify-content: space-around;
width: 80vw;
max-width: 300px;
overflow: hidden;

p{
  margin: 0;
  cursor: pointer;
  overflow: hidden;
}
`;

export const ButtonLogin = styled.button`
  margin-top: 50px;
  cursor: pointer;
  background-color: #70efdc;
  color: #000;
  padding: 10px 40px;
  border-radius: 25px;
  font-weight: bold;
  overflow: hidden;

  &:active{
    opacity: .9;
  }
`;

export const LoginFooter = styled.div`
position: absolute;
  bottom: 50px;
  overflow: hidden;
`;