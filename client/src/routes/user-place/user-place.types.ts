export type USER_PLACE_TYPES = {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
	address: string;
	location: {
		lat: number;
		lng: number;
	};
	creator: string;
};
