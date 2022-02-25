import * as React from 'react';

const MessageSuccess = ({ purchaseID }) => {
	return (
		<div className="alert alert-success d-flex align-items-center" role="alert">
			
			<div>
			Gracias por su compra! su id de transacción es: {purchaseID}
			</div>
		</div>
	);
};

export default MessageSuccess;
