import './UserItem.styles.css';

const UserItem = props => {
    return (
        <li className="user-item">
            <div className='user-item__content'>
                <div className="user-item__image">
                    <img src={props.image} alt="alt" />
                </div>
                <div className="user-item__info">
                    <h3>{props.name}</h3>
                    <h4>{props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}</h4>
                </div>
            </div>
        </li>
    )
}

export default UserItem;