import React from "react";
import { Row,Col } from "react-flexbox-grid";
import OrderSummary from "../OrderSummary/OrderSummary";

const OrderForm = ({tripCost, options}) => {
    console.log('trip cost as prop in orderForm:', tripCost);
    console.log('options as prop in orderForm:', options);
    return (
        <Row>
        <Col xs={12}>
            <OrderSummary  tripCost={tripCost} options={options}/>
        </Col>
    </Row>
    )
}

export default OrderForm;