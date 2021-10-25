import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

const tags=['chuj','mnie','to'];
describe.only('Component TripSummary', () => {

    it ('should generate proper url link', () => {
        const chosenId = 'abcd';
        const component = shallow(<TripSummary 
            id={chosenId} 
            tags= {tags}
            image={'imageOfDick'} 
            name={'alternativeForSex'}
            cost={'1000'}
            days={7}
            />);

        console.log(component.debug());
        expect(component.find('.link').prop('to')).toEqual('/trip/'+chosenId);

    })

    it ('should generate <img> with proper src and alt attributes', () => {
        const component = shallow(<TripSummary
            id={'abcd'} 
            tags= {tags} 
            image={'imageOfDick'} 
            name={'alternativeForSex'}
            cost={'1000'}
            days={7}
        />)

        console.log(component.debug());

        expect(component.find('img').prop('src')).toEqual('imageOfDick');
        expect(component.find('img').prop('alt')).toEqual('alternativeForSex');
        expect(component.find('span').at(0).text()).toBe('7 days');
        expect(component.find('span').at(1).text()).toBe('from 1000');
    })

    it('should throw en error when prop missing: ', () => {
        expect(() => shallow(<TripSummary/>)).toThrow();
    })

    it('should renders tags in <spans> in proper sequence', () => {
        const component = shallow(<TripSummary
            tags={tags}
            image={'imageOfDick'} 
            name={'alternativeForSex'}
            cost={'1000'}
            days={7}
            />);
        const renderedDiv = component.find('.tags');

        for(let i=0; i<tags.length; i++){
            expect(renderedDiv.find('span').at(i).text()).toBe(tags[i]);
        }
    })
    
})