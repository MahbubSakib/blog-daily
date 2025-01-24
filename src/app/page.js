import Navbar from "./components/Navbar";
import Link from "next/link";

// Fetch the list of blog posts
async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }
    return response.json();
}

export default async function Page() {
    const posts = await fetchPosts();

    return (
        <div>
            <Navbar />
            <div className="w-10/12 mx-auto">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12 rounded-lg shadow-md mt-5">
                    <h1 className="text-4xl font-extrabold text-center">Welcome to my Blog</h1>
                    <p className="mt-4 text-lg text-center">
                        Discover insightful posts, ideas, and stories. Click on a post to dive in!
                    </p>
                </div>

                <div className="my-12">
                    <h2 className="text-2xl font-bold text-center my-6">Blog Posts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className="p-6 bg-slate-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                            >
                                <h3 className="text-lg font-semibold mb-2 first-letter:uppercase">{post.title}</h3>
                                <Link
                                    href={`/blog/${post.id}`}
                                    className="text-blue-600 hover:underline mt-4 block"
                                >
                                    Read More ...
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
