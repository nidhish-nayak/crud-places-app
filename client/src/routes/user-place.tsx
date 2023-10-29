import { useParams } from "react-router-dom";
import PlaceList from "../components/place-list";


const DUMMY_PLACES = [
    {
        id: 'p1',
        title: "Paxon's Tower",
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/regions/wales/library/paxtons-tower-carmarthenshire-wales-1627409.jpg',
        address: 'South Wales Gaurdian',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    },
    {
        id: 'p3',
        title: 'Long Bridge Kartos',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://static.dezeen.com/uploads/2022/03/1915-canakkale-bridge-suspension-architecture-turkey_dezeen_1704_sq.jpg',
        address: '100 ft. Ring Road',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u3'
    },
    {
        id: 'p4',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u4'
    }, {
        id: 'p5',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u5'
    },
];

const UserPlace = () => {
    // Using useParams to get the dynamic URL, then filter only the places which belongs to the user
    let { userId } = useParams();

    return (
        <PlaceList items={
            DUMMY_PLACES.filter(place => {
                return (place.creator === userId);
            })} />
    )
}

export default UserPlace;