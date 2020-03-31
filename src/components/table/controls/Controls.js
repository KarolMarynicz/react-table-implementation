import React from "react";
import PropTypes from "prop-types";
import "./Controls.scss";

function Controls(props) {
    return (
        <div className="controls">
            <div className="buttons">
                <div>
                    <button className="button" onClick={() => props.pageChange(0)}>
                        <span className="button-arrow">{"<<"}</span>
                    </button>
                    <button className="button" onClick={() => props.pageChange(props.currentPage - 1)}>
                        <span className="button-arrow">{"<"}</span>
                    </button>
                </div>
                <div className="current-page">
                    {props.currentPage + 1} / {props.allPages}
                </div>
                <div>
                    <button className="button" onClick={() => props.pageChange(props.currentPage + 1)}>
                        <span className="button-arrow">{">"}</span>
                    </button>
                    <button className="button" onClick={() => props.pageChange(props.allPages)}>
                        <span className="button-arrow">{">>"}</span>
                    </button>
                </div>
            </div>
            <div className="search-and-pages">
                <input id="search" className="search-input" type="text" placeholder="search..."
                       onInput={() => props.searchChange(document.getElementById("search").value.toLowerCase())} />
                <select defaultValue={10} id="itemsNumber" className="items-number"
                        onChange={props.changeItemsNumber}>
                    <option value={5}>5 per page</option>
                    <option value={10}>10 per page</option>
                    <option value={15}>15 per page</option>
                </select>
            </div>
        </div>
    );
}

Controls.propTypes = {
    pageChange: PropTypes.func.isRequired,
    changeItemsNumber: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    allPages: PropTypes.number.isRequired,
    searchChange: PropTypes.func.isRequired
};

export default Controls;
