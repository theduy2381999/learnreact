import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

AlbumItem.propTypes = {
    albumItem : PropTypes.array.isRequired,
};

function AlbumItem({albumItem}) {
    return (
        <div>
            <img src={albumItem.url}></img>
            <p>{albumItem.title}</p>
            
        </div>
    );
}

export default AlbumItem;