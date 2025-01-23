import Navbar from "../../components/Navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

async function fetchPost(id) {
    const { isAuthenticated } = getKindeServerSession();
    const authenticated = await isAuthenticated();

    if (!authenticated) {
        // Redirect to the login page if not authenticated
        redirect("/api/auth/login"); // Replace this URL if your login route is different
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch post");
    }
    return response.json();
}

export default async function BlogDetails({ params }) {
    const { id } = await params;

    const post = await fetchPost(id);

    return (
        <div>
            <Navbar />
            <div className="my-6 w-10/12 mx-auto">
                <h1 className="text-3xl font-bold text-center uppercase">{post.title}</h1>
                <p className="mt-8 text-gray-700 capitalize">{post.body}</p>
            </div>
        </div>
    );
}
