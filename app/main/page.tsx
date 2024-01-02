"use client";

import { useUser } from "@clerk/clerk-react";
import React from "react";

const MainPage = () => {
    const { user } = useUser();

    return (
        <div className='h-full flex justify-center items-center'>
            <div className='flex flex-col items-center'>
                <p>Welcome! {user?.fullName}</p>
                <p>Main Page</p>
            </div>
        </div>
    )
}

export default MainPage