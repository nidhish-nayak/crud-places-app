const Avatar = (props) => {
	return (
		<div className="h-16 w-16">
			<img className="object-scale-down" src={props.myAvatar} alt="alt" />
		</div>
	);
};
export default Avatar;
