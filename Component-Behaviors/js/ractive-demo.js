$(function() {
    Ractive.load.baseUrl = 'components/';
    Ractive.load('component-panel.html').then(function(PanelComponent){
        loadFlightModule(PanelComponent);
        loadPassengerModule(PanelComponent);

    }).catch(handleException);
})

function loadFlightModule(PanelComponent) {
    Ractive.load('component-flight.html').then(function(FlightComponent) {
        var flightModule = new PanelComponent({
            el: '#flightModule',
            components: {
                content: FlightComponent
            },
            data: mockData('flight')
        })

    }).catch(handleException);
}

function loadPassengerModule(PanelComponent) {
    Ractive.load('component-passenger.html').then(function(PassengerComponent) {
        var passengerModule = new PanelComponent({
            el: '#passengerModule',
            components: {
                content: PassengerComponent
            },
            data: mockData('passenger')
        })

    }).catch(handleException);
}

function handleException(e) {
    console.log('e: ' + e);
}

function changeStatus() {
    console.log('This should not be called from component!!!');
}

function mockData(type) {
    if(type === 'flight') {
        var flightData = {
            heading: 'Flight Information',
            content: {
                trip: {
                    airline: {
                        code: 'PR'
                    },
                    origin: {
                        code: 'MNL',
                        country: 'Manila',
                        terminal: 'NAIA'
                    },
                    destination: {
                        code: 'JFK',
                        country: 'Japan',
                        terminal: 'Narita'
                    },
                    departure: '10:00AM',
                    arrival: '12:00PM',
                    flightNumber: '1234',
                    status: 'Booked',
                    buttonValue: 'Cancel'
                }
            }   
        }

        return flightData;
    }

    if(type === 'passenger') {
        var passengerData = {
            heading: 'Passenger Information',
            content: {
                passengers: [
                    {
                        name: {
                            firstName: 'Aaron',
                            lastName: 'Mac'
                        },
                        contactNumbers: [
                            {
                                number: '1434457',
                                type: 'Home'
                            },
                            {
                                number: '52345265',
                                type: 'Office'
                            }
                        ],
                        redressNumber: "534345"
                    },
                    {
                        name: {
                            firstName: 'Nette',
                            lastName: 'Tag'
                        },
                        contactNumbers: [
                            {
                                number: '1234567',
                                type: 'Landline'
                            },
                            {
                                number: '98765432',
                                type: 'Mobile'
                            }
                        ],
                        redressNumber: "534345"
                    }  
                ]
            }   
        }

        return passengerData;
    }
}