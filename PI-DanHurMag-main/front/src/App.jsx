import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";
const EMAIL = "d@h.com";
const PASSWORD = "password";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const URL = `https://rym2.up.railway.app/api/character/10?key=pi-danhurmag`;
  const apiKey = "pi-danhurmag";

  //promesas
  // const onSearch = (input) => {
  //   const url = `${URL}/${input}?key=${apiKey}`;

  //   axios(url)
  //     .then(({ status, data }) => {
  //       if (status >= 200 && status < 400) {
  //         if (data.name) {
  //           setCharacters((oldState) => [...oldState, data]);
  //         }
  //       } else {
  //         window.alert("¡No hay personajes con este ID!");
  //       }
  //     })
  //     .catch((error) => window.alert("Ocurrio un error"));
  // };

  //async
  const onSearch = async (input) => {
    try {
      const { status, data } = await axios(`${URL}/characters/${input}`);
      if (status >= 200 && status < 400) {
        if (data.name) {
          setCharacters((oldState) => [...oldState, data]);
        }
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (err) {
      window.alert("Ocurrio un error");
    }
  };

  const onClose = (id) => {
    const filtered = characters.filter((character) => character.id !== id);
    setCharacters(filtered);
  };

  //promesas
  // const login = ({ email, password }) => {
  //   //   setAccess(true);
  //   // };
  //   axios(`${URL}/login?email=${email}&password=${password}`)
  //     .then((res) => res.data.access)
  //     .then((access) =>
  //       access ? setAccess(true) && navigate("/home") : setAccess(false)
  //     );
  // };

  // async
  const login = async ({ email, password }) => {
    try {
      const { data } = await axios(
        `${URL}/login?email=${email}&password=${password}`
      );
      data.access ? setAccess(true) && navigate("/home") : setAccess(false);
    } catch (err) {}
  };

  useEffect(() => {
    if (access) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [access]);
  return (
    <div className="App">
      {pathname !== "/login" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail">
          <Route
            index
            element={
              <div>
                <h1>DETAIL</h1>
              </div>
            }
          />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/login" element={<Form login={login} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
