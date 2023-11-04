export type MODAL_TYPES = {
	isOpen: boolean;
	onClose?: () => void;
	title: string;
	description: string;
	location: {
		lat: number;
		lng: number;
	};
	zoom: number;
};
