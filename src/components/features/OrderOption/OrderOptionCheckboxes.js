import React from 'react';
import styles from './OrderOption.module.scss';


const newValueSet = (currentValue, id, checked) => {
    if(checked){
      return [
        ...currentValue,
        id,
      ];
    } else {
      return currentValue.filter(value => value != id);
    }
  };
  
function OrderOptionCheckboxes({values, currentValue, setOptionValue}) {
    console.log('values',values);
    console.log('cv:',currentValue);
    return (
        <div className={styles.checkboxes}>
             {values.map(valueElement => {
                return (
                <div>
                    <label for={valueElement.id} key={valueElement.id}> 
                        <input 
                            type="checkbox" 
                            id={valueElement.id} 
                            value={valueElement.id}
                            checked ={currentValue.indexOf(valueElement.id)>-1 ? 
                                true : false    
                            } 
                            onChange = {event => 
                                setOptionValue(newValueSet(
                                        currentValue, 
                                        valueElement.id, 
                                        event.currentTarget.checked))
                            }
                        />
                        {valueElement.name}
                    </label>
                </div>
                )
             })}
        </div> 
        )
}


export default OrderOptionCheckboxes;