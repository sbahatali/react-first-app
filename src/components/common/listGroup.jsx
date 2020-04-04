import React from 'react';
import propTypes from 'prop-types';

const ListGroup = (props) => {
    let { items, onItemSelect, valueProperty, textProperty, selectedItem } = props;
    return (
        <ul className="list-group">
            {items.map(item =>
                <li onClick={() => onItemSelect(item)}
                    style={{ cursor: 'pointer' }}
                    className={item === selectedItem ? "list-group-item active" : "list-group-item"}
                    key={item[valueProperty]}>
                    {item[textProperty]}
                </li>)}
        </ul>
    );
}

// ListGroup.propTypes = {
//     items: propTypes.array.isRequired,
//     onItemSelect: propTypes.func.isRequired
// };
ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};
export default ListGroup;