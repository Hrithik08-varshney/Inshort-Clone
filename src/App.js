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
  const [newsResults, setResults] = useState();
  const [graphQl, setGraphQl] = useState(20);
  const newsApi = async (graphQl) => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${graphQl}`
      );
      setNewsArray(news.data.articles);
      setResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(newsArray);
  useEffect(() => {
    newsApi(graphQl);
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
// adf04b087d9d4f83b240beb4774641ef
