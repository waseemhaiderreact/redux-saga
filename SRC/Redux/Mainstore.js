import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import Reduxer from "../Redux/Reduxer";
import createSagaMiddleware from 'redux-saga'
import mySaga from '../Redux/sagas'
const sagaMiddleware = createSagaMiddleware()

const Mainstore =createStore(
    Reduxer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

sagaMiddleware.run(mySaga);
export default Mainstore;