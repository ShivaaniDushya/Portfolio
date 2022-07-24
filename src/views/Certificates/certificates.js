import React from "react";

const images = [
  {
    id : 1,
    name: '- Microsoft Learn Student Ambassador - New member since 2022',
    src : './images/certificate/MLSA new member.jpg'
  },
  {
    id : 2,
    name: '- AWS Cloud practitioner essentials training',
    src : './images/certificate/AWS.jpg'
  },
  {
    id : 3,
    name: '- Cloud computing with Microsoft Azure - Webinar',
    src : './images/certificate/MLSA new member.jpg'
  },
]

const Certificates = () => {
    return (
      <div className="bg-sky-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-64">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
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

export default Certificates;