import React, { Component } from 'react';
import Like from './common/like.js';
import Table from './common/table.jsx';

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        { key: 'like', content: movie => (<Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />), label: 'Like' },
        { key: 'delete', content: movie => (<button onClick={() => this.props.onDelete(movie._id)} className="btn btn-danger btn-sm">Delete</button>), label: 'Delete' },
    ];

    render() {
        let { movies, onDelete, onLike, onSort, sortColumn } = this.props;
        return (
            <Table data={movies} columns={this.columns} onSort={onSort}
                sortColumn={sortColumn} />
        );
    }
}


export default MoviesTable;