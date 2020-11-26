import React, { useMemo, useReducer } from 'react';
import reducer from '../useReducer/reducer';
import objstate from '../stateGlobal';

export const StatePatch = React.createContext();

export default function GLOBALCONTEXT({children}){
  
  const [state, dispatch] = useReducer(reducer, objstate);  

  return(
    <StatePatch.Provider value={{state, dispatch}}>    
        {children}      
    </StatePatch.Provider>
  );

}


