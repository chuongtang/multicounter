import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { newGroupMetadata } from '../App';
import { RandomID } from './RandomId';

const Header = () => {
	const { dispatchData } = useContext(AppContext);

	const handleAddNewGroup = () => {
		dispatchData({
			type: 'ADD_GROUP', payload: {
				groupId: { RandomID }, newGroup: newGroupMetadata
			}
		});
	};
	return (
		<header className="bg-primary px-5">
			<div className="text-light d-flex justify-content-center align-items-center ">
				<h3 className="p-2 mx-6">Add counter ➦ </h3>
				<button
					onClick={ handleAddNewGroup }
					className=" btn btn-sm bg-light text-primary border px-3 mr-3"
				> ⦿	</button>
			</div>
		</header>
	);
};

export default Header;
