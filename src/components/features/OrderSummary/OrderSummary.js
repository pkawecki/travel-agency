import React from 'react';
// import { Grid,Row,Col } from 'react-flexbox-grid';
import styles from './OrderSummary.module.scss';

import { formatPrice } from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';


const OrderSummary = ({tripCost, options}) => {
    console.log('tripCost in OrderSummary', tripCost)
    console.log('options in OrderSummary', options)
    return (
        <h2 className={styles.component}>Total: <strong>{formatPrice(calculateTotal(tripCost, options))}</strong></h2>
        
    )
}

export default OrderSummary;