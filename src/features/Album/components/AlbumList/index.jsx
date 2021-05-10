import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../AlbumItem';
import './style.scss'

AlbumList.propTypes = {
    albumList : PropTypes.array.isRequired,
};

function AlbumList({albumList}) {
    return (
        <ul>
            {albumList.map( alb => (
                <li key={alb.id}>
                    <AlbumItem albumItem={alb}></AlbumItem>
                </li>
            ))}    
        
            
        </ul>
    );
}

export default AlbumList;