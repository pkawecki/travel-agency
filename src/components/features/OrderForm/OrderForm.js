import React from "react";
import { Row,Col } from "react-flexbox-grid";
import OrderSummary from "../OrderSummary/OrderSummary";

const OrderForm = ({tripCost}) => {
    //console.log('trip cost as prop in orderForm:', tripCost);
    return (
        <Row>
        <Col xs={12}>
            <OrderSummary  tripCost={tripCost}/>
        </Col>
    </Row>
    )
}

export default OrderForm;