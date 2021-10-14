import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import MainLayout from './components/layout/MainLayout/MainLayout';

import Home from './components/views/Home/Home';
import Trips from './components/views/Trips/TripsContainer';
import Countries from './components/views/Countries/CountriesContainer';
import Regions from './components/views/Regions/RegionsContainer';
// TODO - import other views
import Info from './components/views/Info/Info';
import NotFound from './components/views/NotFound/NotFound';

import parseTrips from './utils/parseTrips';
import {setMultipleStates} from './redux/globalRedux';
import TripContainer from './components/views/Trip/TripContainer';
import Country from './components/views/Country/CountryContainer';

import {AnimatedSwitch} from 'react-router-transition';

class App extends React.Component {
  static propTypes = {
    trips: PropTypes.array,
    setStates: PropTypes.func,
  }

  constructor(props){
    super(props);
    // parse trips when App is first created
    parseTrips(this.props.trips, this.props.setStates);
  }

  componentDidUpdate(prevProps){
    if(prevProps.trips !== this.props.trips){
      // parse trips again if they changed
      parseTrips(this.props.trips, this.props.setStates);
    }
  }

  render(){
    return (
      <BrowserRouter>
        <MainLayout>
          <AnimatedSwitch
            atEnter = {routeAnimation.atEnter}
            atLeave = {routeAnimation.atLeave}
            atActive = {routeAnimation.atActive}
            mapStyles = {mapStyles}
            className= "switch-wrapper"
          >
            <Route exact path='/' component={Home} />
            <Route exact path='/trips' component={Trips} />
            <Route exact path='/countries' component={Countries} />
            <Route exact path='/regions' component={Regions} />

            <Route path='/trip/:id' component={TripContainer} />

            <Route path='/country/:id' component={Country} />

            {/* TODO - add more routes for other views */}
            <Route exact path='/info' component={Info} />
            <Route path='*' component={NotFound} />
          </AnimatedSwitch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const routeAnimation = {
  atEnter: {
    opacity: 0,
    translateY: 200
  },
  atLeave: {
    opacity: 0,
    translateY: 0
  },
  atActive: {
    opacity: 1,
    translateY: 0
  }
}

const mapStyles = (styles) => {
  return {
    opacity: styles.opacity,
    transform: `translateY(${styles.translateY}px)`,
  };
}

const mapStateToProps = state => ({
  trips: state.trips,
});

const mapDispatchToProps = dispatch => ({
  setStates: newState => dispatch(setMultipleStates(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
