const PlaceList = (props) => {
    if (props.items.length === 0) {
        return (
            <div>
                <h2>No places found</h2>
            </div>
        )
    } else
        return (
            <div>Places</div>
        )
}

export default PlaceList;