export default async function getUserPosts(userId: string) {
    // can be a applied to SSG or SSR
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        { next: { revalidate: 60 } }
    );

    if (!res.ok) undefined
    return res.json()
}