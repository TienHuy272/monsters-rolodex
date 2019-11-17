import React from 'react';
import './search-box.style.css';

export const SearchBox = (props) => (
    <input type='search' 
           placeholder={ props.placeholder } 
           className='search'
           onChange={ props.handleChange }/>
)