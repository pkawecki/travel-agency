import React from "react";
import { Row,Col } from "react-flexbox-grid";
import OrderOption from "../OrderOption/OrderOption";
import OrderSummary from "../OrderSummary/OrderSummary";
import pricing from '../../../data/pricing.json';
const OrderForm = ({tripCost, options, setOrderOption}) => {
    console.log('setOrderOption: ',setOrderOption);
    return (
        <Row>
        {pricing.map(elem => {
            return(
                <Col key={elem.id} md={4}>
                    <OrderOption orderOptionContent={elem} 
                    currentValue={options[elem.id]}
                    setOrderOption={setOrderOption}
                    />  
                </Col>
            )
        })  }          
        <Col xs={12}>
            <OrderSummary  tripCost={tripCost} options={options}/>
        </Col>
    </Row>
    )
}
export default OrderForm;