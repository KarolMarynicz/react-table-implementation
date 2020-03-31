import React, {useState} from "react";
import PropTypes from "prop-types";
import "./Table.scss";
import "../../global.scss";

import Header from "./header/Header";
import Body from "./body/Body";
import Controls from "./controls/Controls";

import {useTableData} from "../../hooks/table/useTableData";
import {useTableCurrentPage} from "../../hooks/table/useTableCurrentPage";
import usePrevious from "../../hooks/table/usePrevious";

import checkSort from "../../logic/table/checkSort";

function Table(props) {
    const [tableSort, setTableSort] = useState({key: "id", direction: 1});
    const [itemsNumber, setItemsNumber] = useState(10);
    const [page, setPage] = useState(0);
    const [search, setSearch] = useState("");

    const prevTableSort = usePrevious(tableSort);
    const currentPage = useTableCurrentPage(page, itemsNumber, props.data.length);
    const tableData = useTableData(props.data, currentPage, itemsNumber, tableSort, search);

    return (
        <div className="container">
            <table className="table">
                <Header headers={props.headers}
                        setTableSort={(clickedSort) => {
                            setTableSort(checkSort(clickedSort, prevTableSort))
                        }}/>
                <Body data={tableData.data} />
            </table>
            <Controls pageChange={setPage}
                      currentPage={currentPage}
                      allPages={tableData.allPages}
                      changeItemsNumber={event => {
                          setItemsNumber(parseInt(event.target.value));
                          setPage(0)
                      }}
                      searchChange={setSearch} />
        </div>
    );
}

Table.propTypes = {
    data: PropTypes.array.isRequired,
    headers: PropTypes.array.isRequired,
};

export default Table;