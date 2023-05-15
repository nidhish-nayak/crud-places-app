import PlaceList from "../components/PlaceList.component";

const UserPlace = () => {
    const PLACES = [
        {
            id: 1,
            title: "Belthangady",
            description: "Address: Dakshina Kannada, Karnataka"
        },
        {
            id: 2,
            title: "Bangalore",
            description: "Address: City, Karnataka"
        }
    ];

    return (
        <PlaceList items={PLACES} />
    )
}

export default UserPlace;