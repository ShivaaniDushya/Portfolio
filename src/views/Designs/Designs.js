import React from "react";

const images = [
  {
    id : 1,
    name: '- Gaming Platform Black Theme',
    src : './images/designs/Game black theme.jpg'
  },
  {
    id : 2,
    name: '- Gaming Platform Blue Theme',
    src : './images/designs/Game blue theme.jpg'
  },
  {
    id : 3,
    name: '- Music Player White Theme',
    src : './images/designs/Music.jpg'
  },
  {
    id : 4,
    name: '- Music Player Dark Theme',
    src : './images/designs/Music dark.jpg'
  },
  {
    id : 5,
    name: '- Bauhaus Effect Design',
    src : './images/designs/bauhaus-modified.jpg'
  },
  {
    id : 6,
    name: '- E-Commerce Site',
    src : './images/designs/e-commerce5.jpg'
  },
  {
    id : 7,
    name: '- Messaging App',
    src : './images/designs/Direct messaging.jpg'
  },
  {
    id : 8,
    name: '- User Profile',
    src : './images/designs/User Profile.jpg'
  },
  {
    id : 9,
    name: '- Slicer Effect',
    src : './images/designs/canve first design - SHIVI.png'
  },
  {
    id : 10,
    name: '- App Icon design',
    src : './images/designs/App icon.jpg'
  },
  {
    id : 11,
    name: '- Calculator Design',
    src : './images/designs/Calculator.jpg'
  },
  {
    id : 12,
    name: '- Card Checkout Design',
    src : './images/designs/Credit card.jpg'
  },
  {
    id : 13,
    name: '- A Landing Page',
    src : './images/designs/Landing.jpg'
  },
  {
    id : 14,
    name: '- Glassmorphism Effect',
    src : './images/designs/Glassmorphism.jpg'
  },
  {
    id : 15,
    name: '- SignUp Page',
    src : './images/designs/SignUp Page.jpg'
  },
  {
    id : 16,
    name: '- SignUp Page 2',
    src : './images/designs/SignUp2.png'
  },
  {
    id : 17,
    name: '- Event publishing page for MS Club of SLIIT',
    src : './images/designs/Events.jpg'
  },
  {
    id : 18,
    name: '- ITP Guide 2021 flyer for MS Club of SLIIT',
    src : './images/designs/flyer final.jpg'
  },
  {
    id : 19,
    name: '- Imagine cup speakers flyer for MS Club of SLIIT',
    src : './images/designs/Imagine cup - speakers.jpg'
  },
  {
    id : 20,
    name: '- Speaker page design for MS Club of SLIIT',
    src : './images/designs/Speaker.jpg'
  },
  {
    id : 21,
    name: '- .NET Conf Speaker flyer for MS Club of SLIIT',
    src : './images/designs/Sammani.jpg'
  },
  {
    id : 22,
    name: '- Home Page Design for our Web Application Group Project',
    src : './images/designs/Home.jpg'
  },

]

const Designs = () => {
    return (
      <div className="bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-64">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
           <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">"Styles Come and Go. Good Design is a Language , not a style."</h2>
          <br/>
          <br/>

          {images.map((img) => (
            <a key={img.id} className="group">
              <div className="w-full aspect-w-1 aspect-h-1  rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <p className="text-1xl font-bold text-gray-900 dark:text-white">{img.name}</p>
                <img
                  src={img.src}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <br/><br/>
            </a>
          ))} 
        </div>
      </div>
    </div>
    );
}

export default Designs;