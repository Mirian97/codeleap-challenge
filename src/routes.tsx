import Codeleap from 'pages/Codeleap'
import Main from 'pages/Main'
import SignUp from 'pages/SignUp'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TRedirectTo } from 'types/redirectTo'
import { getItem } from 'utils/storage'

const ProtectedRoutes = ({ redirectTo }: TRedirectTo) => {
  const username = getItem('user')
  const isAuthenticated = username
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}

const MainRoutes = () => (
  <>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Codeleap />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route element={<ProtectedRoutes redirectTo='/' />}>
        <Route path='/main' element={<Main />} />
      </Route>
      <Route path='*' element={<Codeleap />} />
    </Routes>
  </>
)

export default MainRoutes
