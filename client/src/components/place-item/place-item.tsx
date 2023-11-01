import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../../features/modal/modal";
import { closeModal, openModal } from "../../features/modal/modalSlice";

import type { AppDispatch, RootState } from "../../app/store";
import { MODAL_TYPES } from "../../features/modal/modal.types";
import { USER_PLACE_TYPES } from "../../routes/user-place/user-place.types";

const PlaceItem: React.FC<USER_PLACE_TYPES> = (props) => {
	const dispatch: AppDispatch = useDispatch();
	const { isOpen, title, description }: MODAL_TYPES = useSelector(
		(state: RootState) => state.modal
	);

	const handleViewClick = () => {
		dispatch(openModal({ title: title, description: description }));
	};

	const handleCloseModal = () => {
		dispatch(closeModal());
	};

	return (
		<li className="flex flex-col justify-between mx-4 my-4 text-white rounded-md drop-shadow-xl sm:mx-auto sm:w-96 bg-gradient-to-r from-zinc-950 to-zinc-900">
			<div>
				<div className="mb-2">
					<img
						className="sm:w-96 sm:h-60 rounded-t-md"
						src={props.imageUrl}
						alt={props.title}
					/>
				</div>
				<div className="m-4">
					<h2 className="p-1 -mb-2 font-sans text-xl font-bold">
						{props.title}
					</h2>
					<h3 className="p-1 mb-4 font-sans text-md">{props.address}</h3>
					<p className="p-1 font-sans text-sm">{props.description}</p>
				</div>
			</div>
			<div className="flex m-4">
				<button
					onClick={handleViewClick}
					className="px-2 py-2 m-1 text-xs font-normal text-black transition-all duration-200 ease-linear bg-white rounded-md cursor-pointer sm:px-3 sm:font-semibold sm:text-sm hover:bg-teal-300 hover:text-neutral-900"
				>
					VIEW ON MAP
				</button>
				<Modal
					isOpen={isOpen}
					onClose={handleCloseModal}
					title={props.title}
					description={props.address}
				/>
				<button className="px-2 py-2 m-1 text-xs font-normal transition-all duration-200 ease-linear bg-green-600 rounded-md cursor-pointer sm:px-3 sm:font-semibold sm:text-sm hover:bg-teal-300 hover:text-neutral-900">
					EDIT
				</button>
				<button className="px-2 py-2 m-1 text-xs font-normal transition-all duration-200 ease-linear bg-red-600 rounded-md cursor-pointer sm:px-3 sm:font-semibold sm:text-sm hover:bg-teal-300 hover:text-neutral-900">
					DELETE
				</button>
			</div>
		</li>
	);
};

export default PlaceItem;
