/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {View,Text,Button} from 'react-native';
import { connect,useSelector,shallowEqual } from 'react-redux';
import { Increament } from '../Redux/Home/action';
import { counterSelector } from '../Redux/Selector';

 
 const Home = ({action})=>{
     const count=useSelector(counterSelector,shallowEqual)
 return(
   <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
   <Text>{count||0}</Text>
   <Button title='Increament' onPress={action}/>
   </View>
 )
 }
 const mapDispatchToProps={
     action:Increament,
     fatch:USER_FETCH_SUCCEEDED
 }

 export default connect(null,mapDispatchToProps) (Home);
 