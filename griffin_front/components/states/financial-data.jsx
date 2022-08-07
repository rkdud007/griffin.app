import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { getPriceApi } from "../../api/price";

export const FinancialDataContext = React.createContext({});

export const FinancialDataProvider = ({children})=>{
    const [tokenBalances, setTokenBalances] = useState([]);
    const loadFinancialData = async () => {
        const priceData = await getPriceApi();
        console.log(priceData);
        // setTokenBalances()
    
    };

    useEffect(() => {
        loadFinancialData("1");
      }, []);
    
      return (
        <FinancialDataContext.Provider
          value={{
            tokenBalances,
 
          }}
        >
          {children}
        </FinancialDataContext.Provider>
      );


    
}