import img from "../Logo/logo.png";
import ItemCount from "./ItemCount";

const ItemListContainer = ({data}) => {
	return (
		<div className='ItemListContainer'>
			{/* <img src={img} alt='logo-carro' width="50px"/> */}
			<ItemCount data={data}/>
		</div>
	);
};

export default ItemListContainer;