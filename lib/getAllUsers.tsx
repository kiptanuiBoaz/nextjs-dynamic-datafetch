
export default async function getAllUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    //handle error
    if (!res?.ok) throw new Error("Failed to fetch users")
    return res.json()
}
