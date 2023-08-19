import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  background-color: black;
  height: 100vh;
  background-size: cover;
  flex-direction: column;
  padding: 2%;
  align-items: center;
  justify-content: center;
`
export const Mini = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 50vw;
  background-color: #475569;
  border: 0px;
  border-radius: 5px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: white;
  text-align: center;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: white;
  text-align: center;
`
export const Input = styled.input`
  height: 50px;
  width: 300px;
  color: black;
  background-color: white;
  outline: 5px solid yellow;
  margin-left: 30%;
  border: 0px;
`
export const Warning = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: red;
  text-align: center;
`
