import React, { useState, useRef } from "react";

import Consulting from './assets/Consulting.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'
// styles
import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  User
}
  from './styles'

export const App = () => {

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  function addNewUser() {
    setUsers([...users,
    {
      id: Math.random(),
      name: inputName.current.value,
      age: inputAge.current.value
    }])
  }


  return (
    <Container>

      <Image alt="Consulting-image" src={Consulting} />

      <ContainerItens>

        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>

        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>

        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>Cadastrar<img alt="arrow" src={Arrow} /></Button>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button><img src={Trash} alt="trash" /></button>
            </User>
          ))
          }
        </ul>

      </ContainerItens>

    </Container>
  )

}