import * as React from 'react';
import './blogs.css';

const Blogs = () => {
    return(
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">

        <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
            
            <img
                src="/images/speaking/What is GitHub Copilot-poster.jpg"
                alt="Shivaani Dushya"
                className="bg-gray-100 rounded-lg"
                width={1000}
                height={1000}
            />
            
            </div>

        <div>
            
            <p className="mt-5 text-gray-500 sm:text-2xl">
            What is GitHub Copilot?
            </p>
            <p className="mt-5 text-gray-500 sm:text-lg">
            This blog is about the GitHub Copilot. GitHub Copilot is an AI programmer which suggests line completions and entire function bodies you type which is 
            powered by the Open AI Codex system.
            </p><br/>
            <a href='https://medium.com/ms-club-of-sliit/what-is-github-copilot-c2317a8d686'>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 border border-gray-400 rounded shadow sm:text-sm">
            Blog Link
            </button>
            </a>
        <br/>
        <br/>

        <div className="xl:grid-cols-32 xl:gap-x-4">

        </div>
        </div>



        <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
            
            <img
                src="/images/speaking/redux toolkit.png"
                alt="Shivaani Dushya"
                className="bg-gray-100 rounded-lg"
                width={1000}
                height={1000}
            />
            
            </div>

        <div>
            
            <p className="mt-5 text-gray-500 sm:text-2xl">
            State Management with Redux Toolkit.
            </p>
            <p className="mt-5 text-gray-500 sm:text-lg">
            This blog is about a brief analytic on Redux vs Redux Toolit. Redux toolkit will be helpful for both beginners and developers 
            who wants to reduce the biolerplate code s in their application.
            </p><br/>
            <a href='https://medium.com/ms-club-of-sliit/what-is-github-copilot-c2317a8d686'>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 border border-gray-400 rounded shadow sm:text-sm">
            Blog Link
            </button>
            </a>
        <br/>
        <br/>

        <div className="xl:grid-cols-32 xl:gap-x-4">

        </div>
        </div>

        </div>

    );
}

export default Blogs;