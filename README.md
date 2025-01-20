# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



1.GitHub Pages requires the static files to be placed in a dist folder. You can configure Vite for this:
    dist folder gets created when you build your project using Vite. This process happens regardless of whether you've installed the GitHub Pages plugin. Here’s how it works:
    
    1. When is the dist folder created?
    The dist folder is generated only after you run the build command:
            npm run build.. not the usual npm run dev
    This command compiles your source code (src/) and processes any assets (e.g., images, CSS, JavaScript) into a production-ready format, optimized for performance. The output is placed in the dist folder by default.
       2. Role of the GitHub Pages Plugin
       The gh-pages plugin simplifies the deployment process:
    
    It creates the dist folder (if it doesn’t exist) when you run the build command.
    It pushes the contents of the dist folder to the gh-pages branch of your GitHub repository, making your site accessible on GitHub Pages.
    Steps Recap:
        npm run build-This creates the dist folder with production-ready files.
    Deploy to GitHub Pages:
        npm run deploy-This pushes the dist folder to the gh-pages branch.
    Add the base property to your vite.config.js file to specify your GitHub repository name:
2.install the Vite plugin for GitHub Pages deployment:

    npm install gh-pages --save-dev
3.Add deployment scripts to package.json:
    
4.Install Tailwind CSS

5.Configure Tailwind CSS,tailwind.config.js file and specify the content paths where Tailwind should look for class names:

6.Update the src/index.css file (or create it if it doesn't exist) to include Tailwind's base styles:

7.