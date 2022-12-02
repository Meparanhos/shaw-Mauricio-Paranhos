import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login/login'
import SignUp from '../Pages/SignUp/signUp'
import SignUpAddress from '../Pages/SignUpAddress/signUpAddress'
import Feed from '../Pages/Feed/feed'
import Restaurant from '../Pages/Restaurant/restaurant'
import Cart from '../Pages/Cart/cart'
import Profile from '../Pages/Profile/profile'
import ProfileEdit from '../Pages/ProfileEdit/profileEdit'
import AddressEdit from '../Pages/AddressEdit/addressEdit'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Feed/>}/>
                <Route path='/signUp' element={<SignUp/>}/>
                <Route path='/signUp/address' element={<SignUpAddress/>}/>
                <Route path='/addressEdit/:id' element={<AddressEdit/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/feed/:restaurantId' element={<Restaurant/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/profile/:id' element={<ProfileEdit/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router