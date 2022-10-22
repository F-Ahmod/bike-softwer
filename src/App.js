import "./App.css";
import { Routes, Route } from "react-router-dom";
//import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/Home/About/About";
import AllBike from "./Components/Home/AllBike/AllBike";
import Gallery from "./Components/Home/Gallery/Gallery";
import Contact from "./Components/Home/Contact/Contact";
import Login from "./Components/Home/Login/Login";
import MakeAdmin from "./Firebase/MakeAdmin/MakeAdmin";
import BookPlan from "./Components/BookPlan/BookPlan";
import DasHader from "./Components/DasHader/DasHader";
import Deshbord from "./Components/Deshbord/Deshbord";
import BuyForm from "./Components/buyForm/BuyForm";
import ListAlllPurchases from "./Components/ListAlllPurchases/ListAlllPurchases";
import SingleListPurchase from "./Components/SingleListPurchase/SingleListPurchase";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import Registration from "./Components/Home/Registration/Registration";
import AddBike from "./Components/AddBike/AddBike";


function App() {
  return (
    <div className="App">
      {/* <Router> */}
      {/* <Header></Header> */}
      <Routes>
        <Route path="#" element={<Home />} />
        <Route path="/" element={<Deshbord />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/AllBike" element={<AllBike />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/bookplan/:planId" element={<BookPlan />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />

       

        <Route path="/" element={<Deshbord />}>
          <Route index element={<DasHader />} />
          <Route path="dasHader" element={<DasHader />} />
          <Route path="/buyForm" element={<BuyForm />} />
          <Route path="/listAlllPurchases" element={<ListAlllPurchases/>} />         
          <Route path="/singleListPurchase" element={<SingleListPurchase/>} /> 
          <Route path="AllBike" element={<AllBike />} />
          <Route path="AddBike" element={<AddBike />} />
          {/* <Route path="makeadmin" element={<AdminRoute> <MakeAdmin /> </AdminRoute>} /> */}
          <Route path="makeadmin" element={<MakeAdmin />} />
        </Route>

        {/* <Route path="/" element={<Dashbord />}>
            <Route path="pending" element={<PendingForm />}/>
            <Route path="AllBike" element={<AllBike />} />
            <Route path="AddBike" element={<AddBike />} />

            <Route path="makeadmin" element={<AdminRoute> <MakeAdmin /> </AdminRoute>} />
            <Route path="makeadmin" element={ <MakeAdmin /> } />
          </Route> */}

        {/* <Route path="/SingleProductDetails/:id" element={<Singleproduct />} />  */}
      </Routes>
      {/* </Router> */}

      {/* <Footer/> */}
    </div>
  );
}

export default App;
