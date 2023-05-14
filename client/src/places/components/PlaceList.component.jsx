const PlaceList = (props) => {
    if (props.items.length === 0) {
        return (
            <div>
                <h2>No users found</h2>
            </div>
        )
    } else
        return (
            <div></div>
        )
}

export default PlaceList;