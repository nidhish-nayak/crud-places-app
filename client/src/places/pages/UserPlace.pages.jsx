import PlaceList from "../components/PlaceList.component";

const UserPlace = () => {

    const DUMMY_PLACES = [
        {
            id: 'p1',
            title: "Paxon's Tower",
            description: 'One of the most famous sky scrapers in the world! ddddd ddd ddd ddd ddddd dddd dddd ddd dddd ddddd ddd ddd ddd ddddd dddd dddd ddd ddddddddd ddd ddd ddd ddddd dddd dddd ddd ddddddddd ddd ddd ddd ddddd dddd dddd ddd dddd d dddd ddd',
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
            id: 'p1',
            title: 'Empire State Building',
            description: 'One of the most famous sky scrapers in the world! ddddd ddd ddd ddd ddddd dddd dddd ddd dddd ddddd ddd ddd ddd ddddd dddd dddd ddd ddddddddd ddd ddd ddd ddddd dddd dddd ddd ddddddddd ddd ddd ddd ddddd dddd dddd ddd dddd d dddd ddd',
            imageUrl: 'https://static.dezeen.com/uploads/2022/03/1915-canakkale-bridge-suspension-architecture-turkey_dezeen_1704_sq.jpg',
            address: '20 W 34th St, New York, NY 10001',
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
        }, {
            id: 'p1',
            title: 'Empire State Building',
            description: 'One of the most famous sky scrapers in the world! ddddd ddd ddd ddd ddddd dddd dddd ddd dddd ddddd ddd ddd ddd ddddd dddd dddd ddd ddddddddd ddd ddd ddd ddddd dddd dddd ddd ddddddddd ddd ddd ddd ddddd dddd dddd ddd dddd d dddd ddd',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
            address: '20 W 34th St, New York, NY 10001',
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
        }, {
            id: 'p1',
            title: 'Empire State Building',
            description: 'One of the most famous sky scrapers in the world! ddddd ddd ddd ddd ddddd dddd dddd ddd dddd ddddd ddd ddd ddd ddddd dddd dddd ddd ddddddddd ddd ddd ddd ddddd dddd dddd ddd ddddddddd ddd ddd ddd ddddd dddd dddd ddd dddd d dddd ddd',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
            address: '20 W 34th St, New York, NY 10001',
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
    ];

    return (
        <PlaceList items={DUMMY_PLACES} />
    )
}

export default UserPlace;