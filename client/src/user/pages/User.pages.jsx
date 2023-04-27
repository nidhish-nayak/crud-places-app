import UserList from "../components/UserList/UserList.component";

const User = () => {
    const USERS = [
        {
            id: 1,
            name: "John Martin",
            image: "https://img.icons8.com/external-avatar-andi-nur-abdillah/64/null/external-avatar-business-avatar-circle-avatar-andi-nur-abdillah-14.png",
            places: 3,
        },
        {
            id: 2,
            name: "Nidhish D Nayak",
            image: "https://img.icons8.com/external-avatar-andi-nur-abdillah/64/null/external-avatar-business-avatar-circle-avatar-andi-nur-abdillah-14.png",
            places: 7,
        },
        {
            id: 3,
            name: "Kevin Ashton",
            image: "https://img.icons8.com/external-avatar-andi-nur-abdillah/64/null/external-avatar-business-avatar-circle-avatar-andi-nur-abdillah-14.png",
            places: 5,
        },
    ];

    return (
        <UserList items={USERS} />
    )
}

export default User;