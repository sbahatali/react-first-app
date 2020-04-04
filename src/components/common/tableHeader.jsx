import React, { Component } from 'react';

class tableHeader extends Component {
    raiseSort = (path) => {
        let sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path) {
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        } else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    }

    renderSortIcon = (column) => {
        let { sortColumn } = this.props;
        //if (column.path === sortColumn.path) return null;
        if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>
    }

    render() {
        return (
            <thead>
                <tr>
                    {this.props.columns.map(column =>
                        <th key={column.path || column.key} scope="col" onClick={() => this.raiseSort(column.path)} style={{ cursor: 'pointer' }}>
                            {column.label} {this.renderSortIcon(column)}
                        </th>
                    )}
                </tr>
            </thead>
        );
    }
}

export default tableHeader;