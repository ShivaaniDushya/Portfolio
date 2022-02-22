import React from "react";

const Youtube = ()=>{
    return(
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-2 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-3">
            
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <a href='https://youtu.be/_-i8p54OaGM'>
            <img src="./images/speaking/ITP-GUIDE Shivaani-02.png"/>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 a">Introduction to REST API and Postman</h2>
            <h2 className="font-medium tracking-tight text-gray-900 sm:text-1xl b">
            ITP Guide (Industry Training Project) was a special event , which was organized and conducted by the MS Club of SLIIT for the past two years.
            On 16th of January 2022, we conducted the ITP Guide for the third consecutive time. The event mainly focuses on giving an awareness on how to create industry level projects.
            I have done a session on "Introduction to Restful Web Services and Postman".
            </h2>
            </a>
            </div>

        </div>
    );
}

export default Youtube;