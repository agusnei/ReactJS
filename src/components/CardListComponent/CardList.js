import * as React from 'react';

import Cards from '../CardsComponent/Cards.js';

const CardList = ({data}) => {
    return (
            <div  className='row row-cols-1 row-cols-md-4 g-4'>
                {data.map((data) => {
                    return (
                        <div key={data.id} className='col'>
                            <div className='card'>
                                <Cards data={data} />
                            </div>	
                        </div>
                    );
                })}
            </div>
    )
    }
    
export default CardList;