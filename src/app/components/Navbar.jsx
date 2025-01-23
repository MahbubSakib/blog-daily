import Link from "next/link";
import { LoginLink, LogoutLink, RegisterLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
    // Fetch user session details
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const isAuthenticated = !!user;
    const userName = user?.given_name || "User";

    const navLinks = (
        <>
            <Link href={'/'}>
                <li>Home</li>
            </Link>
            <Link href={'/profile'}>
                <li>Profile</li>
            </Link>
        </>
    );

    return (
        <div className="bg-base-200">
            <div className="navbar w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content space-y-8 bg-base-100 text-lg rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <Link href={'/'}>
                        <p className="btn btn-ghost text-xl">BlogDaily</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-8 text-lg">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    {!isAuthenticated ? (
                        <>
                            <LoginLink className="btn btn-primary px-8">Log in</LoginLink>
                            <RegisterLink className="btn btn-secondary px-8">Register</RegisterLink>
                        </>
                    ) : (
                        <>
                            <p className="text-sm">Welcome, {userName}!</p>
                            <LogoutLink className="btn btn-error px-8">Log out</LogoutLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
