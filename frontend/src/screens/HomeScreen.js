import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Product from '../components/Product'


const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, products, error } = productList

    useEffect(() => {
       dispatch(listProducts())           
    }, [dispatch])
    
    return (
        <>  
            <h1>Latest Products Available</h1>
            {loading ? <Loader/> : error ? <Message varient='danger'></Message> : <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} /> 
                    </Col>
                ))}
            </Row>}
            <Row className='py-3'>
                <Col>
                    <Link to={'/remove'}> Remove User?  </Link>
                 </Col>
            </Row>
            
        </>
    )
}

export default HomeScreen
