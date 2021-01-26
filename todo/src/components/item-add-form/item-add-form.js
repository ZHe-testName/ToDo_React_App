import React from 'react';

import './item-add-form.css';

const ItemAddForm = ({createToDoItem}) => {
    return (
        <div className='item-add-form'>
            <button
                className='btn btn-outline-secondary'
                onClick={() => createToDoItem('Get Better')}>Add Item</button>
        </div>
    );
};

export default ItemAddForm;