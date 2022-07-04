import "./styles/main.scss";
import { useContext, useState } from "react";
import ThemeContext from "./components/context/ThemeContext";
import Logo from "./components/logo/Logo";
import Input from "./components/input/Input";

function App() {
  const theme = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);

  return (
    <div className={`app ${theme === "dark" && "app__dark"}`}>
      <div className="container app__container">
        <Logo />

        <h1 className="app__heading">Coming soon</h1>

        <p className={`app__text ${theme === "dark" && "app__text__dark"}`}>
          Comfortable finance
        </p>

        {/* {loading ? <p>loading...</p> : ""} */}

        <Input loading={loading} setLoading={setLoading} />

        <p className={`app__notify ${theme === "dark" && "app__notify__dark"}`}>
          👋🏼 Notify me when app is launched 👋🏼
        </p>
      </div>
    </div>
  );
}

export default App;
