import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Input(props) {
  const { loading, setLoading } = props;
  const [inputValue, setInputValue] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const theme = useContext(ThemeContext);

  const handleBtnClick = () => {
    if (!isEmailSent) {
      setLoading(true);
      setInputValue("");
      setTimeout(() => {
        setLoading(false);
        setIsEmailSent(true);
      }, 5000);
    } else {
      return;
    }
  };

  console.log(isEmailSent, theme);

  return (
    <div className={`input ${theme === "dark" && "input__dark"}`}>
      <input
        className={`input__placeholder ${
          theme === "dark" && "input__placeholder__dark"
        }`}
        type="email"
        placeholder="enter your email adress"
        required
        disabled={loading}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button
        className={`input__button ${
          theme === "dark" && "input__button__dark"
        } ${loading && "input__button__loading"} ${
          isEmailSent && "input__button__sent"
        } ${
          theme === "light" && isEmailSent ? "input__button__sent__light" : ""
        }`}
        onClick={handleBtnClick}
        disabled={loading}
      >
        {loading ? (
          <div className="loader-wrapper">
            <div className="loader">
              <div></div>
            </div>
          </div>
        ) : isEmailSent ? (
          "Thank you for your trust! We'll get back to you soon."
        ) : (
          "notify me"
        )}
      </button>
    </div>
  );
}
