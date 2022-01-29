import React from 'react';

const CardComponent = ({ img, title, p,onClick, myStock }) => (
	<div className='container'>
        <div className="card" style={{scrollHeight: "100px"}}>
            <img src={img} className='card-img-top' alt='p1'/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{p}</p>
                <h3>Stock actual: {myStock}</h3>
			<button className="btn btn-primary" onClick={onClick}>Agregar al carrito</button>
            </div>
        </div>
	</div>
);

export default CardComponent;