// aboutPage.tsx

import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto my-10">
      <h3 className="text-4xl signika-header font-extrabold sm:text-center sm:text-6xl">
        About My Calendy
      </h3>
      <br />
      <p className="text-lg mb-6">
        At My Calendy, our journey began with a simple goal - to maximize our
        own schedules. As we harnessed the power of organizing tasks based on
        cognitive abilities, the results were too impactful not to share. Thus,
        My Calendy was born.
      </p>
      <p className="text-lg mb-6">
        My Calendy goes beyond traditional scheduling. It doesn't just inform
        you when to do something; it guides you on what to do when. By
        understanding your fluctuating cognitive abilities, My Calendy aligns
        your tasks to enhance your efficiency and productivity.
      </p>

      <p className="text-lg mb-6">
        My Calendy empowers you to align tasks with specific cognitive
        abilities, ensuring optimal performance throughout the day. Whether it's
        analytical thinking, creative writing, or collaborative projects, My
        Calendy has you covered.
      </p>
      <p className="text-lg mb-6">
        Join us on this journey of productivity and efficiency with My Calendy -
        where your schedule meets cognitive optimization.
      </p>
    </div>
  );
};

export default AboutPage;
