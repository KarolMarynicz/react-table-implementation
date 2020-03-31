function tableSorting(dataToSort, tableSort) {
    const sortedData = dataToSort;

    const compareBy = (sort) => {
        return function (a, b) {
            if (a[sort.key] < b[sort.key]) return (-1 * sort.direction);
            if (a[sort.key] > b[sort.key]) return (1 * sort.direction);
            return 0
        }
    };

    return sortedData.sort(compareBy(tableSort));
}

export default tableSorting;