import { call,all, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import {INCREAMENT} from '../Constact/Constact'
// import {fromJS} from 'immutable';

function* fetchUser(action) {
    try {
        const user = yield axios.get('https://jsonplaceholder.typicode.com/posts')
        yield put({type: "USER_FETCH_SUCCEEDED", payload: user});
     }catch(error){
           console.log(error)
       }

      
    // } catch (e) {
    //    yield put({type: "USER_FETCH_FAILED", message: e.message});
    // }
 }

 function* mysaga(){
     yield takeLatest(INCREAMENT,fetchUser);
 }

 export default function* RootSaga(){
     try{
        yield all([
            mysaga()
        ])
     }catch(error){
         console.log(error);
     }
 };
