import React from 'react';
// import { Grid,Row,Col } from 'react-flexbox-grid';
import styles from './OrderSummary.module.scss';

//import { formatPrice } from '../../../utils/formatPrice';'../../../utils/formatPrice';
//import {calculateTotal} from '../../../utils/calculateTotal';


const OrderSummary = () => {
    return (
        <h2 className={styles.component}>Total: <strong>$12.345</strong></h2>
        
    )
}

export default OrderSummary;