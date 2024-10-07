/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import BurgerFull from '../../assets/Burger.svg';
import { Container, ContainerInput, Image, Input, InputLabel } from '../Home/styles';

import { Link } from 'react-router-dom';

import axios from 'axios';
import { Button } from '../../components/Button/styles';
import { Title } from '../../components/Title/styles';

function App() {
  const myText = 'Faça seu pedido!';
  const [orders, setOrders] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();


  async function addNewOrder() {

    const { data: newOrder } = await axios.post("http://localhost:3001/users", {
      order: inputOrder.current.value,
      name: inputName.current.value,
    })
    console.log(newOrder)
    setOrders([...orders,
     newOrder,
    ])  

  }

  return (



    <Container>

      <Image src={BurgerFull} alt='imagem do hambúrguer' />

      <div>

        <Title text="primary">{myText}</Title>

      </div>
      <ContainerInput>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder=' 1 Coca-Cola,1-XSalada' />
      </ContainerInput>

      <ContainerInput>
        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder='Steve Jobs' />
      </ContainerInput>
      <Link to="/Orders">
      <Button onClick={addNewOrder} theme="secondary">Novo Pedido</Button>
      </Link>
    </Container>

  )
}

export default App
