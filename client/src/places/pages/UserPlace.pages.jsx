import PlaceList from "../components/PlaceList.component";

const UserPlace = () => {
    const PLACES = [
        {
            id: 1,
            name: "Belthangady",
            detail: "Address: Dakshina Kannada, Karnataka"
        },
        {
            id: 2,
            name: "Bangalore",
            detail: "Address: City, Karnataka"
        }
    ];

    return (
        <PlaceList items={PLACES} />
    )
}

export default UserPlace;