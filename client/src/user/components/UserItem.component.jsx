const UserItem = props => {
    return (
        <li className="m-2 text-white transition-all duration-300 ease-linear scale-95 rounded-md cursor-pointer drop-shadow-sm bg-gradient-to-r from-gray-900 to-neutral-700 w-72 hover:drop-shadow-2xl hover:scale-100">
            <div className="flex items-center justify-start p-4">
                <div>
                    <img src={props.image} alt="alt" />
                </div>
                <div className="px-2">
                    <p className="font-bold">{props.name}</p>
                    <p>{props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}</p>
                </div>
            </div>
        </li>
    )
}

export default UserItem;