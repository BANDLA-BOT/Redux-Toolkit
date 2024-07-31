import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
const RootElement = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </Provider>
  );
};

export default RootElement;
