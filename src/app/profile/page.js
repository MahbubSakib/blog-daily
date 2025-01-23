import Navbar from "../components/Navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const user = await getUser();
    const userName = user?.given_name;


    // Check authentication
    const authenticated = await isAuthenticated();

    if (!authenticated) {
        // Redirect to the login page if not authenticated
        redirect("/api/auth/login"); // Replace this URL if your login route is different
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10 w-10/12 mx-auto text-center">
            <h2 className="text-2xl font-semibold">Hi {userName}!</h2>
            <p className="text-gray-600 mt-1">Welcome to your profile.</p>
            </div>
        </div>
    );
}
