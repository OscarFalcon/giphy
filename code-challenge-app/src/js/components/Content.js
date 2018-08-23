import React from 'react';

const Content = ( props ) => (
    <div>
        <iframe
            src={props.media}
            width={'480'}
            height={'480'}
            frameBorder={'0'}
            allowFullScreen>
        </iframe>
        <p>
            <a href={props.link}> {props.advertisement} </a>
        </p>
    </div>
);

export default Content;