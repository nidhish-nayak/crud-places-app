import CardContainer from './card-container';
import UserItem from './user-item';

const UserList = props => {
    if (props.items.length === 0) {
        return (
            <div className='pl-2 my-20 text-2xl font-extrabold text-center'>
                <h2>No users found</h2>
            </div>
        )
    } else
        return (
            <CardContainer>
                {props.items.map(user =>
                    <UserItem
                        key={user.id}
                        id={user.id}
                        image={user.image}
                        name={user.name}
                        placeCount={user.places}
                    />)
                }
            </CardContainer>
        )
}

export default UserList;