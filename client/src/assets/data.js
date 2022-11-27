import comfy from '../assets/comfy-furniture.png'
import jobster from '../assets/jobster_pic.png'
import gpt3 from '../assets/gpt3_pic.png'
import github from '../assets/github.png'
import loopstudios from '../assets/loopstudios.png'
import fylo from '../assets/fylo.png'
import bookmark from '../assets/bookmark.png'

const works = [
  { 
    id: 1,
    title: 'comfy furnitures',
    img: comfy,
    desc: "An E-commerce website built with reactJS to showcase my experience with API's, data fetching, JS array methods, contextAPI for state managements, reducers, and local storage. Styled using react styled components. ",
    live_link: 'https://comfy-ecommerce-ng.netlify.app/',
    code_link: 'https://github.com/King-OJ/e-commerce-comfy-furnitures'
  },
  { 
    id: 2,
    title: 'jobster',
    img: jobster,
    desc: "A job application website that showcases CRUD functionality, user authentication and authorization. Built with reactJS, react-redux, redux toolkit, thunkAPI for asynchronous actions. I used JWT to authenticate users and Recharts to analyze jobs. Styled with TailwindCSS  ",
    live_link: 'https://my-jobster-app.vercel.app/',
    code_link: 'https://github.com/King-OJ/my_jobster'
  },
  { 
    id: 3,
    title: 'Github Users',
    img: github,
    desc: "A web application for searching github users and user repositories. I used the github users API to access users and repositories. I used react fusion charts to analyze user repositories and styled using styled components",
    live_link: 'https://clems-github-search-users-app.netlify.app/',
    code_link: 'https://github.com/King-OJ/search-github-users-react-app'
  },
  { 
    id: 4,
    title: 'Loop Studios',
    img: loopstudios,
    desc: "A static website built with React and tailwindCSS to showcase my ability to build responsive websites, design and be creative. ",
    live_link: 'https://loopstudios-five-rho.vercel.app/',
    code_link: 'https://github.com/King-OJ/loopstudios'
  },
  { 
    id: 4,
    title: 'GPT3 Modern UI',
    img: gpt3,
    desc: "A static website built with React and pure CSS to showcase my ability to build responsive websites, create proper file structure, html class naming convention, design and be creative. ",
    live_link: 'https://gpt3-react-modern-ui.netlify.app/',
    code_link: 'https://github.com/King-OJ/gpt3ModernUI'
  },
  { 
    id: 5,
    title: 'Fylo',
    img: fylo,
    desc: "A static website built with React and CSS to showcase my ability to build responsive websites, create proper file structure, html class naming convention, design and be creative. ",
    live_link: 'https://fylo-nine-sage.vercel.app/',
    code_link: 'https://github.com/King-OJ/fylo'
  },
  { 
    id: 6,
    title: 'Bookmark',
    img: bookmark,
    desc: "A static website built with HTML and CSS to showcase my ability to build responsive websites, create proper file structure, html class naming convention, design and be creative. ",
    live_link: 'https://bookmark-react-tailwind-website.netlify.app/',
    code_link: 'https://github.com/King-OJ/bookmark-tailwind-css'
  }
]

export default works;