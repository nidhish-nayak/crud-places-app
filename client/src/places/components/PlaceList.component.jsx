import PlaceItem from './PlaceItem.component';

const PlaceList = (props) => {
    if (props.items.length === 0) {
        return (
            <div>
                <h2>No places found</h2>
            </div>
        )
    } else
        return (
            <div>
                {props.items.map(place =>
                    <PlaceItem
                        key={place.id}
                        id={place.id}
                        image={place.image}
                        title={place.title}
                        description={place.description}
                        address={place.address}
                        creatorId={place.creator}
                        coordinates={place.coordinates}
                    />
                )}
            </div>
        )
}

export default PlaceList;