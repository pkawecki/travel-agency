import React from 'react';
import Icon from '../../common/Icon/Icon';
import styles from './OrderOption.module.scss';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons =({values, required, currentValue, setOptionValue}) =>(
    <div>
        {!required ? (
        <div onClick = { () => setOptionValue('') }> </div>) : ''}
        {values.map(valueElement => {
            
           return( 
           <div className={styles.icon} 
                key={valueElement.id}
                onClick={valueElement=> setOptionValue(valueElement.id)}
                >
                <Icon name={valueElement.icon}/>
                {valueElement.name}
                {formatPrice(valueElement.price)}

            </div>)})}
            
    </div>
)

export default OrderOptionIcons;