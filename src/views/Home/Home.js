import React from "react";
import './home.css';

const features = [
  // { name: 'Education', description: 'Designed by Good Goods, Inc.' },
  // { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  // { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  // { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  // { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  // { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]

  const products = [
    {
      id: 1,
      name: 'C Programming',
      imageSrc: './images/tools/c.png',
      imageAlt: 'C',
    },
    {
      id: 2,
      name: 'C++',
      imageSrc: './images/tools/c++.png',
      imageAlt: 'C++',
    },
    {
      id: 3,
      name: 'Java',
      imageSrc: './images/tools/java.png',
      imageAlt: 'Java',
    },
    {
      id: 4,
      name: 'JavaScript',
      imageSrc: './images/tools/js.png',
      imageAlt: 'JavaScript',
    },
    {
      id: 5,
      name: 'TypeScript',
      imageSrc: './images/tools/ts.png',
      imageAlt: 'TypeScript',
    },
    {
      id: 6,
      name: 'PHP',
      imageSrc: './images/tools/php.png',
      imageAlt: 'PHP',
    },
    {
      id: 7,
      name: 'HTML',
      imageSrc: './images/tools/html.png',
      imageAlt: 'HTML',
    },
    {
      id: 8,
      name: 'CSS',
      imageSrc: './images/tools/css.png',
      imageAlt: 'CSS',
    },
    {
      id: 9,
      name: 'Angular',
      imageSrc: './images/tools/angular.png',
      imageAlt: 'Angular',
    },
    {
      id: 10,
      name: 'Spring Boot',
      imageSrc: './images/tools/spring.png',
      imageAlt: 'Spring Boot',
    },
    {
      id: 11,
      name: 'ReactJs',
      imageSrc: './images/tools/react.png',
      imageAlt: 'Spring Boot',
    },
    
  ]

  const tools =[
    {
      id: 1,
      name: 'VS Code',
      imageSrc: './images/tools/vscode.png',
      imageAlt: 'C',
    },
    {
      id: 2,
      name: 'IntelliJ',
      imageSrc: './images/tools/in.png',
      imageAlt: 'C++',
    },
    {
      id: 3,
      name: 'Eclipse',
      imageSrc: './images/tools/eclipse.png',
      imageAlt: 'Java',
    },
    {
      id: 4,
      name: 'Android Studio',
      imageSrc: './images/tools/andro.png',
      imageAlt: 'JavaScript',
    },
    {
      id: 5,
      name: 'MySQL',
      imageSrc: './images/tools/mysql.png',
      imageAlt: 'TypeScript',
    },
    {
      id: 6,
      name: 'MSSQL',
      imageSrc: './images/tools/mssql.png',
      imageAlt: 'PHP',
    },
    {
      id: 7,
      name: 'MongoDB',
      imageSrc: './images/tools/MongoDB.png',
      imageAlt: 'HTML',
    },
    {
      id: 8,
      name: 'SQLite',
      imageSrc: './images/tools/sqlite-logo.png',
      imageAlt: 'CSS',
    },
    {
      id: 9,
      name: 'GitHub',
      imageSrc: './images/tools/github.png',
      imageAlt: 'MySQL',
    },
    {
      id: 10,
      name: 'GitLab',
      imageSrc: './images/tools/lab.png',
      imageAlt: 'C++',
    },
    {
      id: 11,
      name: 'Figma',
      imageSrc: './images/tools/figma.png',
      imageAlt: 'Angular',
    },
    {
      id: 12,
      name: 'Canva',
      imageSrc: './images/tools/canva.png',
      imageAlt: 'Spring Boot',
    },
    {
      id: 13,
      name: 'Linux',
      imageSrc: './images/tools/Linux-Logo.png',
      imageAlt: 'Spring Boot',
    },
    {
      id: 14,
      name: 'Adobe Photoshop',
      imageSrc: './images/tools/photoshop.png',
      imageAlt: 'Spring Boot',
    },
    {
      id: 15,
      name: 'BrowserStack',
      imageSrc: './images/tools/browserstack.png',
      imageAlt: 'Spring Boot',
    },
    
  ]

const Home = () => {

  return (
    <div className="bg-white">
    <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">Shivaani Dushya Rajkumar</h2>
        <p className="mt-5 text-gray-500 sm:text-1xl">
          Software Engineering Undergraduate at SLIIT | Software Engineering Intern at Pearson | Commitee Member at MS Club of SLIIT |
           Blogger | Developer | Designer | Math Enthusiasist 
        </p>

        {/* <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl> */}
      </div>
      <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
      
        <img
          src="./images/tools/shivi-removebg-preview.png"
          alt="Shivaanio Dushya"
          className="bg-gray-100 rounded-lg"
          width={1000}
          height={1000}
        />
      
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Languages and Frameworks
          </p>
        </div>
        </div>

        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <h2 className="sr-only">Products</h2> */}

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-64">
          {products.map((product) => (
            <a key={product.id} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              
            </a>
          ))}
        </div>
      </div>
      <br/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tools and Technologies
          </p>
        </div>
        </div>

        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <h2 className="sr-only">Products</h2> */}

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-64">
          {tools.map((tool) => (
            <a key={tool.id} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={tool.imageSrc}
                  alt={tool.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{tool.name}</h3>
              
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;