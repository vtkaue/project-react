import styled from 'styled-components';

import Background from './assets/bg-image-1.svg';

export const Container = styled.div`

  background-image: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 120%;
`
export const Image = styled.img`
  margin-top: 30px;

`
export const ContainerItens = styled.div`
  background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
  border-radius: 61px 61px 0px 0px;
  padding: 50px 36px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const H1 = styled.h1`
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  margin-bottom: 80px;
  text-align: center;
  color: #FFFFFF;
`
export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  color: #EEEEEE;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-left: 25px;
`
export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 342px;
  height: 58px;
  margin-bottom: 44px;
  border: none;
  outline: none;
  padding-left: 25px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
`
export const Button = styled.button`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  width: 342px;
  height: 74px;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  
    &:hover{
      opacity: 0.8
    }
    &:active{
      opacity: 0.7
    }
`;
export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 342px;
  height: 58px;
  border: none;
  outline: none;
  margin-top: 20px;
  p{
    color: #FFFFFF;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
  }
  button{
    background: none;
    border: none;
    cursor: pointer;
  }
`