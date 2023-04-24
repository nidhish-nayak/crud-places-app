import UserList from "../components/UserList/UserList.component";

const User = () => {
    const USERS = [{
        id: 1,
        name: "John",
        image: "myimage",
        places: 3
    }];

    return (
        <UserList items={USERS} />
    )
}

export default User;