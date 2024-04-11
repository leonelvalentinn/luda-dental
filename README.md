# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Important!

When we want to use - [BrowserRouter] or - [createBrowserRouter] we have to do one extra configuration

# For - [Apache] servers

we have to modify the - [.htaccess] file and write this:

Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]

# For - [Vercel]

we have to create the vercel.json file at the root of our project and write this:

{
  "rewrites": [
    { 
      "source": "/(.*)", 
      "destination": "/index.html" 
    }
  ]
}
