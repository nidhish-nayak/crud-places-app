import { AVATAR_TYPES } from "./avatar.types";

const Avatar: React.FC<AVATAR_TYPES> = (props) => {
	return (
		<div className="w-16 h-16">
			<img className="object-scale-down" src={props.image} alt="alt" />
		</div>
	);
};

export default Avatar;
