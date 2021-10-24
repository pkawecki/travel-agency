import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function OrderOptionDate({...props}) {
    const setOptionValue = props.setOptionValue;
    const [startDate, setStartDate] = useState(new Date());
    return ( 
        <div>
              <DatePicker 
                selected={startDate} 
                onChange={(date) => {
                    setStartDate(date)
                    setOptionValue(date)
                }}/>
        </div> 
    );
}

export default OrderOptionDate;