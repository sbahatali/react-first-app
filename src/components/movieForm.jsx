import React from 'react';

const MovieForm = ({ match, history }) => {
    return (
        <React.Fragment>
            <h1>Movie Form {match.params.id}</h1>
            <button className="btn btn-primary btm-sm" onClick={() => history.push('/movies')}>SAVE</button>
        </React.Fragment>
    );
}

export default MovieForm;