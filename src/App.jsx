import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Body />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <div className="w-11/12 mx-auto">
        <RouterProvider router={AppRouter}>
          <Header />
          <Body />
        </RouterProvider>
      </div>
    </Provider>
  );
};
export default App;
