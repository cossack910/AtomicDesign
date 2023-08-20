import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "../components/pages/Top";
import Users from "../components/pages/Users";
import DefaultLayout from "../components/template/DefaultLayout";
import HaederOnly from "../components/template/HaederOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Top />
            </DefaultLayout>
          }
        />
        <Route
          path="/users"
          element={
            <HaederOnly>
              <Users />
            </HaederOnly>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
