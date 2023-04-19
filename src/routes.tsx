import Main from 'pages/Main'
import SignUp from 'pages/SignUp'
import { Route, Routes } from 'react-router-dom'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/main' element={<Main />} />
    </Routes>
  )
}

export default MainRoutes
