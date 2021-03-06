import React, { useState, useEffect } from 'react';
import FormContainer from '../components/FormContainer';
import{ Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message.js';
import Loader from '../components/Loader.js';
import { login } from '../actions/userActions.js';

const LoginScreen = ({location, history}) => {

    const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { loading, error, userInfo } = userLogin;
    const redirect = '/';
    useEffect(()=>{
        if(userInfo){
         
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
        
    }


  return (
      <>
      {userInfo ? (
        
        <FormContainer>
            <h1> Hey! {userInfo.name.split(' ')[0]}, <br /> </h1> <h4>How are you? </h4>
             <Link to='/'> <Button variant='primary'> Go to Home Screen. </Button> </Link>
            </FormContainer> 
            
        ) : <FormContainer>
            <h1> Sign In </h1>
            {error && <Message variant='danger'> Please enter valid Email and Password. </Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='email'>
                    <Form.Label> Email Address </Form.Label>
                    <Form.Control type='email' placeholder='Enter your e-mail' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label> Password </Form.Label>
                    <Form.Control type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'> Sign In </Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer? <Link to={'/register'}> Register. </Link>
                 </Col>
            </Row>
        </FormContainer> }

        
        

      </>
  );
};

export default LoginScreen;

