import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navinshorts from "./components/Navinshorts";
import NewsContent from "./components/NewsComponent/NewsContent";

import apikey from "./data/Config";
import Footer from "./components/footer/Footer";
function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [graphQl, setGraphQl] = useState(20);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${graphQl}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, category, graphQl]);
  
  

  return (
    <div className="App">
      <Navinshorts setCategory={setCategory} />
      <NewsContent
        setGraphQl={setGraphQl}
        graphQl={graphQl}
        newsArray={newsArray}
        newsApi={newsApi}
      />
      
      <Footer />
    </div>
  );
}

export default App;

