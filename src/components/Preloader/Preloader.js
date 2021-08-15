import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Preloader = (props) => {
    let display = props.display;
    return (
        <div className="loader">
            <Loader
                type="Rings"
                color="#F91944"
                height={100}
                width={100}
                style={{ display: display }}
            />
        </div>
    );
};

export default Preloader;