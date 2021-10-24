import React from "react";
// import { Row, Col } from "react-flexbox-grid";
import styles from './OrderOption.module.scss';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionIcons from "./OrderOptionIcons";
import OrderOptionNumber from './OrderOptionNumber'
import OrderOptionText from './OrderOptionText';
import OrderOptionDate from './OrderOptionDate';

const optionTypes ={
    dropdown: OrderOptionDropdown,
    icons: OrderOptionIcons,
    number: OrderOptionNumber,
    checkboxes: OrderOptionCheckboxes,
    text: OrderOptionText,
    date: OrderOptionDate,
}
const OrderOption = ({orderOptionContent, currentValue, setOrderOption}) => {
    const {name,type,id, ...otherProps} = orderOptionContent;
    const OptionComponent = optionTypes[type];

    if(!OptionComponent){
        return null;
    }
    else {
        return(
            <div className={styles.component}>
                <h3 className={styles.title}>{name}</h3>
                <OptionComponent {...otherProps} currentValue={currentValue} 
                setOptionValue={ (value) => setOrderOption({[id]:value})}/>
            </div>
        )
    }
    
}
export default OrderOption;