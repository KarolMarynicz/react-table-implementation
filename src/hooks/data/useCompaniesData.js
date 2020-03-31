import { useEffect, useState } from "react";
import Axios from "axios";

export function useCompaniesData(companiesUrl, incomeUrl) {
    const [companies, setCompanies] = useState(null);

    // function for incomes.reduce to get sum of incomes
    const reducer = (accumulator, currentValue) => accumulator + parseFloat(currentValue.value);

    async function getCompanies() {
        return (await Axios.get(companiesUrl)).data;
    }

    async function getIncomes(data) {
        const dataWithIncome = data;

        if (dataWithIncome !== null) {
            await Promise.all(dataWithIncome.map(async (company) => {
                const incomeData = (await Axios.get(incomeUrl + company.id)).data;

                const totalIncome = incomeData.incomes.reduce(reducer, 0); // 0 -> initial value
                const avgIncome = (totalIncome / incomeData.incomes.length);

                company.totalIncome = totalIncome.toFixed(2);
                company.avgIncome = avgIncome.toFixed(2);
            }));
        }

        return dataWithIncome;
    }

    useEffect(() => {
        getCompanies()
            .then(companiesData => getIncomes(companiesData))
            .then(companiesWithIncomeData => setCompanies(companiesWithIncomeData))
            .catch(err => console.log(err));
    }, []);

    return companies;
}