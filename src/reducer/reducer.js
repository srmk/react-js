import { DYNAMIC_DATA } from '../action/actions';


export default function eshopReducer(state = {}, actions) {
    let newstate = state;
    const { type, payload } = actions;

    switch (type) {
        case DYNAMIC_DATA:
            return newstate = { ...newstate, newData: payload };
        default:
            return newstate;
    }
}