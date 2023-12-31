'use client';

import React from 'react';

import { useConvexAuth } from 'convex/react';
import { SignInButton, UserButton } from "@clerk/clerk-react";

const Navigation = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    return (
        <div className='w-full border-b'>
            <div className='m-2 flex justify-end'>
                {isLoading && (
                    <p>Loading...</p>
                )}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal" redirectUrl="/main">
                            <div className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-zinc-50 text-zinc-600 inline-block cursor-pointer">
                                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-zinc-600 group-hover:h-full opacity-90"></span>
                                <span className="relative group-hover:text-white">Login</span>
                            </div>
                        </SignInButton>
                    </>
                )}
                {isAuthenticated && !isLoading && (
                    <UserButton
                        afterSignOutUrl="/"
                    />
                )}
            </div>
        </div>
    )
}

export default Navigation;