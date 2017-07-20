var flightData;
var passengerData;

$(function() {
    mockData();
    Ractive.load.baseUrl = 'components/';
    loadPanelComponent();
})

function loadPanelComponent() {
    Ractive.load('component-panel.html').then(function(PanelComponent) {
        loadFlightModule(PanelComponent);
        loadPassengerModule(PanelComponent);
    }).catch(handleException);
}

function loadFlightModule(Component) {
    Ractive.load('component-flight.html').then(function(FlightModule) {
        var flightModule = new FlightModule({
            el: '#flightModule',
            components: {
                panelComponent: Component
            },
            data: flightData
        })
    }).catch(handleException);
}

function loadPassengerModule(Component) {
    Ractive.load('component-passenger.html').then(function(FlightModule) {
        var passengerModule = new FlightModule({
            el: '#passengerModule',
            components: {
                panelComponent: Component
            },
            data: passengerData
        })
    }).catch(handleException);
}

function handleException(e) {
    console.log('e: ' + e);
}

function mockData() {
    flightData = {
        heading: 'Flight Information',
        contents: 'Your flight details here..'
    }

    passengerData = {
         heading: 'Passenger Information',
        contents: 'Your personal details here..'
    }
}
