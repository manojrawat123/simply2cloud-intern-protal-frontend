

import { createContext } from "react";

const DataContext = createContext();

const DataProviderFuncComp = ({ children })=>{

  

    

    return (
        <DataContext.Provider value={{
            // loginFunc
        }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataProviderFuncComp, DataContext }