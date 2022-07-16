import React from 'react';

const Filter = ({ filter, setFilter }) => {

    const handleFilter = (event) => {
        setFilter(event.target.value.toLowerCase())
    }

    return (
        <div>
            find countries <input value={filter} onChange={handleFilter} />
        </div>
    );
};

export default Filter;