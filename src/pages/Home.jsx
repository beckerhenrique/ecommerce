import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import salePic from "../components/images/download.jpg";
import ItemCard from "../components/ItemCard";
import ScrollToTop from "react-scroll-to-top";
import {SiLeaderprice} from 'react-icons/si'

import "./Home.css";


const itemsURL = import.meta.env.VITE_API;
const categoriesUrl = import.meta.env.VITE_CATEGORIES;

function Home() {
  const [topItens, setTopItens] = useState([]);
  const [categories, setCategories] = useState([]);
  const [allItens, setAllItens] = useState([]);

  //Função para pegar todos os produtos e o top20 produtos da api filtrando os valores.
  const getTopItens = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    const valuesAll = data.products;
    const values = data.products
      .map(({ rating }) => rating)
      .sort((a, b) => b - a)
      .slice(0, 11);
    const top20 = data.products.filter(({ rating }) => values.includes(rating));
    setTopItens(top20);
    setAllItens(valuesAll);
  };

  const getCategories = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    getTopItens(itemsURL);
    getCategories(categoriesUrl);

  }, []);

  return (
    <div>
      <ScrollToTop />
      <Link to="promotions" id="mainBanner">
      <SiLeaderprice className="mainBannerTag"/>
        <h2>Clique aqui para conferir as promoções!!</h2>
      </Link>
      <section className="top20">
        <h1>Top 13 produtos!</h1>
        <section className="top20-container">
          {topItens.length > 0 &&
            topItens.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                showDiscount={false}
                height={150}
              />
            ))}
        </section>
      </section>
      <section className="categories">
        <h1>Items por categoria</h1>
        <section className="categories-container">
          {categories.length > 0 &&
            categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
        </section>
      </section>
      <section className="allItens">
        <h1>Todos os items</h1>
        <section className="allItens-container">
          {allItens.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </section>
      </section>
    </div>
  );
}

export default Home;
