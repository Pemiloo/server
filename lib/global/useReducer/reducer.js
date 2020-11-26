import actbase from './action';
import objstate from '../stateGlobal';

const ACT = {tipe : new String(), payload : new Object()};

export default function reducer(state = objstate, action = ACT){
  switch(action.tipe){

    case actbase.LOGIN :       
      //Action yang akan dilakukan                  
      return {authSta : false };

    case actbase.SIGNUP : 
      //Action yang akan dilakukan      
      return {authSta : true};
      
    default :
      return state;

  }
}
