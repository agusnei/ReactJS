import * as React from 'react';
//Link roter dom
import {Link} from "react-router-dom";

import Cards from '../CardsComponent/Cards.js';

const CardList = ({data}) => {
    
    
    return (
            <div  className='row row-cols-1 row-cols-md-4 g-4'>
                {data.map((data) => {
                    return (
                            <div className='card col' key={data.id} >
                                <Link to={`/detail/${data.id}`}>
                                    <Cards data={data} />
                                </Link>
                            </div>
                    );
                })}
            </div>
    );
};
    
export default CardList;