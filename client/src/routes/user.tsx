import UserList from "../components/user-list";

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
        {
            id: 4,
            name: "Jayaraman Sashi",
            image: "https://img.icons8.com/external-avatar-andi-nur-abdillah/64/null/external-avatar-business-avatar-circle-avatar-andi-nur-abdillah-14.png",
            places: 6,
        },
        {
            id: 5,
            name: "Alexander Brian",
            image: "https://img.icons8.com/external-avatar-andi-nur-abdillah/64/null/external-avatar-business-avatar-circle-avatar-andi-nur-abdillah-14.png",
            places: 2,
        },
        {
            id: 6,
            name: "Mark Zuckerburg",
            image: "https://img.icons8.com/external-avatar-andi-nur-abdillah/64/null/external-avatar-business-avatar-circle-avatar-andi-nur-abdillah-14.png",
            places: 3,
        },
    ];

    return (
        <UserList items={USERS} />
    )
}

export default User;