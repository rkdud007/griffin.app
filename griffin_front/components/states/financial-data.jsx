import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { getPriceApi } from "../../api/price";
import { convertUsd, aggregate } from '../calculate';
export const FinancialDataContext = React.createContext({});

export const FinancialDataProvider = ({children})=>{
    const [totalBalanceByToken, setTotalBalanceByToken] = useState({
      'eth':1,
      'matic': 2,
      'usdc': 123
    });

    const [totalPayrollByToken, setTotalPayrollByToken] = useState({
      'eth':1,
      'matic': 2,
      'usdc': 123
    });
    

    const [totalBalance, setTotalBalance] = useState(0);

    const [totalPayroll, setTotalPayroll] = useState(0);

    const loadFinancialData = async () => {
        const res = await getPriceApi();
        const priceData = res.data;
        setTotalBalanceByToken(convertUsd(totalBalanceByToken, priceData));
        setTotalBalance(aggregate(totalBalanceByToken, priceData));

        setTotalPayrollByToken(convertUsd(totalPayrollByToken, priceData));
        console.log('totalPayrollByToken', totalPayrollByToken)
        setTotalPayroll(aggregate(totalPayrollByToken, priceData));
    };

     useEffect(() => {
        loadFinancialData();
      }, []);
    
    return (
      <FinancialDataContext.Provider
        value={{
          totalBalanceByToken,
          totalBalance,
          totalPayrollByToken,
          totalPayroll
        }}
      >
        {children}
      </FinancialDataContext.Provider>
    );
}