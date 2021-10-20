import { connect } from 'react-redux';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';
import OrderForm from './OrderForm';

const mapStateToProps = (state) => {
    const options = getOrderOptions(state);
    return{
        options
    };
};

const mapDispatchToProps = dispatch => (
    { 
        setOrderOption: payload => dispatch(setOrderOption(payload))
     }
)

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);