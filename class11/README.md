React Router Dom

-install react router dom "npm i react-router-dom"
-in main.jsx "import {BrowserRouter} from 'react-router-dom'"
-In App.jsx "import {Routes, Route} from 'react-router-dom'"
-make <Routes> (collection of all route) and inside <Routes><Routes/>
make <Route/>
-In <Route/> mention path (where to go) and elements (what to render) attributes.
-Use <Link> tag by react-router-dom to redirect to any specific route.
-Make navbar component as well and add it before <Routes> in App.jsx
-Nested Routes can be made by writing in this way - path="/product/men"
-Dynamic Routes can be made by writing this way - path="/product/:id"

-You can access id by using useParams hook.