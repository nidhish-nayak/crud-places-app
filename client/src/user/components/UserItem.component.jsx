import { Link } from "react-router-dom";
import Avatar from "../../shared/components/Avatar.component";

const UserItem = props => {
    return (
        <li className="w-64 m-2 text-white transition-all ease-linear scale-95 rounded-md cursor-pointer duration-250 drop-shadow-sm bg-gradient-to-r from-gray-900 to-neutral-700 sm:w-72 hover:drop-shadow-2xl hover:scale-100">
            <Link to={`/${props.id}/places`}>
                <div className="flex items-center justify-start p-4">
                    <Avatar myAvatar={props.image} />
                    <div className="px-2 font-poppins">
                        <p className="font-bold">{props.name}</p>
                        <p>{props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}</p>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default UserItem;