import UserItem from './UserItem.component';

const UserList = props => {
    if (props.items.length === 0) {
        return (
            <div className='p-2 m-4'>
                <h2>No users found</h2>
            </div>
        )
    } else
        return (
            <ul className='grid md:m-2 md:p-1 lg:m-4 lg:p-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {props.items.map(user =>
                    <UserItem
                        key={user.id}
                        id={user.id}
                        image={user.image}
                        name={user.name}
                        placeCount={user.places}
                    />)
                }
            </ul>
        )
}

export default UserList;