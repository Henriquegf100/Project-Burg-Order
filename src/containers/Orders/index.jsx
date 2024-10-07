/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Delete from '../../assets/Delete.svg';
import OrderedBurger from '../../assets/OrderedBurger.svg';
import { Container, H3, Image, Order, P } from '../Orders/styles';

import axios from 'axios';
import { Button } from '../../components/Button/styles';
import { Title } from '../../components/Title/styles';
import { ImageDelete } from './styles';


import { Link } from 'react-router-dom';

function Orders() {
  const myText = 'Pedidos';
  const [orders, setOrders] = useState([]);


  useEffect(() => {

    async function fetchOrders(){
  
   
    const {data: newOrder} = await axios.get("http://localhost:3001/users");
      setOrders(newOrder); }
  
  fetchOrders()    
  }, [])  
  
  
    async function deleteOrder(ordersId) {
      await axios.delete(`http://localhost:3001/users/${ordersId}`)
      const newOrders = orders.filter(order => order.id !== ordersId)
  
      setOrders(newOrders);
    }
  
  return (



    <Container>

      <Image src={OrderedBurger} alt='imagem do pedido' />

        <Title>{myText}</Title>
        <ul>
        {orders.map((orderItem) => (
          <Order key={orderItem.id}>
            <div><H3>{orderItem.order} </H3>,<br></br> -
              <P>{orderItem.name}</P>
            </div>
            <button onClick={() => deleteOrder(orderItem.id)}>
              <ImageDelete src={Delete} alt='Imagem lixeira delete' />
            </button>
          </Order>
        ))}
      </ul>


  <Link to="/">
    <Button>Voltar</Button>
    </Link>



    </Container>

  )
}

export default Orders
