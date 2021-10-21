import React from "react";
import { setOrderOption } from "../../../redux/orderRedux";
import styles from './OrderOption.module.scss';


const OrderOptionNumber = ({currentValue, limits,setOptionValue, ...others}) => {
    // console.log(currentValue);
    return(<div className={styles.number}>
        <input type="number" value={currentValue}
            min={limits.min} max={limits.max}
            onChange = {event => {
                console.log(event);
                return (
                    setOptionValue(event.currentTarget.value)
                )
            }}
            ></input>
    </div>)
}

export default OrderOptionNumber;