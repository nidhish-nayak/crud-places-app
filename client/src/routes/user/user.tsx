import CardContainer from "../../components/card-container/card-container";
import UserCard from "../../components/user-card/user-card";

import { USER_TYPES } from "./user.types";

const User = () => {
	const USERS: USER_TYPES[] = [
		{
			id: 1,
			name: "John Martin",
			image:
				"https://img.icons8.com/external-avatar-andi-nur-abdillah/64/null/external-avatar-business-avatar-circle-avatar-andi-nur-abdillah-14.png",
			places: 3,
		},
		{
			id: 2,
			name: "Nidhish D Nayak",
			image:
				"https://img.icons8.com/external-avatar-andi-nur-abdillah/64/null/external-avatar-business-avatar-circle-avatar-andi-nur-abdillah-14.png",
			places: 7,
		},
		{
			id: 3,
			name: "Kevin Ashton",
			image:
				"https://img.icons8.com/external-avatar-andi-nur-abdillah/64/null/external-avatar-business-avatar-circle-avatar-andi-nur-abdillah-14.png",
			places: 5,
		},
		{
			id: 4,
			name: "Jayaraman Sashi",
			image:
				"https://img.icons8.com/external-avatar-andi-nur-abdillah/64/null/external-avatar-business-avatar-circle-avatar-andi-nur-abdillah-14.png",
			places: 6,
		},
		{
			id: 5,
			name: "Alexander Brian",
			image:
				"https://img.icons8.com/external-avatar-andi-nur-abdillah/64/null/external-avatar-business-avatar-circle-avatar-andi-nur-abdillah-14.png",
			places: 2,
		},
		{
			id: 6,
			name: "Mark Zuckerburg",
			image:
				"https://img.icons8.com/external-avatar-andi-nur-abdillah/64/null/external-avatar-business-avatar-circle-avatar-andi-nur-abdillah-14.png",
			places: 3,
		},
	];

	return USERS ? (
		<CardContainer>
			{USERS.map((user) => (
				<UserCard
					key={user.id}
					id={user.id}
					image={user.image}
					name={user.name}
					places={user.places}
				/>
			))}
		</CardContainer>
	) : (
		<div className="pl-2 my-20 text-2xl font-extrabold text-center">
			<h2>No users found</h2>
		</div>
	);
};

export default User;
