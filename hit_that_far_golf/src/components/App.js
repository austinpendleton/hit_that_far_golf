import React, { useState, useEffect } from "react";
import "../blocks/App.css";
import "../blocks/Page.css";
import Header from "./Header";
import NavBar from "./NavBar";
import HomeForm from "./HomeForm";
import MyBag from "./MyBag";
import AddClubForm from "./AddClubForm";
import { Route, Routes, BrowserRouter, Switch } from "react-router-dom";
import * as api from "../utils/api";
import { avgDistance } from "../utils/constants";
document.body.style.backgroundColor = "black";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [clubs, setclubs] = useState("");

  const handleclubsModal = () => {
    setActiveModal("addclubs");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleAddToBag = ({ clubs }) => {
    api
      .addclubs({ clubs })
      .then((res) => {
        setclubs([res.data, ...clubs]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getclubs = () => {
    api
      .getclubsList()
      .then((res) => {
        setclubs(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <BrowserRouter>
      <Header />
      <div className="page__wrapper">
        <div className="content__wrapper">
          <NavBar />

          <Routes>
            <Route exact path="/" element={<HomeForm />} />
            <Route
              path="/mybag"
              element={
                <MyBag
                  onAddClub={handleclubsModal}
                  onAddToBag={handleAddToBag}
                />
              }
            />
            {/* <MyBag path="/mybag" />
            </Route> */}
          </Routes>
          {activeModal === "addclubs" && (
            <AddClubForm
              onAddClub={handleAddToBag}
              onClose={handleCloseModal}
              onAddToBag={handleAddToBag}
            />
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
