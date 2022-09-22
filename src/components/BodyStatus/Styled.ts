import styled from "styled-components";

export const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;
box-sizing: border-box;
overflow-x: hidden;
`

export const Top = styled.div`
color: #26bda6;
font-weight: bold;
margin-top: 3px;
box-shadow: rgba(100, 100, 111, 0.2) 0px -7px 10px 0px;
background-color: #fff;
border-radius: 20px 20px 0 0 ;
width: 150px;
height: 30px;
display: flex;
justify-content: center;
align-items: flex-end;
z-index: 5;
`

export const Main = styled.div`
  margin: 0 30px;
  padding-top: 50px;
  padding-bottom: 50px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 10px 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 86vw;
  margin-bottom: 5px;

img{
  width: 25px;
}
`

export const firstParag = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
span{
  display: flex;
  align-items: center;
  gap: 10px;
  color: #26bda6;
}
`

export const abs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-weight: normal;
  }
  p{
    font-size: 1.2rem;
    margin: 0;
  }
  h2{
    display: flex;
    font-size: 5rem;
    margin: 0;
    align-items: flex-end;
    color: #26bda6;

     small{
      font-size: 2rem;
    }
  }
  span{
    display: flex;
    font-size: 1.1rem;
    gap: 10px;
    color: #26bda6;

    p{
      color: #000;
    }
  }

  &::before{
    content: '';
    margin-top: 50px;
    margin-bottom: 10px;
    width: 50px;
    height: 5px;
    background-color: #ddd;
  }
`

export const hrExtras = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-weight: normal;
  }
  p{
    font-size: 1.2rem;
    margin: 0;
  }
  h2{
    display: flex;
    font-size: 5rem;
    margin: 0;
    align-items: flex-end;
    color: #26bda6;

     small{
      font-size: 2rem;
    }
  }
  span{
    display: flex;
    font-size: 1.1rem;
    gap: 10px;
    color: #ff0000;

    p{
      color: #000;
    }
  }
  &::before{
    content: '';
    margin-top: 50px;
    margin-bottom: 20px;
    width: 50px;
    height: 5px;
    background-color: #ddd;
  }
`;

export const bancoHr = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-weight: normal;
  }
  p{
    font-size: 1.2rem;
    margin: 0;
  }
  h2{
    display: flex;
    font-size: 5rem;
    margin: 0;
    align-items: flex-end;
    color: #26bda6;

     small{
      font-size: 2rem;
    }
  }
  span{
    display: flex;
    font-size: 1.1rem;
    gap: 10px;
    color: #ff0000;

    p{
      color: #000;
    }
  }

    &::before{
    content: '';
    margin-top: 50px;
    margin-bottom: 20px;
    width: 50px;
    height: 5px;
    background-color: #ddd;
  }
`