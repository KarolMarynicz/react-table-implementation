import React from "react";
import "./Header.scss"
import PropTypes from "prop-types";

function Header(props) {
    return (
        <thead>
            <tr className="header">
                {props.headers.map((header, index) =>
                    <th className="header-cell center-content"
                        onClick={() => {
                            props.setTableSort({key: header.sortingKey, direction: 1})
                        }}
                        key={index}>{header.name}
                    </th>)}
            </tr>
        </thead>
    );
}

Header.propTypes = {
    setTableSort: PropTypes.func.isRequired,
    headers: PropTypes.array.isRequired
};

export default Header;