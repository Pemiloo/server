import actbase from './action';
import objstate from '../stateGlobal';

const ACT = {tipe = new String(), payload = new Object()};

export default function reducer(state = objstate, action = ACT){
  switch(action.tipe){

    case actbase.MODAL1 : 
      //Action yang akan dilakukan
      
    default :
      return state;

  }
}
