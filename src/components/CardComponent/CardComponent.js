import React from 'react';

const CardComponent = ({ img, title, p}) => (
	<div className='container'>
        <div className="card" style={{scrollHeight: "100px"}}>
            <img src={img} className='card-img-top' alt='p1'/>
            <div class="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{p}</p>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
	</div>
);

export default CardComponent;