import React from "react";
import PropTypes from "prop-types";
import "./Body.scss"

function Body(props) {
    return (
        <tbody>
        {props.data.map((company, index) =>
            <tr className="table-row" key={index}>
                <td className="table-cell center-content">{company.id}</td>
                <td className="table-cell center-content">{company.name}</td>
                <td className="table-cell center-content">{company.city}</td>
                <td className="table-cell center-content">{company.totalIncome}</td>
                <td className="table-cell center-content">{company.avgIncome}</td>
            </tr>
        )}
        </tbody>
    );
}

Body.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Body;