import React, { Component } from 'react';
import _ from 'lodash';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination.jsx';
import { paginate } from '../utils/paginate.js';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        selectedGenre: '',
        sortColumn: {
            path: 'title',
            order: 'asc'
        }
    }

    componentDidMount() {
        let genres = [{ _id: '', name: 'All Genres' }, ...getGenres()]
        this.setState({ movies: getMovies(), genres });
    }
    handleDelete = (movieId) => {
        let movies = this.state.movies.filter(movie => movie._id !== movieId);
        this.setState({ movies })
    }

    handleLike = (movie) => {
        let movies = [...this.state.movies];
        let index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

    handleSort = (sortColumn) => {
        this.setState({ sortColumn });
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }

    handleGenreSelect = (genre) => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    }

    render() {
        let { length: count } = this.state.movies;
        let { pageSize, currentPage, movies: allMovies, genres, selectedGenre, sortColumn } = this.state;
        if (count === 0) return <p>There are no movies in database</p>

        let filtered = selectedGenre && selectedGenre._id ? allMovies.filter(movie => movie.genre._id === selectedGenre._id) : allMovies;
        let sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const movies = paginate(sorted, pageSize, currentPage);
        return (
            <div className="row" style={{ marginTop: 15 }}>
                <div className="col-2">
                    <ListGroup
                        selectedItem={selectedGenre}
                        items={genres}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {filtered.length} of movies in database.</p>
                    <MoviesTable
                        movies={movies}
                        onDelete={this.handleDelete}
                        onLike={this.handleLike}
                        onSort={this.handleSort}
                        sortColumn={sortColumn}
                    />
                    <Pagination
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>);
    }
}

export default Movies;