import { Link } from "react-router-dom";
import Avatar from "../components/Avatar.component";
import Card from "../components/Card.component";

const UserItem = props => {
    return (
        // Wrapping a div element to create a hover effect
        <div className="transition-all duration-200 ease-linear scale-95 hover:scale-100">
            <Card>
                <Link to={`/u${props.id}/places`}>
                    <div className="flex items-center justify-start p-4">
                        <Avatar myAvatar={props.image} />
                        <div className="px-2 font-poppins">
                            <p className="font-bold">{props.name}</p>
                            <p>{props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}</p>
                        </div>
                    </div>
                </Link>
            </Card>
        </div>
    )
}

export default UserItem;