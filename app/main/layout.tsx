"use client";

import { useConvexAuth } from "convex/react";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

const MainPageLayout = ({
    children
}:{
    children:ReactNode
}) => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    
    if(isLoading){
        return (
            <div className="h-full flex justify-center items-center">
                <p>Loading...</p>
            </div>
        )
    }

    if (!isAuthenticated) {
        return redirect("/");
    }

    return (
        <div className="h-full">
            <main className="h-full">
                {children}
            </main>
        </div>
    )
}

export default MainPageLayout;