import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import CitateWindow from "./CitateWindow";
import "./styles.scss";
import "semantic-ui-css/semantic.min.css";
import { Loader } from "semantic-ui-react";
import {
  getCategories,
  getRandomCitate,
  getRandomCitateFromCategories,
} from "../api";

export default function MainComponent(): JSX.Element {
  const [categories, setCategories] = useState<string[]>([]);
  const [citation, setCitate] = useState("");
  const [loader, setLoader] = useState(false);
  const [citationLoader, setCitationLoader] = useState(false);

  const handleShowCitationFromCategory = async (category: string) => {
    setCitationLoader(true);
    getRandomCitateFromCategories(category).then((value) => {
      setCitationLoader(false);
      setCitate(value);
    });
  };

  useEffect(() => {
    setLoader(true);
    getCategories().then((data) => setCategories(data));
    getRandomCitate().then((citate) => {
      setCitate(citate);
      setLoader(false);
    });
  }, []);

  return (
    <div>
      <Loader size="big" active={loader} />
      <header className="app-header">
        <img
          className="app-header__img"
          src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
        ></img>
        <h3 className="app-header__title">Chuck Norris</h3>
      </header>
      <main>
        <h1 className="categories-title">Categories</h1>
        <div className="categories">
          {categories.map((category) => (
            <CategoryItem
              key={category}
              categoryName={category}
              onClick={() => handleShowCitationFromCategory(category)}
            ></CategoryItem>
          ))}
        </div>
        <div>
          <CitateWindow citation={citation} loaderStatus={citationLoader} />
        </div>
      </main>
    </div>
  );
}
