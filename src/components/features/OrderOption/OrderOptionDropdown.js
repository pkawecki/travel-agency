import React from 'react';
import styles from './OrderOption.module.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionDropdown = ({values, 
    required, currentValue, setOptionValue}) => {
      // console.log('props:',props);
    return (
    <select
      className={styles.dropdown}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
      {required ? '' : (
        <option key='null' value=''>---</option>
      )}
      {/* {values[0]} */}
      {values.map(value => (
        <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
      ))}
    </select>
  );
}

OrderOptionDropdown.defaultProps = {
  //values: [],
}

OrderOptionDropdown.propTypes = {
  values: PropTypes.array,
}

export default OrderOptionDropdown;