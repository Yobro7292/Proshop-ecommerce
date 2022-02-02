import React, { useState, useEffect } from 'react';
import FormContainer from '../components/FormContainer';
import{ Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message.js';
import Loader from '../components/Loader.js';
import { register } from '../actions/userActions.js';
import { useNavigate  } from "react-router-dom";

const RegisterScreen = ({location, history}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const userRegister = useSelector(state => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    const userLogin = useSelector(state => state.userLogin)
    const login = userLogin; 
    const data = localStorage.getItem('userInfo');
    useEffect(()=>{
        if(login && data !== null){
                navigate('/signin');  
                
            }
    }, [data, login, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            setMessage('Password do not match.')
        }
        else{

            dispatch(register(name, email, password));
        }
        
    }


  return (
      <>
       <FormContainer>
            <h1> Register User </h1>
            {error && <Message variant='danger'> {error} </Message>}
            {userInfo && <Message variant='success'> Registration Successfull. </Message>}
            {message && <Message variant='danger'> {message} </Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

            <Form.Group controlId='name'>
                    <Form.Label> Name </Form.Label>
                    <Form.Control type='name' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>
                
                <Form.Group controlId='email'>
                    <Form.Label> Email Address </Form.Label>
                    <Form.Control type='email' placeholder='Enter your e-mail' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label> Password </Form.Label>
                    <Form.Control type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                    <Form.Label> Confirm Password </Form.Label>
                    <Form.Control type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>


                <Button type='submit' variant='primary'> Register </Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    Already Account? <Link to={'/signin'}> Login. </Link>
                 </Col>
            </Row>
        </FormContainer> 
       </>
  );
};

export default RegisterScreen;

