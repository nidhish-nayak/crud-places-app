const PlaceItem = (props) => {
    return (
        <li className="w-64 m-2 text-white transition-all ease-linear scale-95 rounded-md cursor-pointer duration-250 drop-shadow-sm bg-gradient-to-r from-gray-900 to-neutral-700 sm:w-72 hover:drop-shadow-2xl hover:scale-100">
            <div className="flex items-center justify-start p-4">
                <div className="px-2 font-poppins">
                    <p className="font-bold">{props.title}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </li>
    )
}

export default PlaceItem;