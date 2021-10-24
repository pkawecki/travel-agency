import React from 'react';

function OrderOptionText({...props}) {
    const setOptionValue = props.setOptionValue;
    
    return ( 
        <div>
            <form> 
                <input 
                    type="text"
                    placeholder="sometext"
                    onChange={(event) => {
                        setOptionValue(event.target.value);      
                    }}
                />
            </form>
        </div> 
    );
}

export default OrderOptionText;