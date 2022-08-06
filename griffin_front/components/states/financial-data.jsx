import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { getEmployeeApi } from "../../api/employee";

export const FinancialDataContext = React.createContext({});

export const FinancialDataProvider = ({children})=>{
    const [tokenBalances, setTokenBalances] = useState([]);
    

}