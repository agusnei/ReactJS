import ItemCount from "./ItemCount";

const ItemListContainer = ({data}) => {
	return (
		<div className='ItemListContainer'>
			<ItemCount data={data}/>
		</div>
	);
};

export default ItemListContainer;