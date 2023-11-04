import { createPortal } from "react-dom";
import { MODAL_TYPES } from "./modal.types";

import Map from "../../components/map/map.tsx";

const Modal = ({
	isOpen,
	onClose,
	title,
	description,
	location,
	zoom,
}: MODAL_TYPES) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div>
			{createPortal(
				<div className="fixed inset-0 z-50 flex items-center justify-center m-2 sm:m-0">
					<div
						className="fixed inset-0 bg-gray-900 opacity-50"
						onClick={onClose}
					></div>
					<div className="z-10 flex flex-col gap-4 p-6 text-black bg-white rounded-lg shadow-lg w-96">
						<h2 className="text-xl font-bold">{title}</h2>
						<p className="">{description}</p>
						<Map location={location} zoom={zoom} />
						<button
							className="px-4 py-2 font-bold text-white bg-teal-700 rounded w-min hover:bg-teal-900"
							onClick={onClose}
						>
							Close
						</button>
					</div>
				</div>,
				document.body
			)}
		</div>
	);
};

export default Modal;
