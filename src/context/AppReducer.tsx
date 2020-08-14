import {transaction} from "../context/GlobalState"

export default (state:any, action: any) => {
    switch (action.type) {
        case "DEL_TRANS":
            return {
                ...state,
                transactions: state.transactions.filter((transact:transaction) => transact.id !== action.payload),
                edited: false,
            }
        case "ADD_TRANS":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
                added: true,
                edited: false,
            }
        default:
            return state;
    }
} 