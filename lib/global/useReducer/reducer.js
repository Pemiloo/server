import actbase from './action';
import objstate from '../stateGlobal';

const ACT = {tipe : new String(), payload : new Object()};

export default function reducer(state = objstate, action = ACT){

  // const { create, edit } =  state.doubleModalRoom;

  switch(action.tipe){
    case actbase.LOGIN :                           
      // state.authSta = false;
      return {...state, authSta : false};

    case actbase.SIGNUP :       
      //state.authSta = true;
      return {...state, authSta : true};
    
    case actbase.REGIS :
      //state.registerNext = action.payload.register           
      return {...state, registerNext : action.payload.register };

    case actbase.CREATEROOM :      
      return {...state, doubleModalRoom : {create : !state.doubleModalRoom.create, edit:state.doubleModalRoom.edit} }

      case actbase.EDITROOM :      
      return {...state, doubleModalRoom : {create : state.doubleModalRoom.create, edit: !state.doubleModalRoom.edit} }
      
    case actbase.CHANGEPOS :
      return {...state, pos : action.payload.pos};

    default :
      return state;
  }

}
