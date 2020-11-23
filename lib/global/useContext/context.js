import React, { useMemo, useReducer } from 'react';
import reducer from '../useReducer/reducer';
import objstate from '../stateGlobal';

export const State    = React.createContext();
export const Dispatch = React.createContext();

export default function GLOBALCONTEXT({children}){
  
  const [state, dispatch] = useReducer(reducer, objstate);

  const wstate = useMemo(
    ()=>{
      return state;
    },[state]
  );

  return(
    <Dispatch.Provider value={dispatch}>
      <State.Provider value={wstate}>
        {children}
      </State.Provider>
    </Dispatch.Provider>
  );

}


