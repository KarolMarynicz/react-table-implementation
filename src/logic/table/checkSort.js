function checkSort(clickedSort, prevTableSort) {
    if (clickedSort.key === prevTableSort.key) {
        return {key: clickedSort.key, direction: -prevTableSort.direction}
    }

    return clickedSort;
}

export default checkSort;