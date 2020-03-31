import React from 'react';
import './App.scss';

import { useCompaniesData } from './hooks/data/useCompaniesData'
import Table from "./components/table/Table";

function App() {
  // link to get companies data
  const companiesUrl = "https://recruitment.hal.skygate.io/companies";
  // concatenate with company id to get company income data
  const incomeUrl = "https://recruitment.hal.skygate.io/incomes/";

  const headers = [
    {name: "ID", sortingKey: "id"},
    {name: "NAME", sortingKey: "name"},
    {name: "CITY", sortingKey: "city"},
    {name: "TOTAL INCOME", sortingKey: "totalIncome"},
    {name: "AVERAGE INCOME", sortingKey: "avgIncome"}
  ];

  const data = useCompaniesData(companiesUrl, incomeUrl);

  if (data === null) {
    return (<div className="app">Loading...</div>);
  }

  return (
      <div className="app">
        <Table data={data}
               headers={headers}/>
      </div>
  );
}

export default App;
