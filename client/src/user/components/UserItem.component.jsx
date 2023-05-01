const UserItem = props => {
    return (
        <li>
            <div>
                <div>
                    <img src={props.image} alt="alt" />
                </div>
                <div>
                    <h3>{props.name}</h3>
                    <h4>{props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}</h4>
                </div>
            </div>
        </li>
    )
}

export default UserItem;