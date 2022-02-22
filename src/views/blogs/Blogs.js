import * as React from 'react';
import './blogs.css';

const Blogs = () => {
    return(
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-2 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-3">

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <a href='https://medium.com/ms-club-of-sliit/what-is-github-copilot-c2317a8d686'>
            <img src="./images/speaking/What is GitHub Copilot-poster.jpg"/>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 a">What is GitHub Copilot?</h2>
            <h2 className="font-medium tracking-tight text-gray-900 sm:text-1xl b">
                This blog is about the GitHub Copilot. GitHub Copilot is an AI programmer which suggests line completions and entire function bodies you type which is 
                powered by the Open AI Codex system.
            </h2>
            </a>
            </div>
            

            
        </div>

    );
}

export default Blogs;