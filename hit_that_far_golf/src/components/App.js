import React, { useState, useEffect, useCallback } from "react";
import "../blocks/App.css";
import "../blocks/Page.css";
import "../blocks/HomeForm.css";
import Header from "./Header";
import NavBar from "./NavBar";
import HomeForm from "./HomeForm";
import MyBag from "./MyBag";
import AddClubForm from "./AddClubForm";
import { Route, Routes, BrowserRouter, Switch } from "react-router-dom";
import * as api from "../utils/api";
import { checkToken, signIn } from "../utils/auth";
import CurrentUserContext from "../contexts/CurrentUserContext";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ClubCard from "./ClubCard";
import ClubPreview from "./ClubPreview";
import Footer from "./Footer";
document.body.style.backgroundColor = "black";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [clubs, setclubs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedClub, setSelectedClub] = useState(null);

  const [yardageInput, setYardageInput] = useState("");

  const [recommendedClub, setRecommendedClub] = useState(null);

  console.log(2);
  console.log(recommendedClub);

  const handleclubsModal = () => {
    setActiveModal("addclubs");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleOpenConfirmModal = () => {
    setDeleteModal("delete");
  };
  const handleCloseConfirmModal = () => {
    setDeleteModal("");
  };
  const handleSelectedClub = (card) => {
    setActiveModal("preview");
    setSelectedClub(card);
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

  const handleAddToBag = ({ name, yards, imageUrl }) => {
    const token = localStorage.getItem("jwt");
    api
      .addclubs({ name, yards, imageUrl }, token)
      .then((res) => {
        setclubs([res.data, ...clubs]);
        handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteClub = (item, _id) => {
    const token = localStorage.getItem("jwt");

    api
      .deleteClubs(item._id, token)
      .then(() => {
        const filteredClubs = clubs.filter((card) => card._id !== item._id);
        console.log(filteredClubs);
        setclubs(filteredClubs);
        handleCloseModal();
        handleCloseConfirmModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getClubItems = () => {
    api
      .getclubsList()
      .then((res) => {
        setclubs(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleRegister = ({ email, password, name }) => {
    api
      .signUp({ email, password, name })
      .then((res) => {
        setCurrentUser(res.data);
        handleSignIn({ email, password });
        handleCloseModal();
        setIsLoggedIn(true);
      })
      .catch(console.error);
  };
  const handleSignIn = ({ email, password }) => {
    signIn({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        handleToken(data.token);
      })
      .catch((error) => console.log(error));
  };
  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setclubs([]);
  };
  const handleToken = useCallback((token) => {
    return checkToken(token)
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser(res.data);
        getClubItems();
        handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .getclubsList()
      .then((res) => {
        setclubs(res);
      })
      .catch((error) => {
        console.log(error);
      });

    const token = localStorage.getItem("jwt");
    if (token) {
      handleToken(token).finally(() => setIsLoading(false));
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  }, []);

  function handleYardageChange(event) {
    setYardageInput(event.target.value);
  }

  function GolfClubRecommendation(event) {
    event.preventDefault();
    setRecommendedClub(recommendClub(yardageInput));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    GolfClubRecommendation(event);
    handleRecommendation(yardageInput);
    console.log("Form submitted");
  };

  const handleReset = () => {
    console.log("Before reset:", recommendedClub);
    setYardageInput("");
    setRecommendedClub(null);
    console.log("After reset:", recommendedClub);
  };

  const recommendClub = (yardageInput) => {
    let recommendedClub = null;

    for (const club of clubs) {
      if (yardageInput >= club.yards) {
        if (!recommendedClub || club.yards > recommendedClub.yards) {
          recommendedClub = club;
        }
      }
    }
    return recommendedClub;
  };

  const handleRecommendation = useCallback(
    (yardageInput) => {
      console.log("Yardage input: ", yardageInput);
      let recommendedClub = null;
      for (const club of clubs) {
        if (yardageInput >= club.yards) {
          if (!recommendedClub || club.yards > recommendedClub.yards) {
            recommendedClub = club;
          }
        }
      }

      setRecommendedClub(recommendedClub);
    },
    [clubs]
  );

  const handleAddClub = (event) => {
    event.preventDefault();
    setRecommendedClub(recommendClub(yardageInput));
  };

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          onRegisterModal={handleRegisterModal}
          onLoginModal={handleLoginModal}
          isLoggedIn={isLoggedIn}
          logOut={handleSignOut}
        />
        <div className="page__wrapper">
          <div className="content__wrapper">
            <NavBar />

            <Routes>
              <Route
                exact
                path="/"
                element={
                  <HomeForm
                    handleYardageChange={handleYardageChange}
                    handleRecommendation={handleRecommendation}
                    GolfClubRecommendation={GolfClubRecommendation}
                    recommendedClub={recommendedClub}
                    yardageInput={yardageInput}
                    clubs={clubs}
                    recommendClub={recommendClub}
                    setRecommendedClub={setRecommendedClub}
                    setYardageInput={setYardageInput}
                    handleAddClub={handleAddClub}
                    handleReset={handleReset}
                    handleSubmit={handleSubmit}
                  />
                }
              />
              <Route
                path="/mybag"
                element={
                  <MyBag
                    onAddClub={handleclubsModal}
                    onAddToBag={handleAddToBag}
                    cards={clubs}
                    onDelete={handleOpenConfirmModal}
                    handleOpenConfirmModal={handleOpenConfirmModal}
                    onSelectClub={handleSelectedClub}
                  />
                }
              />
            </Routes>
            {recommendedClub && (
              <div className="recommended__club">
                <ClubCard item={recommendedClub} />
              </div>
            )}

            {activeModal === "addclubs" && (
              <AddClubForm
                onAddClub={handleAddToBag}
                onClose={handleCloseModal}
                onAddToBag={handleAddToBag}
                onDelete={handleOpenConfirmModal}
                handleOpenConfirmModal={handleOpenConfirmModal}
              />
            )}
            {activeModal === "preview" && (
              <ClubPreview
                item={selectedClub}
                handleOpenConfirmModal={handleOpenConfirmModal}
                handleClubClick={handleSelectedClub}
                onClose={handleCloseModal}
              />
            )}
            {activeModal === "register" && (
              <RegisterModal
                isOpen={handleRegisterModal}
                handleRegister={handleRegister}
                openLoginModal={handleLoginModal}
                onClose={handleCloseModal}
              />
            )}
            {activeModal === "login" && (
              <LoginModal
                isOpen={handleLoginModal}
                signIn={handleSignIn}
                onClose={handleCloseModal}
                openRegisterModal={handleRegisterModal}
              />
            )}
            {deleteModal && (
              <DeleteConfirmModal
                handleCloseConfirmModal={handleCloseConfirmModal}
                onClose={handleCloseModal}
                item={selectedClub}
                onDelete={handleDeleteClub}
              />
            )}
          </div>
        </div>
        <Footer />
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
