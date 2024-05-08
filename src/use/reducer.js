import { DELETE_ELECTION_ERROR, DELETE_ELECTION_PENDING, DELETE_ELECTION_SUCCESS, DELETE_Party_ERROR, DELETE_Party_PENDING, DELETE_Party_SUCCESS, DELETE_VOTE_ERROR, DELETE_VOTE_PENDING, DELETE_VOTE_SUCCESS, GET_ELECTION_ERROR, GET_ELECTION_PENDING, GET_ELECTION_SUCCESS, GET_Party_ERROR, GET_Party_PENDING, GET_Party_SUCCESS, GET_VOTE_ERROR, GET_VOTE_PENDING, GET_VOTE_SUCCESS, POST_ELECTION_ERROR, POST_ELECTION_PENDING, POST_ELECTION_SUCCESS, POST_Party_ERROR, POST_Party_PENDING, POST_Party_SUCCESS, POST_VOTE_ERROR, POST_VOTE_PENDING, POST_VOTE_SUCCESS, POST_connection_ERROR, POST_connection_PENDING, POST_connection_SUCCESS } from "./action";


let initialstate = {
    party: [],
    election: [],
    voter: [],
    connection: [],
    isLoading: false,
    isError: null,
}

let userReducer = (state = initialstate, action) => {
    console.log(action, "action from partyreducer");
    switch (action.type) {
        //post
        case POST_Party_PENDING: {
            return {
                isLoading: true,
                ...state
            }
        }
        case POST_Party_SUCCESS: {
            return {
                isLoading: false,
                party: state.party.concat(action.data)
            }
        }
        case POST_Party_ERROR: {
            return {
                isError: action.data,
                ...state,
            }
        }
        //get all data
        case GET_Party_PENDING: {
            return {
                isLoading: true,
                ...state
            }
        }
        case GET_Party_SUCCESS: {
            return {
                isLoading: false,
                party: action.data
            }
        }
        case GET_Party_ERROR: {
            return {
                isError: action.data,
                ...state,
            }
        }
        // delete
        case DELETE_Party_PENDING: {
            return {
                isLoading: true,
                ...state
            }
        }
        case DELETE_Party_SUCCESS: {
            console.log(action.data, "delete success");
            return {
                isLoading: false,
                party: state.party.filter((item) => item.id != action.data.id)
            }
        }
        case DELETE_Party_ERROR: {
            return {
                isLoading: false,
                isError: action.data
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

let electionReducer = (state = initialstate, action) => {
    console.log(action, "action from electionreducer");
    switch (action.type) {
        //post
        case POST_ELECTION_PENDING: {
            return {
                isLoading: true,
                ...state
            }
        }
        case POST_ELECTION_ERROR: {
            return {
                isError: action.data,
                ...state,
            }
        }
        case POST_ELECTION_SUCCESS: {
            console.log(action.data, "election");
            return {
                isLoading: false,
                election: state.election.concat(action.data)
            }
        }
        //get
        case GET_ELECTION_PENDING: {
            return {
                isLoading: true,
                ...state
            }
        }
        case GET_ELECTION_SUCCESS: {
            return {
                isLoading: false,
                election: action.data
            }
        }
        case GET_ELECTION_ERROR: {
            return {
                isError: action.data,
                ...state,
            }
        }
        //delete
        case DELETE_ELECTION_PENDING: {
            return {
                isLoading: true,
                ...state
            }
        }
        case DELETE_ELECTION_SUCCESS: {
            console.log(action.data, "delete success");
            return {
                isLoading: false,
                election: state.election.filter((item) => item.id != action.data.id)
            }
        }
        case DELETE_ELECTION_ERROR: {
            return {
                isLoading: false,
                isError: action.data
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

let voterReducer = (state = initialstate, action) => {
    console.log(action, "action from voterreducer");
    switch (action.type) {
        //post
        case POST_VOTE_PENDING: {
            return {
                isLoading: true,
                ...state
            }
        }
        case POST_VOTE_SUCCESS: {
            return {
                isLoading: false,
                voter: state.voter.concat(action.data)
            }
        }
        case POST_VOTE_ERROR: {
            return {
                isError: action.data,
                ...state,
            }
        }
        //get
        case GET_VOTE_PENDING: {
            return {
                isLoading: true,
                ...state
            }
        }
        case GET_VOTE_SUCCESS: {
            return {
                isLoading: false,
                voter: action.data
            }
        }
        case GET_VOTE_ERROR: {
            return {
                isError: action.data,
                ...state,
            }
        }
        //delete
        case DELETE_VOTE_PENDING: {
            return {
                isLoading: true,
                ...state
            }
        }
        case DELETE_VOTE_SUCCESS: {
            return {
                isLoading: false,
                voter: state.voter.filter((item) => item.id != action.data.id)
            }
        }
        case DELETE_VOTE_ERROR: {
            return {
                isLoading: false,
                isError: action.data
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

let connectionReducer = (state = initialstate, action) => {
    console.log(action, "action from connectionReducer");
    switch (action.type) {
        //post
        case POST_connection_PENDING: {
            return {
                isLoading: true,
                ...state
            }
        }
        case POST_connection_SUCCESS: {
            return {
                isLoading: false,
                connection: state.connection.concat(action.data)
            }
        }
        case POST_connection_ERROR: {
            return {
                isError: action.data,
                ...state,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export { userReducer, electionReducer, voterReducer, connectionReducer }