import img from "./Logo/logo.png";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
	return (
		<div className='ItemListContainer'>
			<img src={img} alt='logo-carro' width="50px"/>
			<ItemCount/>
		</div>
	);
};

export default ItemListContainer;