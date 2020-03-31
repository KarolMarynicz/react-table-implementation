import {useState, useEffect} from "react";

export function useTableCurrentPage(page, itemsNumber, maxItems) {
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const maxPages = Math.ceil(maxItems / itemsNumber);

        if(page < 0)
            setCurrentPage(0);
        else if(page >= maxPages)
            setCurrentPage(maxPages - 1);
        else
            setCurrentPage(page);
    }, [page, itemsNumber, maxItems]);

    return currentPage;
}