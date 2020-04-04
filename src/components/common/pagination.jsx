import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
//import { paginate } from '../../utils/paginate';

const Pagination = (props) => {
    let { itemsCount, pageSize, onPageChange, currentPage } = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
        <React.Fragment>
            <nav>
                <ul className="pagination">
                    {pages.map(page => {
                        return (<li
                            className={(page === currentPage) ? "page-item active" : "page-item"}
                            key={page} style={{ cursor: 'pointer' }}>
                            <a className="page-link"
                                onClick={() => onPageChange(page)}
                            >{page}</a>
                        </li>)
                    })}
                </ul>
            </nav>
        </React.Fragment>
    )
}
Pagination.propTypes = {
    itemsCount: propTypes.number.isRequired,
    pageSize: propTypes.number.isRequired,
    onPageChange: propTypes.func.isRequired,
    currentPage: propTypes.number.isRequired
}
export default Pagination;