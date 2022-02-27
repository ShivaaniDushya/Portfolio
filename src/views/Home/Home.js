import React from "react";
import './home.css';
import { Facebook , LinkedIn, GitHub } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


const features = [
  // { name: 'Education', description: 'Designed by Good Goods, Inc.' },
  // { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  // { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  // { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  // { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  // { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

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
          I am a Software Engineering Undergraduate at SLIIT and a Software Engineering Intern at Pearson Lanka (pvt) ltd. My interests are 
          in Full Stack Development, Mobile application Development and UI/UX Designing. I Love being a Mathematics Enthusiast. Skilled in 
          Public Speaking.
        </p>
        <br/>
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Download CV
      </button>
      <br/>
      <br/>

      <div className="xl:grid-cols-32 xl:gap-x-4">
      <a href="https://www.facebook.com/shivaani.rajkumar/">
        <Facebook/>
      </a>
      <a>
      <> </>
      </a>
      
      <a href="https://www.linkedin.com/in/shivaani-dushya-rajkumar/">
        <LinkedIn/>
      </a>
      <a>
      <> </>
      </a>
      <a href="https://github.com/ShivaaniDushya">
        <GitHub/>
      </a>
      <a>
      <> </>
      </a>

      </div>

        {/* <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          
            <div className="border-t border-gray-200 pt-4">
              <dt className="sm:text-2xl font-medium text-gray-900">Hello</dt>
              <dd className="sm:text-1xl mt-2 text-sm text-gray-500">Hi</dd>
            </div>
          
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
      <hr />
      <br/>
      <br/>
      <br/>
      <br/>
      

       {/* Education  */}
      <div>
        <div className="lg:text-center">
          <p className="mt-2 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Education
          </p></div>
        </div>
        <p className="mt-12 text-gray-500 ">
          <p className="text-2xl"><b>Sri Lanka Institute of Information Technology (SLIIT)</b><br/></p>
          <i>2020 - Present</i><br/>
          I am an IT Undergraduate at Sri Lanka Institute of Information Technology (SLIIT). I am doing Software Engineering as my specialization.
          
          <p className="mt-12 text-gray-500">
          <p className="text-2xl"><b>British Council of Sri Lanka</b><br/></p>
          <i>2019</i><br/>
          I have completed spoken english course in British Council of Sri Lanka. I got an overall 'A' grade in the Final Examination.
         </p>  
         </p>
          <p className="mt-12 text-gray-500">
          <p className="text-2xl"><b>Co/St'Bridget's Convent</b><br/></p>
          <i>2016-2018</i><br/>
          I continued my G.C.E Advanced Level Studies in Co/St' Bridget's Convent. 
          And I was in Physical Science Stream. (Combined Mathematics - A, Chemistry - B, Physics - C, General English - A, GIT - A).
          </p> 
          <p className="mt-12 text-gray-500">
          <p className="text-2xl"><b>Co/St'Anne's Girls'Maha Vidyalaya</b><br/></p>
          <i>2005-2015</i><br/>
          I have completed my G.C.E Oridinary Level Studies in Co/St' Anne's Girls' Maha Vidyalaya. I got 'A' grade for all subjects.
         </p> 
         <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
   

        {/* Work Experience */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <hr />
      <br/>
      <br/>
      <br/>
      <br/>
      
      <div>
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Work Experience
          </p></div>
        </div>
        <p className="mt-12 text-gray-500">
        <p className="text-2xl"><b>Pearson Lanka (pvt) ltd</b></p>
          <i>2021 Dec - Present</i><br/>
          I am a Software Engineering Intern at Pearson Lanka (pvt) ltd.

          <p className="mt-12 text-gray-500">
          <p className="text-2xl"><b>DFCC Bank PLC</b></p>
          <i>2019-2021</i><br/>
          I worked as a Trainee Banking Assistant at DFCC Bank PLC. I have Experience 
          in Digital Channels Services, Corporate Account Documentation, and BOT Process Handling.
          </p>  
         </p>
 
         <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>

        {/* Achievements */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <hr />
      <br/>
      <br/>
      <br/>
      <br/>
      
      <div>
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Achievements
          </p></div>

        </div>
        <p className="mt-12 text-gray-500">
        <p className="text-2xl"><b>Designathon 2020</b></p>
          We created a UI/UX design for a health and fitness mobile application for the public. 
          We became the finalists and we created another UI/UX design for online learning management system.<br/><br/>
          <a href="https://xd.adobe.com/view/b70eac74-4677-47d2-9817-4a06856f7a57-e25d/"><button class="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 border border-gray-400 rounded shadow text-sm  ">
          Health and Fiteness app design
          </button></a>

          <p className="mt-12 text-gray-500">
          <p className="text-2xl"><b>IX 2021 - Designathon</b></p>
          For the first round of the IX, we created a UI/UX design for a Pet Store mobile application. 
          We became the finalists , and for the final round we created a UI/UX design for a vaccination tracking (covid-19) mobile application.
          </p> <br/>
          <a href="https://www.figma.com/proto/KSoFiuSNNcVyKIab6ACZbb/Paws-%E2%80%98N-Furs?node-id=1%3A2&scaling=scale-down&page-id=0%3A1"><button class="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 border border-gray-400 rounded shadow text-sm">
          Pet Store app design
          </button></a> 

          <p className="mt-12 text-gray-500">
          <p className="text-2xl"><b>Hackathon 2021</b></p>
          In this competition we came up with a solution for a financial advisory mobile application. We became finalists.
          </p>
          <br/>
          <a href="https://mysliit-my.sharepoint.com/:p:/g/personal/it20006884_my_sliit_lk/EViMQVBwuMROsYFhyO_bP14BRs1nhxYyKA9c2f4fP9ZWDA?e=oO2k3s">
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 border border-gray-400 rounded shadow text-sm">
          PowerPoint Document
          </button></a> 
         </p>
 
         <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>


        {/* Presentation Skills */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <hr />
      <br/>
      <br/>
      <br/>
      <br/>
      
      <div>
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Presentation Skills
          </p></div>

        </div>
        

          <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
      
          <img
            src="./images/speaking/IX2.jpg"
            alt="Shivaanio Dushya"
            className="bg-gray-100 rounded-lg"
            width={1000}
            height={1000}
          />
        
        </div>

      <div>
        
        <p className="mt-5 text-gray-500 sm:text-2xl">
        IX 2021 - Designathon
        </p>
        <p className="mt-5 text-gray-500 sm:text-lg">
        I have done the Final Presentation speech in the IX 2021 - Designathon Final Competition.
        </p><br/>
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 border border-gray-400 rounded shadow sm:text-sm">
          Presentation Video
          </button>
        
      <br/>
      <br/>

      <div className="xl:grid-cols-32 xl:gap-x-4">

      </div>
      </div>
      
    </div>


    <div className="max-w-2xl mx-auto py-6 px-4 grid items-center grid-cols-1 gap-y-2 gap-x-8 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
      
          <img
            src="./images/speaking/mini hackathon2.jpg"
            alt="Shivaanio Dushya"
            className="bg-gray-100 rounded-lg"
            width={1000}
            height={1000}
          />
        
        </div>

      <div>
        
        <p className="mt-5 text-gray-500 sm:text-2xl">
        Mini Hackathon 2021
        </p>
        <p className="mt-5 text-gray-500 sm:text-lg">
        I have done the Presentation speech in the Initial Round of Mini Hackathon 2021.
        </p><br/>
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 border border-gray-400 rounded shadow sm:text-sm">
          Presentation Video
          </button>
        
      <br/>
      <br/>
        
  
      </div>
      <br/>
      
      
    </div>

         <br/>
        <br/>

        </div>


        {/* Tools */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <hr />
      <br/>
      <br/>
      <br/>
      <br/>
      
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Familiar Languages and Frameworks
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
      

        {/* Language Skills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr />
        <br/>
        <br/>
        <br/>
        <br/>
        
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Familiar Tools and Technologies
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
        <br/>
        <br/>
        <br/>
        <br/>
        <hr />
        <div>
        
 
            {/* Volunteer Experience */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <br/>
          <br/>
          <br/>
          <br/>
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Volunteer Experience
          </p>
        </div>

        </div>
        <p className="mt-12 text-gray-500 text-2xl ">
          {/* <b>IX 2021 - Designathon</b><br/> */}
          I am a Committee member of MS Club of SLIIT. I contribute to the development of the club by Contributing 
          to the GitHub Repository, Designing Flyers and Marketing the Posts.
          Also I have done several sessions under different Technologies.
          </p> <br/>


          <div className="max-w-2xl mx-auto py-6 px-4 grid items-center grid-cols-1 gap-y-2 gap-x-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
      
          <img
            src="images/speaking/levelup2.jpg"
            alt="Shivaani Dushya"
            className="bg-gray-100 rounded-lg"
            width={1000}
            height={1000}
          />
        
        </div>

          <div>
            
            <p className="mt-5 text-gray-500 sm:text-2xl">
            Level Up Session
            </p>
            <p className="mt-5 text-gray-500 sm:text-lg">
            I have done the very first level up session, conducted by the MS Club of SLIIT. My topic was 
              "Restful Web Services with Spring Boot"
            </p><br/>

          </div>
          
        </div>


        <div className="max-w-2xl mx-auto py-6 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
      
          <img
            src="./images/speaking/API.png"
            alt="Shivaani Dushya"
            className="bg-gray-100 rounded-lg"
            width={1000}
            height={1000}
          />
        
        </div>

      <div>


        
        
        <p className="mt-5 text-gray-500 sm:text-2xl">
        ITP Guide 3.0 - Session 2
        </p>
        <p className="mt-5 text-gray-500 sm:text-lg">
        ITP Guide (Industry Training Project) was a special event , which was organized and conducted by the MS Club of SLIIT for the past two years.<br/>
          On 16th of January 2022, we conducted the ITP Guide for the third consecutive time. The event mainly focuses on
          giving an awareness on how to create industry level projects. <br/>
          I have done a session on "Introduction to Restful Web Services and Postman". 
        </p><br/>

      </div>
      
    </div>


      <div className="max-w-2xl mx-auto py-6 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
            <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
        
            <img
              src="./images/speaking/session2.jpg"
              alt="Shivaanio Dushya"
              className="bg-gray-100 rounded-lg"
              width={1000}
              height={1000}
            />
          
          </div>

        <div>
          
          <p className="mt-5 text-gray-500 sm:text-2xl">
          ITP Guide 3.0 - Session 1
          </p>
          <p className="mt-5 text-gray-500 sm:text-lg">
          In this session, we mainly focussed on giving a hands-on experience with Spring Boot, MongoDB, Angular, Heroku and Firebase. <br/>
          As the first part me and my colleague created a Todo Application using Spring Boot and MongoDB.
          </p><br/>

        </div>
        
      </div>
          <br/>
          <br/>
          <br/>
          <hr/>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Contact Info
          </p>
        </div>
        </div>
<br/>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <dl className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          
          <div className="border-t border-gray-200 pt-4">
            <dt className="sm:text-2xl font-medium text-gray-900">Mobile</dt>
            <dd className="sm:text-2xl mt-2 text-sm text-gray-500">+94 76 802 4263</dd>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <dt className="sm:text-2xl font-medium text-gray-900">Email</dt>
            <dd className="sm:text-2xl mt-2 text-sm text-gray-500">rsdushya@gmail.com</dd>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <dt className="sm:text-2xl font-medium text-gray-900">LinkedIn</dt>
            <a href="https://www.linkedin.com/in/shivaani-dushya-rajkumar/"><dd className="sm:text-2xl mt-2 text-sm text-gray-500">https://www.linkedin.com/in/shivaani-dushya-rajkumar/</dd></a>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <dt className="sm:text-2xl font-medium text-gray-900">Facebook</dt>
            <a href="https://www.facebook.com/shivaani.rajkumar/"><dd className="sm:text-2xl mt-2 text-sm text-gray-500">https://www.facebook.com/shivaani.rajkumar/</dd></a>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <dt className="sm:text-2xl font-medium text-gray-900">GitHub</dt>
            <a href="https://github.com/ShivaaniDushya"><dd className="sm:text-2xl mt-2 text-sm text-gray-500">https://github.com/ShivaaniDushya</dd></a>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <dt className="sm:text-2xl font-medium text-gray-900">Instagram</dt>
            <a href="https://www.instagram.com/shivaanidushya/"><dd className="sm:text-2xl mt-2 text-sm text-gray-500">https://www.instagram.com/shivaanidushya/</dd>
          </a></div>
          
        
      </dl>
      </CardContent>
    </Card>
          <br/>
          <br/>
          <br/>
          <br/>
      </div>
    </div>

    
  );
};

export default Home;