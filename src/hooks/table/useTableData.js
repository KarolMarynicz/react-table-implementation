import {useState, useEffect} from "react";
import tableSorting from "../../logic/table/tableSorting";

export function useTableData(data, currentPage, itemsNumber, tableSort, search) {
    const[tableData, setTableData] = useState({data: [], allPages: 30});

    useEffect(() => {
        const sortedData = tableSorting(data.filter(item => {
            return item.name.toLowerCase().includes(search) ||
                item.city.toLowerCase().includes(search) ||
                String(item.id).toLowerCase().includes(search) ||
                String(item.totalIncome).toLowerCase().includes(search) ||
                String(item.avgIncome).toLowerCase().includes(search)
        }), tableSort);

        const bottomBound = currentPage * (itemsNumber);
        const upperBound = (currentPage * itemsNumber) + itemsNumber;
        const pages = Math.ceil(sortedData.length / itemsNumber);

        setTableData({data: sortedData.slice(bottomBound, upperBound), allPages: pages});
    }, [data, currentPage, itemsNumber, tableSort, search]);

    return tableData;
}
