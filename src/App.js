import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navinshorts from "./components/Navinshorts";
import NewsContent from "./components/NewsComponent/NewsContent";
import Footer from "./components/footer/Footer";
import {
  businessNews,
  entertainmentNews,
  generalNews,
  healthNews,
  scienceNews,
  sportsNews,
  technologyNews,
} from "./Apis/Apis";
import Loader from "react-js-loader";
function App() {
  const [category, setCategory] = useState("general");
  const [newsArr, setNewsArr] = useState([]);
  const [newsObj, setNewsObj] = useState({
    general: [],
    entertainment: [],
    business: [],
    health: [],
    science: [],
    sports: [],
    technology: [],
  });
  const [filter, setFilter] = useState(10);

  const newsApi = async () => {
    try {
      const general_News = await axios.get(generalNews);
      const entertainment_News = await axios.get(entertainmentNews);
      const health_News = await axios.get(healthNews);
      const business_News = await axios.get(businessNews);
      const science_News = await axios.get(scienceNews);
      const sports_News = await axios.get(sportsNews);
      const technology_News = await axios.get(technologyNews);
      setNewsObj({
        general: general_News?.data?.articles,
        entertainment: entertainment_News?.data?.articles,
        health: health_News?.data?.articles,
        business: business_News?.data?.articles,
        science: science_News?.data?.articles,
        sports: sports_News?.data?.articles,
        technology: technology_News?.data?.articles,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (category === "general" || category === "General") {
      setNewsArr(newsObj?.general?.slice(0, filter));
    } else if (category === "entertainment" || category === "Entertainment") {
      setNewsArr(newsObj?.entertainment?.slice(0, filter));
    } else if (category === "health" || category === "Health") {
      setNewsArr(newsObj?.health?.slice(0, filter));
    } else if (category === "business" || category === "Business") {
      setNewsArr(newsObj?.business?.slice(0, filter));
    } else if (category === "science" || category === "Science") {
      setNewsArr(newsObj?.science?.slice(0, filter));
    } else if (category === "sports" || category === "Sports") {
      setNewsArr(newsObj?.sports?.slice(0, filter));
    } else if (category === "technology" || category === "Technology") {
      setNewsArr(newsObj?.technology?.slice(0, filter));
    }
    console.log(newsArr, "my news array is here");
  }, [newsObj, category, filter]);

  useEffect(()=>{
    setFilter(10);
  console.log(category, "dfghjkldfghjkl");
  },[category])

  return (
    <div className="App">
      <Navinshorts setCategory={setCategory} category={category}/>
      {newsArr?.length ? (
        <NewsContent
          newsArr={newsArr}
          category={category}
          filter={filter}
          setFilter={setFilter}
        />
      ) :  <Loader type="spinner-circle" bgColor={"black"} title={"spinner-circle"} color={'#FFFFFF'} size={100} /> }
      <Footer />
    </div>
  );
}

export default App;
