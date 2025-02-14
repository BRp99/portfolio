# Portfolio

## App description:

## Dependency installation

In this project, I install several dependencies to build a robust and responsive React application. Below are the installed dependencies along with a brief explanation of each.

### Installation commands

To create a new React application with Vite, run the following command:

`npm create vite@latest ./ -- --template react`

After creating the project, install the following dependencies:

`npm install -D tailwindcss`

`npx tailwindcss init`

`npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom`

`npm i --legacy-peer-deps -D postcss autoprefixer`

`npx tailwind init -p`

`npm i typed.js`

`npm install --save-dev typescript @types/react @types/react-dom`

`npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin`

`npm install --save-dev @types/three`

### Dependencies description:

`--legacy-peer-deps` - I use this flag to resolve compatibility issues with older versions of React required by react-tilt;

`npm i --legacy-peer-deps -D postcss autoprefixer` - I cannot use just tailwind I have to add `postcss` and `autoprefixer` to fix errors related to the style;

`npx tailwind init -p` - create folder `postcss.config.js`;

`@react-three/fiber` - create three.js code in react;

`@react-three/drei maath` - need utility functions to do geometry;

`react-tilt` - provide cool inclination animations;

`react-vertical-timeline-component` - build a vertical timeline;

`@emailjs/browser` - library that allows to send emails directly from the application using the EmailJS API;

`framer-motion` - A powerful animation library for React that lets create fluid animations and transitions easily and intuitively;

`npm i typed.js` - create animated typing effects in texts;

`react-router-dom` - for routing;

`npm install --save-dev typescript @types/react @types/react-dom` - install TypeScript and types for the React and Node.js libraries;

`npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin` - configure ESLint and Prettier for TypeScript;

`npm install --save-dev @types/three` - for TypeScript to recognize the namespace THREE;

### Folders description:

`assests` - use all the icons and images for the app;

`components` - components to render inside `App.jsx`;

`index.css` - for gradients + box-shadows and tailwind imports;

`style.js` - Tailwind utility styles;

`utils` - create `motion.js` for framer-motions animations;

`constants` - `index.js` - all the content that i gonna have in my app;

`hoc` - High Order Component styles;

`tailwind.config.js` - contain primaray, secondary and terciary colors + box-shadows + screens + animations and background-image.

### Files description:

`tsconfig.json` in the project root to configure TypeScript;

Add jsx property in `tsconfig.json` of compilerOptions;

Create a declaration file that declares the module maath/random/dist/maath-random.esm - `src` - `@types` - `maath.d.ts`.
The file `maath.d.ts` tells TypeScript how to interpret the maath/random/dist/maath-random.esm module, defining the inSphere function and its input and output types)
inside tsconfig.json add: "typeRoots": ["./node_modules/@types", "./src/@types"];

`images.d.ts` inside '@types' - because TS doesn't know how to deal with image files;

Configure TS to recognize 'import.meta' - inside `tsconfig.json` add:

create file 'vite-env.d.ts' for TS to recognize the environment variables:
from "module": "commonjs" to "module": "esnext" (for TS to support import.meta)
inside @types - import-meta.d.ts

## GitHub Pages Setup

**Installations:**
install Vite and gh-pages:
`npm install --save-dev vite gh-pages`

**GitHub Pages configuration:**
In my GitHub repository, I have to go to **Settings** > **Pages** and select the `gh-pages` branch and the `root` folder to publish.

**MIME Type issue resolution:**
To ensure GitHub Pages correctly I have to treat JS files as modules, Vite was configured to generate `.mjs` files instead of `.js` during the build process. I write this code in the `vite.config.js` file:
`plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: () => {},
      },
    },
  },
  `

I change the name of my repository from 'portfolio' to 'BRp99.github.io', because I wanna GitHub pages URL pointing to GitHub username instead the repository name.

## Project in Development:

(`npm run dev` for localhost)

1. `git add .`;
2. `git commit -m "info"`;
3. `git push`.
4. DON'T DELETE 'dist' folder.

## Update project when ready:

### On BRANCH main

1. When the project is LIVE and I wanna send the updates I wrote: `git add .` then `git commit -m "info"` then `git push`;
2. DELETE 'dist' folder;
3. Run `npm run build` to create `dist` folder;

### On BRANCH gh-pages

4. `git merge main`;
5. `git add -A`;
6. `git commit`;
7. `git push origin gh-pages`;

### On BRANCH main

8. `npm run deploy` - Published
