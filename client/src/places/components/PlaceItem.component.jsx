const PlaceItem = (props) => {
    return (
        <li className="flex flex-col justify-between p-4 mx-4 my-4 text-white rounded-lg sm:mx-auto sm:w-96 bg-gradient-to-r from-neutral-950 to-neutral-900">
            <div>
                <div className="mb-2">
                    <img className="rounded-md drop-shadow-md sm:w-96 sm:h-60" src={props.image} alt={props.title} />
                </div>
                <div className="mb-4">
                    <h2 className="p-1 -mb-2 font-sans text-xl font-bold">{props.title}</h2>
                    <h3 className="p-1 mb-4 font-sans text-md">{props.address}</h3>
                    <p className="p-1 font-sans text-sm">{props.description}</p>
                </div>
            </div>
            <div className="flex">
                <button className="px-2 py-2 m-1 text-xs font-normal text-black transition-all duration-200 ease-linear bg-white rounded-md cursor-pointer sm:px-3 sm:font-semibold sm:text-sm drop-shadow-xl hover:bg-teal-300 hover:text-gray-900">VIEW ON MAP</button>
                <button className="px-2 py-2 m-1 text-xs font-normal transition-all duration-200 ease-linear bg-teal-900 rounded-md cursor-pointer sm:px-3 sm:font-semibold sm:text-sm drop-shadow-xl hover:bg-teal-300 hover:text-gray-900">EDIT</button>
                <button className="px-2 py-2 m-1 text-xs font-normal transition-all duration-200 ease-linear bg-teal-900 rounded-md cursor-pointer sm:px-3 sm:font-semibold sm:text-sm drop-shadow-xl hover:bg-red-600">DELETE</button>
            </div>
        </li>
    )
}

export default PlaceItem;