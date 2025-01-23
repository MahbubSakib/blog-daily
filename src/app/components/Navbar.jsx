import Link from "next/link";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";


export default function Navbar() {
    const list = <>
        <Link href={'/'}>
            <li>Home</li>
        </Link>
        <Link href={'/profile'}>
            <li>Profile</li>
        </Link>
    </>
    return (
        <div className="bg-base-200">
            <div className="navbar w-11/12 mx-auto">
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
                            {list}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-8 text-lg">
                        {list}
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <LoginLink className="btn">Log in</LoginLink>

                    <RegisterLink className="btn">Register</RegisterLink>
                </div>
            </div>
        </div>
    );
}
