import React, { useState } from 'react';
import FormContainer from '../components/FormContainer';
import{ Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message.js';
import Loader from '../components/Loader.js';
import { logout, remove } from '../actions/userActions.js';
import { Link } from 'react-router-dom';

const UserRemoveScreen = () => {
    
    const [email, setEmail] = useState('');
          
    const dispatch = useDispatch();
    const userRemove = useSelector(state => state.userRemove);
    const { loading, error, info } = userRemove;
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin;
  
    const submitHandler = (e) => {
        e.preventDefault();
        
        if(!(email === null || email === '')){

            dispatch(remove(email));
            if(email === userInfo.email)
            {   
                dispatch(logout(email));
            }
         }
        }

        const color = {
            color: "loulou",
        }
  return (
      <>
       <FormContainer>
            <h1> Remove User </h1>
            {error && <Message variant='danger'> {error} </Message>}
            {info && <Message variant='danger'> {info.message} </Message>} 
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                        
                <Form.Group controlId='email'>
                    <Form.Label> User Email Address </Form.Label>
                    <Form.Control type='email' placeholder='Enter your e-mail' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
            <Button type='submit' variant='danger'> Remove </Button>

            </Form>
            <Row className='py-3'>
                <Col>
                    <Link to={'/register'}> <p style={color} >Create Account. </p> </Link>
                 </Col>
            </Row>

        </FormContainer> 
       </>
  );
};

export default UserRemoveScreen;

