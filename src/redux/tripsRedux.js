/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // console.log('trips: ',trips);
  //console.log('filters: ',filters);


  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  output = output.filter(trip => 
    trip.days <= filters.duration.to && 
    trip.days >= filters.duration.from
    )

  //FOREACH TRIP
  output = output.filter(trip => {
    let suitableByTags = true;

    //MAP through tags in filters object
    filters.tags.map(checkedTag =>{
      
      //if tag from filters in not present in trip change 'suitableByTags' variabe to 'false'
       if (trip.tags.indexOf(checkedTag)<0){
        suitableByTags = false;
       }
    })

    //for each TRIP return bool value
    return suitableByTags;
  })

  function compareTripsDescending(a,b){
    let valA = parseFloat(a.cost.replace("$", '').replace(",",''));
    let valB = parseFloat(b.cost.replace("$", '').replace(",",''));

        return (valB-valA); 
  }

  
  output = output.sort(compareTripsDescending);
  console.log(output);

  return output;
};

export const getTripById = ({trips}, tripId) => {
  // TODO - DONE filtering
  let filtered = trips;

  filtered = filtered.filter(tripElem => tripId===tripElem.id)

 console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  let filtered = trips;


  filtered = filtered.filter(trip => trip.country.code===countryCode);

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: !true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
