import React from 'react';
import TableHeader from './tableHeader.jsx';
import TableBody from './tableBody.jsx';

// columns 
// onSort
// sortColumn
// movies

const Table = (props) => {
    let { data, columns, sortColumn, onSort } = props;
    return (
        <table className="table table-borderless">
            <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
            <TableBody data={data} columns={columns} />
        </table>
    );
}

export default Table;