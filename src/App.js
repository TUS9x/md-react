import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publickRoutes } from './routes';
import { Fragment } from 'react';
import { DefaultLayout } from './components/Layouts';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publickRoutes.map((route, index) => {
            let Layout =  DefaultLayout;
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout=Fragment
            }
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {/* <Route path='/' element={<Home/>}
                        <Layout>
                            <Page/> //children
                        </Layout>
                    /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
