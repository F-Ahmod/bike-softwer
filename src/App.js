import "./App.css";
import { Routes, Route } from "react-router-dom";
//import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home";
import AllBike from "./Components/Home/AllBike/AllBike";
import Login from "./Components/Home/Login/Login";
import MakeStaff from "./Firebase/MakeStaff/MakeStaff";
import BookPlan from "./Components/BookPlan/BookPlan";
import DasHader from "./Components/DasHader/DasHader";
import Deshbord from "./Components/Deshbord/Deshbord";
import BuyForm from "./Components/buyForm/BuyForm";
import ListAlllPurchases from "./Components/ListAlllPurchases/ListAlllPurchases";
import SingleListPurchase from "./Components/SingleListPurchase/SingleListPurchase";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import Registration from "./Components/Home/Registration/Registration";
import AddBike from "./Components/AddBike/AddBike";
import NewPurchacs from "./Components/NewPurchacs/NewPurchacs";
import BuyerDetails from "./Firebase/BuyerDetails/BuyerDetails";
import Invoice from "./Components/Invoice/Invoice";
import DataInput from "./Components/DataInput/DataInput";
import DataInputUI from "./Components/DataInputUI/DataInputUI";
import UpDateBike from "./Components/UpDateBike/UpDateBike";
import GrapChat from "./Components/GrapChat/GrapChat";
import UpdateForm from "./Components/UpdateForm/UpdateForm";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import LisstAllStaff from "./Components/LisstAllStaff/LisstAllStaff";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      {/* <Header></Header> */}
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} />
        </Route>

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/bookplan/:planId" element={<BookPlan />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />

        <Route path="/" element={<Deshbord />}>
          <Route index element={<DasHader />} />
          <Route path="dasHader" element={<DasHader />} />
          <Route path="/buyForm" element={<BuyForm />} />
          <Route path="/BuyerDetails" element={<BuyerDetails />} />
          <Route path="/invoice/:_id" element={<Invoice />} />
          <Route path="/upDateBike/:_id" element={<UpDateBike />} />
          <Route path="/updateForm/:_id" element={<UpdateForm />} />
          <Route path="/grapChat" element={<GrapChat />} />
          <Route path="/listAlllPurchases" element={<ListAlllPurchases />} />
          <Route path="/newPurchacs" element={<NewPurchacs />} />
          <Route path="/singleListPurchase" element={<SingleListPurchase />} />
          <Route path="AllBike" element={<AllBike />} />
          <Route path="AddBike" element={<AddBike />} />
          <Route path="dataInput" element={<DataInput />} />
          <Route path="dataInputUI" element={<DataInputUI />} />

          <Route path="makeStaff" element={<MakeStaff />} />
          <Route path="listAllStafff" element={< LisstAllStaff/>} />
        </Route>
      </Routes>
      {/* </Router> */}

      {/* <Footer/> */}
    </div>
  );
}

export default App;
