import React from "react";

const Skills = () => {
  return (
    <div className="py-10 bg-gray-900 text-white">
      <h2 className="text-center text-3xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center text-center">
        
        {/* React */}
        <div className="flex flex-col items-center">
          <i className="devicon-react-original colored text-6xl"></i>
          <p className="mt-2 text-sm">React</p>
        </div>

        {/* Next.js */}
        <div className="flex flex-col items-center">
          <i className="devicon-nextjs-line text-6xl text-white"></i>
          <p className="mt-2 text-sm">Next.js</p>
        </div>

        {/* Tailwind CSS */}
        <div className="flex flex-col items-center">
          <i className="devicon-tailwindcss-plain colored text-6xl"></i>
          <p className="mt-2 text-sm">Tailwind CSS</p>
        </div>

        {/* Node.js */}
        <div className="flex flex-col items-center">
          <i className="devicon-nodejs-plain colored text-6xl"></i>
          <p className="mt-2 text-sm">Node.js</p>
        </div>

        {/* Express.js */}
        <div className="flex flex-col items-center">
          <i className="devicon-express-original colored text-6xl"></i>
          <p className="mt-2 text-sm">Express.js</p>
        </div>

        {/* MongoDB */}
        <div className="flex flex-col items-center">
          <i className="devicon-mongodb-plain colored text-6xl"></i>
          <p className="mt-2 text-sm">MongoDB</p>
        </div>

        {/* Redux */}
        <div className="flex flex-col items-center">
          <i className="devicon-redux-original colored text-6xl"></i>
          <p className="mt-2 text-sm">Redux</p>
        </div>

        {/* Git */}
        <div className="flex flex-col items-center">
          <i className="devicon-git-plain colored text-6xl"></i>
          <p className="mt-2 text-sm">Git</p>
        </div>

        {/* C++ */}
        <div className="flex flex-col items-center">
          <i className="devicon-cplusplus-plain colored text-6xl"></i>
          <p className="mt-2 text-sm">C++</p>
        </div>

        {/* C */}
        <div className="flex flex-col items-center">
          <i className="devicon-c-plain colored text-6xl"></i>
          <p className="mt-2 text-sm">C</p>
        </div>

        {/* Python */}
        <div className="flex flex-col items-center">
          <i className="devicon-python-plain colored text-6xl"></i>
          <p className="mt-2 text-sm">Python</p>
        </div>

      </div>
    </div>
  );
};

export default Skills;
