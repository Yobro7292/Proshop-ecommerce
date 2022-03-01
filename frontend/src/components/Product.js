import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import { useSelector } from 'react-redux'


const Product = ({product}) => {
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    return (
        <Card className="my-2 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>
            <Card.Body>
            <Link to={`/product/${product._id}`}>
               <Card.Title as='div'><strong> {product.name} </strong> </Card.Title>
            </Link>
            <Card.Text as='div'> 
                <Rating value={product.rating} text={`${product.numReviews} reviews`} color="#ffb100" /> 
            </Card.Text>
            <Card.Text as='h3'> { userInfo ? '$'+product.price : 'Please Login to see Price. *' } </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
