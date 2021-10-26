import React from 'react';
import {mount, shallow} from 'enzyme';
import OrderOption from './OrderOption';

// describe.skip('Component OrderOption',  () => {
//     it('should render properly', () => {
//         const orderOptionContent = {
//             name: 'someName',
//             type:'text',
//             id:'someId'
//         }
//         const component = shallow(<OrderOption 
//             orderOptionContent = {orderOptionContent}
//             />);

//         expect(component).toBeTruthy();
//     });

//     it('should return empty object if called without required props', () => {
//         const component = shallow(<OrderOption />);
//         expect(component).toEqual({});
//     });

//     it('should render title in <h3> tag filed', () => {
//         const orderOptionContent = {
//             name: 'someName',
//             type:'text',
//             id:'someId'
//         }
//         const component = shallow(<OrderOption 
//             orderOptionContent = {orderOptionContent}
//             />);

//         console.log(component.debug());
//         expect(component.find('.title').text()).toEqual('someName');
//     })
// )}


    const optionTypes = {
        dropdown: 'OrderOptionDropdown',
        // icons: 'OrderOptionIcons',
        // checkboxes: 'OrderOptionCheckboxes',
        // number: 'OrderOptionNumber',
        // text: 'OrderOptionText',
        // date: 'OrderOptionDate',
      };
    const mockProps = {
    id: 'abc',
    name: 'Lorem',
    values: [
        {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
        {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
    ],
    required: false,
    currentValue: 'aaa',
    price: '50%',
    limits: {
        min: 0,
        max: 6,
    },
    };
      
    const mockPropsForType = {
    dropdown: {},
    icons: {},
    checkboxes: {currentValue: [mockProps.currentValue]},
    number: {currentValue: 1},
    text: {},
    date: {},
    };
    
    const testValue = mockProps.values[1].id;
    const testValueNumber = 3;
    
      for(let type in optionTypes){
        describe(`Component OrderOption with type=${type}`, () => {
          /* test setup */
          let component, subcomponent, renderedSubcomponent;


          beforeEach(() => {
            component = shallow(
              <OrderOption
                type={type}
                values={mockProps.values}
                {...mockProps}
                {...mockPropsForType[type]}
              />
            );
            subcomponent = component.find(optionTypes[type]);
            renderedSubcomponent = subcomponent.dive();
          });


          /* common tests */
          it('passes dummy test', () => {
            console.log(subcomponent.debug());
            console.log(renderedSubcomponent.debug());
            console.log(mockProps);
            expect(1).toBe(1);
          });
      
          /* type-specific tests */
          switch (type) {
            case 'dropdown': {
              /* tests for dropdown */
              break;
            }
          }
        });
      }
