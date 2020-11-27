import actbase from './action';
import objstate from '../stateGlobal';

const ACT = {tipe : new String(), payload : new Object()};

let ob = new Object();

export default function reducer(state = objstate, action = ACT){

  // const { create, edit } =  state.doubleModalRoom;

  switch(action.tipe){
    case actbase.LOGIN :       
      //Action yang akan dilakukan                        
      return { authSta : false };

    case actbase.SIGNUP : 
      //Action yang akan dilakukan                  
      return { authSta : true };
    
    case actbase.REGIS :           
      return { registerNext : action.payload.register };

    // case actbase.CREATEROOM :      
    //   return { doubleModalRoom : {create : !create, edit:edit} }

    //   case actbase.EDITROOM :      
    //   return { doubleModalRoom : {create : create, edit: !edit} }
      
    default :
      return state;
  }

}
