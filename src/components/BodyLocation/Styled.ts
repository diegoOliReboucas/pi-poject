import styled from "styled-components";

type propsOpen = {
  openLocal?: boolean;
  openPhoto?: boolean;
  openCofirma?: boolean
}

export const Body = styled.div`
`;

export const confLocal = styled.div<propsOpen>`
  content: '';
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: #26bda6;
  display: ${props => props.openLocal ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;

export const Mapa = styled.div`
  background-color: white;
  border-radius: 20px;
  height: 690px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  img{
    width: 100vw;
    height: 100%;
  }

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
  }

  span{
    color: #26bda6;
  }
`;

export const confirmLocal = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #70efdc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -30px;

  img{
    width: 40px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  width: 100vw;
  margin-top: -40px;
  padding: 10px 30px;
  box-sizing: border-box;

  img{
    width: 40px;
  }
  p{
    color: #fff;
    font-size: 1.2rem;
    box-sizing: border-box;
    margin: 0;
  }
`;

export const confFoto = styled.div<propsOpen>`
  position: fixed;
  color: #fff;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: #26bda6;
  display: ${props => props.openPhoto ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;

export const Foto = styled.div`
  background-color: #fff;
  color: #000;
  font-weight: bold;
  border-radius: 20px;
  width: 100vw;
  height: 680px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  div{
    background-color: #000;
    height: 600px;
    width: 100vw;
    display: flex;
    justify-content: center;
    position: relative;

    p{
      color: white;
      background-color: #26bda6;
      height: 20px;
      margin-top: 40px;
      padding: 10px 40px;
      border-radius: 50px;
    }
  }
`;

export const confirmPhoto = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #70efdc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -30px;

  img{
    width: 40px;
  }
`;

export const pontoRegistrado = styled.div<propsOpen>`
  display: ${props => props.openCofirma ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  gap: 130px;
  background-color: #fff;
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
`;

export const firstH2 = styled.h2`
text-align: center;
padding-bottom: 10px;
  border-bottom: 1px solid #26bda6;
  width: 80vw;
  overflow: hidden;
`;

export const pontoTop = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  div{
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;

    h2{
      color: #26bda6;
      font-size: 1.7rem;
    }
  }
  h2{
    margin: 0;
  }
  p{
    margin: 0;
  }
`;

export const fotoRegistrada = styled.div`
  content: '';
  position: absolute;
  height: 180px;
  border-radius: 20px;
  width: 180px;
  background-color: #000;
  top: 200px;
`;

export const pontoBottom = styled.div`
  background-color: #26bda6;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px 30px 0 0;
  padding-top: 70px;

  p{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    margin: 0;
  }
  h2{
    font-size: 1.9rem;
    color: #fff;
    overflow: hidden;
  }

  button{
    background-color: #70efdc;
    color: #000;
    border: none;
    font-weight: bold;
    border-radius: 50px;
    padding: 20px 90px;
    margin-bottom: 100px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) -5px -2px 10px 0px;
  }
`;

export const Main = styled.div`
  margin: 20px 30px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 10px 0px;
  overflow-x: hidden;

img{
  width: 25px;
}
`;

export const Data = styled.div`
display: flex;
gap: 20px;

`;

export const Location = styled.div`
display: flex;
gap: 20px;

input{
  width: 60vw;
  border-radius: 25px;
  border: none;
  background-color: #e8f5f3;
  box-sizing: border-box;
  padding: 0 15px;
}

div{
  content: '';
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: #26bda6;
}
`;

export const buttonPonto = styled.button`
  padding: 10px 40px;
    border-radius: 50px;
    border: none;
    background-color: #70efdc;
    color: #000;
    font-weight: bold;
    box-shadow: rgba(100, 100, 111, 0.2) -5px 5px 10px 0px;
`;