// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { ChangeEvent, Suspense, lazy, useEffect, useState } from 'react';
import './App.css'
// import Dropdown from './components/Dropdown';
// import { LifeCycle } from './pages/life-cycle';
// import Person from './pages/basic-hooks/Person';
// import ReactMemo from './pages/basic-hooks/react-memo';
import { ElectionState } from './pages/basic-hooks/react-memo/react-memo-election/Election.model';
import StatePicker from './pages/basic-hooks/react-memo/react-memo-election/StatePicker';
import Summary from './pages/basic-hooks/react-memo/react-memo-election/Summary';
import StyledComponents from './pages/react-styling/styled-component';
import CssModule from './pages/react-styling/css-module/CssModule';
import UserCRUD from './pages/debugging/UserCRUD';
import BuggyCounter from './pages/error-boundaries/BuggyCounter';
import ErrorBoundaryClass from './pages/error-boundaries/ErrorBoundaryClass';
import ErrorBoundaryFunction from './pages/error-boundaries/ErrorBoundaryFunction';
import { ErrorBoundary } from 'react-error-boundary';
import Modal from './pages/react-portal/Modal';
import { BrowserRouter, NavLink, Navigate, Redirect, Route, Routes, Switch } from 'react-router-dom';
import styles from "./pages/App.module.css"
import HomeRoute from './pages/react-router-dom/HomeRoute';
import AboutRoute from './pages/react-router-dom/AboutRoute';
import UserRoute from './pages/react-router-dom/UserRoute';
import ReactBasicForm from './pages/react-form/basic-form/ReactBasicForm';
import ReactFormik from './pages/react-form/react-formik/ReactFormik';
import ReactFormikNew from './pages/react-form/react-formik/new-demo/ReactFormikNew';
import ReactFormikList from './pages/react-form/react-formik/react-formik-list/ReactFormikList';
import WithFetch from './pages/server-interaction/WithFetch';
import WithAxiosNormal from './pages/server-interaction/WithAxiosNormal';
import WithAxiosService from './pages/server-interaction/WithAxiosService';
import UseContext from './pages/react-context/UserContext';
import MobxComponent from './pages/react-mobx/components/MobxComponent';
import { Typography } from '@mui/material';
import { userStore } from './pages/react-mobx/store/user.store';
import { observer } from 'mobx-react';
import ReduxComponent from './pages/react-redux/components/ReduxComponent';
import ReactBootstrap from './pages/react-bootstrap/ReactBootstrap';
import RecipeBooks from './pages/react-bootstrap/RecipeBooks';
import ReactWithFormik from './pages/comment-recipes/WithFormik';
import AppHOC from './pages/comment-recipes/APpHOC';
import RenderProps from './pages/comment-recipes/RenderProps';
import SmartLoginComponent from './pages/comment-recipes/SmartDumbTopic';
import ReactContextClass from './pages/advance-hook/ContextClass';
import "./pages/App.module.css"
import UseRef from './pages/advance-hook/useRef';
import UseMemoHook from './pages/advance-hook/useMemoHook';
import UseCallBack from './pages/advance-hook/useCallBack';
import UseLayoutEffect from './pages/advance-hook/UseLayoutEffect';

const NotFound = () => {
  return <h2>404 - happy hacker</h2>
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 3)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// class App extends React.Component {
//   constructor(props: string) {
//     super(props);
//   }

//   alert() {
//     alert("Test props");
//   }

//   render() {
//     // const phones = ["iphone", "samsung", "oppo"];
//     // const cats = ["bella", "meow", "kitty", "miu"];
//     // const name = "FPT software"
//     return (
//       <>
//       {/* React Memo */}
//       <ReactMemo/>

//       {/* Basic hooks */}
//       {/* <Person/> */}
//       {/* End basic hooks */}


//       {/* Lifecycle component */}
//       {/* <LifeCycle myColor="blue"/> */}


//       {/* React overview */}
//       {/* conditional rendering */}
//         {/* {name.length > 10 ? 
//           <h1>String long</h1> :
//           <h1>String soft</h1>
//         } */}

//         {/* component */}
//         {/* <div className='row'>
//           <div className='col-6'>
//             <Dropdown options={phones} fn={this.alert}>
//               Phones
//             </Dropdown> 
//           </div>
//           <div className='col-6'>
//             <Dropdown options={cats} fn={this.alert} title="Choose your cat's name" />
//           </div>
//         </div> */}


//         {/* <Dropdown options={phones}/>
//         <Dropdown options={phones}/>
//         <Dropdown options={phones}/>
//         {phones.map((item, index) => {
//           return <p key={index}>{item}</p>
//         })} */}
//       </>
//     )


const App = observer(() => {
  // const alert = () => {
  //   alert("Test props");
  // }

  const [selectedState, setSelectedState] = useState({} as ElectionState)
  const [elections, setElections] = useState<ElectionState[]>([])

  useEffect(() => {
    fetch("https://5e7db521fa19eb0016519ec1.mockapi.io/elections")
      .then((response) => {
        if (!response.ok) {
          throw new Error("failed to fetch")
        }
        return response.json()
      })
      .then((data) => {
        setElections(data)
      })
  }, [])

  const charSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const stateId = Number(event.target.value);
    const selectedState = elections.find((item) => item.id === stateId);

    setSelectedState(selectedState as ElectionState);
  }

  const reRenderHandler = () => {
    setSelectedState({ ...selectedState });
  }

  const [someKey, setSomeKey] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn((prev) => !prev)
  }

  // const LazyComponent = lazy(() => import("./pages/react-router-dom/LazyLoadRoute"));

  const routes = [
    { path: "", element: <HomeRoute /> },
    { path: "about", element: <AboutRoute /> },
    { path: "login", element: (
      <>
      <h2>Login Page</h2>
        <h3>Login status: {" "}
          <label style={{color: "blue"}}>
            {isLoggedIn ? "LoggedIn" : "Not LoggedIn"}
          </label>
        </h3>
        <button className='btn btn-primary' onClick={handleLogin}>
          Toggle Login
        </button>
      </>
    ) },
    { path: "info/:code/:firstName", element: <AboutRoute /> },
    {
      path:"users",
      element: isLoggedIn ? <UserRoute/> : < Navigate to="/login"/>,
    },
    {path:"react-form", element: <ReactBasicForm/>},
    {path:"react-formik", element: <ReactFormik/>},
    {path:"react-formik-new", element: <ReactFormikNew/>},
    {path:"react-formik-list", element: <ReactFormikList/>},
    {path:"with-fetch", element: <WithFetch/>},
    {path:"with-axios-normal", element: <WithAxiosNormal/>},
    {path:"with-axios-service", element: <WithAxiosService/>},
    {path:"use-context", element: <UseContext/>},
    {path:"react-mobx", element: <MobxComponent/>},
    {path:"react-redux", element: <ReduxComponent/>},
    {path:"react-bootstrap", element: <ReactBootstrap/>},
    {path:"recipe-book", element: <RecipeBooks/>},
    {path:"react-withFormik", element: <ReactWithFormik/>},
    {path:"app-hoc", element: <AppHOC/>},
    {path:"render-props", element: <RenderProps/>},
    {path:"smart-dump-container", element: <SmartLoginComponent/>},
    {path:"react-context-class", element: <ReactContextClass/>},
    {path:"use-ref", element: <UseRef/>},
    {path:"use-memo-hook", element: <UseMemoHook/>},
    {path:"use-callback", element: <UseCallBack/>},
    {path:"use-layout-effect", element: <UseLayoutEffect/>},
  ]

  const navLinks = [
    { path: "", title: "Home" },
    { path: "about", title: "About" },
    { path: "info/100/hieu", title: "Info" },
    { path: "login", title: "Login" },
    { path: "users", title: "Users" },
    { path: "react-form", title: "Basic Form"},
    { path: "react-formik", title: "React Formik"},
    { path: "react-formik-new", title: "React new Formik"},
    { path: "react-formik-list", title: "React Formik List"},
    { path: "with-fetch", title: "Fetch API"},
    { path: "with-axios-normal", title: "Axios normal API"},
    { path: "with-axios-service", title: "Axios service"},
    { path: "use-context", title: "User context"},
    { path: "react-mobx", title: `React MobX - ${userStore.userId}`},
    { path: "react-redux", title: "React Redux"},
    { path: "react-bootstrap", title: "React bootstrap"},
    { path: "recipe-book", title: "Recipe Book"},
    { path: "react-withFormik", title: "With Formik"},
    { path: "app-hoc", title: "App HOC"},
    { path: "render-props", title: "Render Props"},
    { path: "smart-dump-container", title: "Smart Dump"},
    { path: "react-context-class", title: "React context Class"},
    { path: "use-ref", title: "Use Ref"},
    { path: "use-memo-hook", title: "Use Memo hook"},
    { path: "use-callback", title: "Use Callback"},
    { path: "use-layout-effect", title: "Use layout Effect"},

  ]

  return (
    <>
      {/* react router dom v6 */}
      <BrowserRouter>
        <div className={styles.App}>
          <header>
            <Typography variant='caption'>{userStore.userId}</Typography>
            <nav className='navbar navbar-expand navbar-light bg-light'>
              <ul className='navbar-nav'>
                {navLinks.map((link, index) => (
                  <li className='navbar-item'
                  key={index}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isActive ? "active nav-link" : "nav-link"
                      }>
                      {link.title}
                    </NavLink>
                  </li>
                ))}
                {/* <li className='navbar-item'>
                  <NavLink 
                    to="about"
                    style={({isActive, isPending})=> {
                      return {fontWeight: isActive ? 'bold' : 'normal'}
                    }

                    }>
                      About  
                  </NavLink>
                </li>    
                <li className='navbar-item'>
                  <NavLink 
                    to="info/100/Hieu"
                    style={({isActive, isPending})=> {
                      return {fontWeight: isActive ? 'bold' : 'normal'}
                    }

                    }>
                      Info  
                  </NavLink>
                </li>     */}
              </ul>
            </nav>
          </header>
          <main>
            <h2>Main content</h2>
            <Suspense fallback={<h2>...Loading...</h2>}>
              <Routes>
                {/* <Route path="" element={<HomeRoute/>}/>  
                <Route path="about" element={<AboutRoute/>}/>  
                <Route path="info/:code/:firstName" element={<AboutRoute/>}/>   */}
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </Suspense>
          </main>
        </div>
      </BrowserRouter>

      {/* React router dom v5 */}
      {/* <BrowserRouter>
        <div className={styles.App}>
          <header>
            <nav className='navbar navbar-expand navbar-light bg-light'>
              <a href="">Fsoft Academy</a>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <NavLink to="/" exact className="nav-link"
                  activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/about"  className="nav-link"
                  activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/info/100/Hieu?key1=Music&key2=Something"  className="nav-link"
                  activeClassName="active">
                    Info
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/login"  className="nav-link"
                  activeClassName="active">
                    Login
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/users"  className="nav-link"
                  activeClassName="active">
                    User
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/lazy"  className="nav-link"
                  activeClassName="active">
                    Lazy
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <h2>Main content</h2>
            <Suspense fallback={<h1>Loading</h1>}>
              <Switch>
                <Route path='/' exact component={HomeRoute}></Route> 
                <Route path='/about' component={AboutRoute}></Route> 
                <Route path='/info/:code/:lastName' component={AboutRoute}></Route>
                {/* Route Guard - Activated */}
      {/* <Route 
                path="/users"
                render={() => isLoggedIn ? <UserRoute/> : <Redirect to="/login"/>}> 

                </Route>
                {/* Login route */}
      {/* <Route path="/login">
                  <h2>Login Page</h2>
                  <h3>Login status: {" "}
                    <label style={{color: "blue"}}>
                      {isLoggedIn ? "LoggedIn" : "Not LoggedIn"}
                    </label>
                  </h3>
                  <button className='btn btn-primary' onClick={handleLogin}>Toggle Login</button>
                
                </Route>
                {/* End Route Guard - Activated */}

      {/* <Route path="/lazy" component={LazyComponent}>

                </Route>

                {/* Notfound */}
      {/* <Route path="*" component={NotFound}></Route>
              </Switch>
            </Suspense>
          </main>
        </div>
      </BrowserRouter> */}
      {/* End React router dom v5 */}

      {/* React portal */}
      {/* <Modal open={openModal}>
        <h2>Dialog</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <div style={{flex: 1}}>
          <button className='button' onClick={() => 
          setOpenModal(false)}>Ok </button>
        </div>
      </Modal>
      <button className='button' onClick={() => 
          setOpenModal(true)}>Open modal </button> */}


      {/* Error bound */}
      {/* <ErrorBoundary
      FallbackComponent={ErrorBoundaryFunction}
      onReset={() => setSomeKey(null)}
      resetKeys={[someKey]}
      >
        <BuggyCounter/>
      </ErrorBoundary> */}

      {/* Error boundaries */}
      {/* <ErrorBoundaryClass>
        <BuggyCounter/>
      </ErrorBoundaryClass> */}

      {/* Debugging */}
      {/* <UserCRUD/> */}

      {/* CSS Module */}
      {/* <CssModule/> */}

      {/* <StyledComponents/> */}

      {/* <StatePicker
        options={elections}
        selectedId={selectedState?.id}
        onSelectState={charSelectHandler}
      />

      <hr />
      <Summary state={selectedState}/>
      <hr />
      {selectedState.candidates && (
        <button onClick={reRenderHandler}>Re-select</button>
      )} */}
    </>
  )


})

export default App;
