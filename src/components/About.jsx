import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello, my name is Asijit Manna, and I am a full stack developer. With
          2 years of experience in web development, I have a strong command over
          both front-end and back-end technologies, allowing me to build
          complete and scalable applications.
        </p>

        <br />

        <p className="text-xl">
          On the front-end side, I specialize in HTML, CSS, and JavaScript
          frameworks such as React and Next.js. I’m passionate about creating
          intuitive user interfaces that provide an exceptional user experience.
          I pay great attention to detail, ensuring that the websites or
          applications I develop are responsive, visually appealing, and
          accessible across different devices and browsers.
          <br />
          Moving to the back end, I’m proficient in server-side languages like
          JavaScript or Node.js. I have extensive experience working with
          databases such as MySQL, and MongoDB, and I can design
          efficient database structures and write optimized queries. I’m
          familiar with RESTful APIs and know how to integrate them into
          applications to enable seamless communication between the front end
          and back end. Additionally, I have expertise in version control
          systems like Git, and I’m comfortable working in collaborative
          environments using Agile methodologies. I enjoy staying up to date
          with the latest trends and technologies in the web development world,
          as it allows me to continually improve my skills and deliver
          cutting-edge solution
        </p>
      </div>
    </div>
  );
};

export default About;
