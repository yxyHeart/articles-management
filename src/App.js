import { unstable_HistoryRouter as HistoryRouter,Routes,Route} from "react-router-dom"
import { history } from '@/utils/history'
import { Authcomponents } from "@/components/AuthComponent"
import './App.scss'
import {lazy, Suspense} from 'react'
const Login=lazy(()=> import('@/pages/Login'))
const Layout =lazy(()=>import("@/pages/Layout"))
const Publish=lazy(()=> import("@/pages/Publish"))
const Article=lazy(()=> import("@/pages/Article"))
const Home=lazy(()=> import("@/pages/Home"))
function App (){
    return (
      <HistoryRouter history={history}>
        <div className="App">
          <Suspense
            fallback={
              <div
                style={{
                  textAlign: 'center',
                  marginTop: 200
                }}
              >
                loading...
              </div>
            }
          >
            <Routes>
              <Route path='/*' element={
                <Authcomponents><Layout /></Authcomponents>}>
                  <Route index element={<Home />}></Route>
                  <Route path='article' element={<Article />}></Route>
                  <Route path='publish' element={<Publish />}></Route>
              </Route>
              <Route path='/login' element={<Login />}></Route>
            </Routes>
          </Suspense>
        </div>

      </HistoryRouter>
    )
}
export default App