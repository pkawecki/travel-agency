import React from "react";
// import { Row, Col } from "react-flexbox-grid";
import styles from './OrderOption.module.scss';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionIcons from "./OrderOptionIcons";
import OrderOptionNumber from './OrderOptionNumber'
const optionTypes ={
    dropdown: OrderOptionDropdown,
    icons: OrderOptionIcons,
    number: OrderOptionNumber,
    checkboxes: OrderOptionCheckboxes,
}
const OrderOption = ({orderOptionContent, currentValue, setOrderOption}) => {
    const {name,type,id, ...otherProps} = orderOptionContent;
    const OptionComponent = optionTypes[type];

   // console.log('currentValue in OrderOption',name,' ',currentValue);
   // console.log('other props: ', otherProps);
   // console.log('setOrderOption in OrderOption: ',setOrderOption);

    if(!OptionComponent){
        return null;
    }
    else {
        return(
            <div className={styles.component}>
                <h3 className={styles.title}>{name}</h3>
                <OptionComponent {...otherProps} 
                setOptionValue={ (value) => setOrderOption({[id]:value})}/>
            </div>
        )
    }
    
}
export default OrderOption;