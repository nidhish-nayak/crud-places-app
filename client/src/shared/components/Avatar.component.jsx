const Avatar = (props) => {
    return (
        <div className="w-16 h-16">
            <img className="object-scale-down" src={props.myAvatar} alt="alt" />
        </div>
    )
}
export default Avatar;