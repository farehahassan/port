"use client";

import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-10 sm:py-16 md:py-20 lg:py-32 text-tertiary flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-full mr-40 px-20 md:w-2/3">
          
            <h2 className="text-3xl pt-10 md:text-4xl text-center md:text-left text-quaternary font-bold tracking-wider">
              {" "}
              About Me - Fareha Hassan
            </h2>
          
          <p className="py-10 text-center">
            Hello, I'm Fareha Hassan, a passionate and dedicated software
            engineering student on a journey to make a significant mark in the
            tech industry. With an insatiable thirst for knowledge and a
            deep-rooted fascination for the world of software development, I am
            driven by the pursuit of excellence in this ever-evolving field.
            <br />
            <br />
            I am currently pursuing a degree in software engineering, and my
            academic journey has equipped me with a strong foundation in various
            aspects of software development. I have delved into the realms of
            mobile app development with Flutter, creating engaging and dynamic
            user interfaces to bring innovative ideas to life. My expertise
            extends to web development, where I have honed my skills in building
            robust and user-friendly websites, leveraging technologies like
            Next.js to create responsive and interactive web applications.
            <br />
            <br />
            Firebase, a powerful platform, has also been a part of my arsenal,
            allowing me to design and implement real-time database solutions for
            both mobile and web applications. I am adept at working with
            databases, ensuring that data management and retrieval are efficient
            and secure.
            <br />
            <br />
            Throughout my educational journey, I have consistently demonstrated
            a fervent interest in software development that spans several years.
            This passion has driven me to explore new technologies, stay updated
            with industry trends, and consistently seek innovative solutions to
            complex problems. I am excited to take on new challenges and
            contribute my skills and knowledge to the software development
            community. My portfolio showcases my dedication to the craft and my
            commitment to creating elegant, efficient, and user-centric
            solutions.
            <br />
            <br />I look forward to the opportunities that lie ahead and am
            eager to collaborate with fellow enthusiasts in this exciting and
            ever-changing field. If you share my enthusiasm for software
            development or have a project that could benefit from my skills, I'd
            love to connect and explore the possibilities. Let's work together
            to turn ideas into reality and make a positive impact in the world
            of technology.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <div className="mx-auto">
            <Image
              className="mx-auto"
              src="/profile.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
// import Image from "next/image";
// import React from "react";

// const page = () => {
//   return (
//     <>
//       <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-10 sm:py-16 md:py-20 lg:py-32 text-tertiary flex flex-col-reverse md:flex-row justify-center items-center">
//         <div className="w-full md:w-2/3">
//           <h2 className="text-3xl md:text-4xl text-center md:text-left text-quaternary font-bold tracking-wider">
//             About Me - Fareha Hassan
//           </h2>
//           <p className="py-4 md:py-10 text-center md:text-left">
//             Hello, I'm Fareha Hassan, a passionate and dedicated software
//             engineering student on a journey to make a significant mark in the
//             tech industry. With an insatiable thirst for knowledge and a
//             deep-rooted fascination for the world of software development, I am
//             driven by the pursuit of excellence in this ever-evolving field.
//             {/* Rest of your text */}
//           </p>
//         </div>
//         <div className="w-full md:w-1/3">
//           <div className="mx-auto">
//             <Image
//               className="mx-auto"
//               src="/profile.jpg"
//               width={400}
//               height={400}
//               alt="Picture of the author"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default page;
