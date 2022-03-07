import { CartState } from '../../Context'
//Components
import CardList from './CardList.js'

const CardListComponent = () => {
	const {products } = CartState();

	return (
		<div>
			<CardList products={products} />
		</div> 
	);
};

export default CardListComponent;