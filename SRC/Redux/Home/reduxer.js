import { fromJS,List } from "immutable";
import { INCREAMENT } from "../../Constact/Constact";

const initState = fromJS(
    {
        count: 0,
        user:List()
    }
);

const reduxer = (state = initState, action) => {
    switch (action.type) {
        case 'INCREAMENT':
            return state.set('count', state.get('count') + 2);
        default: return state;
    }
}
export default reduxer;