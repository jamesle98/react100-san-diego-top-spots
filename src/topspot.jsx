import React from 'react';

export default props => (
    <div className='well border border-white'>
        <h4 className='text-light text-center'>{props.name}</h4>
        <p className='text-light text-center'>{props.description}</p>
        <a className='button btn btn-primary' href={'https://maps.google.com/?q=' + props.location}>Open in Google Maps</a>
    </div>

);