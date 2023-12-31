export default async function getUser(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    //handle error
    if (!res.ok) undefined

    return res.json()
}