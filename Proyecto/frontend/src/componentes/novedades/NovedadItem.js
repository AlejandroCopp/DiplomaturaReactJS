import React from 'react';

const NovedadItem = (props) => {
const { title, subtitle, imagen, body } = props;

    return (
        <div className="novedades">
            <h1>{title}</h1>
            <br></br>
            <h2>{subtitle}</h2>
            <br></br>
            <div dangerouslySetInnerHTML={{ __html: body }} /> 
            <br></br>
            <img src={imagen} /><hr />
            <br></br>

        </div>
    );
}
export default NovedadItem;