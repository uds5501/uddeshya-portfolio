import uuidv1 from 'uuid/v1';
import resume from './resume.pdf';

// HEAD DATA
export const headData = {
  title: 'Uddeshya Singh | Full Stack Developer',
  lang: 'en',
  description: 'Welcome to my portfolio',
};

// HERO DATA
export const heroData = {
  title: 'Welcome to my Space! I am',
  name: 'Uddeshya Singh',
  subtitle: 'Full Stack Developer and Machine Learning Enthusiast',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne:
    'Hey, I am a pre-final year undergraduate student pursuing a Bachelor of Technology degree in Computer Science and Engineering at Harcourt Butler Technical Unviersity (HBTU), Kanpur.',
  paragraphTwo:
    'I have a passion for problem solving and software development with a keen interest in new technologies and enjoy working outside of my comfort zone.',
  paragraphThree:
    'I love Full Stack Development and you can find me mixing it up with Machine Learning from time to time!',
  resume,
  cf: 'https://codeforces.com/profile/uddeshya.singh',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'yay.png',
    title: 'Google Summer of Code 2019 Work Product',
    info: 'Improved UI of Eventyay platform',
    info2:
      'Introduced new schemas in the backend and implemented new features taxes, billing and route permissions domains',
    info3:
      'Integrated multiple payment gateways into the Flask system like Omise, PayTM and Alipay',
    url: 'https://gist.github.com/uds5501/03b27984cf345666f07f0b0534c38c9e',
    repofront: 'https://github.com/uds5501/open-event-frontend',
    repoback: 'https://github.com/uds5501/open-event-server',
  },
  {
    id: uuidv1(),
    img: 'cooking.png',
    title: "What's Cooking?",
    info: 'Deployed a react app on Netlify using Circle CI to communicate with a Django backend',
    info2: 'Hosted the Django Rest API server on heroku ',
    info3: 'Created Machine Learning Pipeline and used Docker for quick client setup',
    url: 'https://whats-cooking-frontend-cd.netlify.app/',
    repofront: 'https://github.com/uds5501/whats-cooking-frontend',
    repoback: 'https://github.com/uds5501/whats-cooking-server',
  },
  {
    id: uuidv1(),
    img: 'scribble.png',
    title: 'ScribbleIt',
    info:
      'ScribbleIt helps you to transcribe and summarise your daily meetings, classes and meetups.',
    info2:
      'Implemented a Flask Backend to communicate with a Vanilla JS Frontend using AJAX queries',
    info3:
      'Used Microsoft Cognitive API to implement Speech to Text with a refresh rate of 1 second.',
    url: 'https://devfolio.co/submissions/scribbleit',
    repo: 'https://github.com/uds5501/scribe',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'singhuddeshyaofficial@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/uds5501',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/singhuddeshya5501/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/uds5501',
    },
  ],
};

// SKILL DATA
export const skillData = [
  {
    id: uuidv1(),
    name: 'Docker',
  },
  {
    id: uuidv1(),
    name: 'Django',
  },
  {
    id: uuidv1(),
    name: 'Flask',
  },
  {
    id: uuidv1(),
    name: 'React',
  },
  {
    id: uuidv1(),
    name: 'Machine Learning',
  },
  {
    id: uuidv1(),
    name: 'C++',
  },
  {
    id: uuidv1(),
    name: 'Problem Solving',
  },
  {
    id: uuidv1(),
    name: 'PostgreSQL',
  },
  {
    id: uuidv1(),
    name: 'Git',
  },
  {
    id: uuidv1(),
    name: 'Javascript',
  },
  {
    id: uuidv1(),
    name: 'Python',
  },
];

// EXPERIENCE DATA
export const worksData = [
  {
    date: '11/2019 – 02/2020',
    title: 'Google Code In 2019 Mentor',
    company: 'FOSSASIA and Tensorflow',
    points: [
      {
        data:
          "Took initiative in assigning the new developers tasks according to the project's critical needs and the developer's strengths.",
      },
    ],
    location: 'Remote',
  },
  {
    date: '09/2019 – 02/2020',
    title: 'Codeheat Mentor',
    company: 'FOSSASIA',
    points: [
      {
        data: 'Regularly reviewed Pull Requests and maintained the repository.',
      },
      {
        data: 'Evaluated the students according to their contribution quality',
      },
      {
        data:
          'Managed the introduction of project to newcomers and guided them in their ongoing technical implementations',
      },
    ],
    location: 'Remote',
  },
  {
    date: '05/2019 – 08/2019',
    title: 'Google Summer of Code 2019 Developer',
    company: 'FOSSASIA',
    points: [
      {
        data: 'Made the Eventyay platform stable by bug fixing at both frontend and backend',
      },
      {
        data:
          'Implemented new features in Orders, Tickets, Taxes, Payment Gateways and User Experience domains',
      },
      {
        data:
          'Improved the tests in the system for bug-free continuous integration and earned the completion certificate.',
      },
    ],
    location: 'Remote',
    link: 'https://gist.github.com/uds5501/03b27984cf345666f07f0b0534c38c9e',
  },
  {
    date: '06/2018 – 07/2018',
    title: 'Data Structure and Algorithm Content Writer',
    company: 'OpenGenus Foundation',
    points: [
      {
        data:
          'Implemented Machine Learning, Artificial Intelligence and Game Theory algorithms and elaborated them in blogs',
      },
      {
        data: 'Pushed the respective implementations on GitHub page cosmos',
      },
    ],
    location: 'Remote',
    link: 'https://github.com/OpenGenus/cosmos/pulls?q=is%3Apr+author%3Auds5501',
  },
];
// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
