import { combineReducers } from 'redux';

const ADD_CONNECTION = 'ADD_CONNECTION';

export function addConnection(connection) {
  return {
    type: ADD_CONNECTION,
    connection,
  }
}

const defaultConnections = [
    {
        id: "1",
        stops: ["2273", "1071", "31845"],
        title: "Home Commute"
    }
];

function connections(state=defaultConnections, action, newConnection) {
  switch (action.type) {
    case ADD_CONNECTION:
      return [
        ...state,
        newConnection
      ];
    default:
      return state;
  }
}

const connectionsApp = combineReducers({
    connections
});
  
export default connectionsApp