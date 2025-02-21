import React from "react";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  const value = navigation.state;
  return (
    <div>
      <Navbar />
      <section className="page">
        {isPageLoading ? <div>loading</div> : <Outlet context={{ value }} />}
      </section>
    </div>
  );
}
