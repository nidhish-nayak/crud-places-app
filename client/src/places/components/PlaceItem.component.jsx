const PlaceItem = (props) => {
    return (
        <li className="flex flex-col justify-between p-4 mx-4 my-4 text-white rounded-lg bg-neutral-900 drop-shadow-sm">
            <div>
                <div className="mb-2">
                    <img className="rounded-md md:object-contain md:h-60 md:w-96" src={props.image} alt={props.title} />
                </div>
                <div className="mb-4">
                    <h2 className="p-1 -mb-2 font-sans text-xl font-bold">{props.title}</h2>
                    <h3 className="p-1 mb-4 font-sans text-md">{props.address}</h3>
                    <p className="p-1 font-sans text-sm">{props.description}</p>
                </div>
            </div>
            <div className="flex">
                <button className="px-3 py-2 m-1 text-xs font-semibold transition-all duration-200 ease-linear bg-teal-900 rounded-md cursor-pointer sm:text-sm drop-shadow-xl hover:bg-teal-300 hover:text-gray-900">VIEW ON MAP</button>
                <button className="px-3 py-2 m-1 text-xs font-semibold transition-all duration-200 ease-linear bg-teal-900 rounded-md cursor-pointer sm:text-sm drop-shadow-xl hover:bg-teal-300 hover:text-gray-900">EDIT</button>
                <button className="px-3 py-2 m-1 text-xs font-semibold transition-all duration-200 ease-linear bg-teal-900 rounded-md cursor-pointer sm:text-sm drop-shadow-xl hover:bg-teal-300 hover:text-gray-900">DELETE</button>
            </div>
        </li>
    )
}

export default PlaceItem;