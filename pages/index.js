import { Box, Button, CircularProgress } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import {
  HeadlineCard,
  SearchForm,
  Mincard,
  ArticleCard,
  Category,
} from "../components";
import Footer from "../components/Footer";
import {
  fetchArticles,
  fetchByCategory,
  fetchMoreArticles,
  fetchMoreByCategory,
} from "../lib/articles";
import { getArticlesSSR, loading } from "../redux/articles";
import styles from "../styles/Home.module.css";
import { connectToDb } from "../utils/mongodb";
import { categories } from "../constants/categories.js";
// import HumbleScraper from "./HumbleScraper";

function Home({ articlesSSR }) {
  const dispatch = useDispatch();

  const { articles } = useSelector((state) => state.articles);

  const [hasMore, setHasMore] = useState(true);
  const [category, setCategory] = useState("all");

  const getMorePost = async () => {
    if (category !== 'all') {
      dispatch(fetchMoreByCategory(category));
    } else {
      dispatch(fetchMoreArticles());
    }
  };

  useEffect(() => {
    if (articlesSSR.length > 0) dispatch(getArticlesSSR(articlesSSR));
    dispatch(fetchArticles());
  }, []);
  return (
    <div className={styles.home}>
      <div styles={styles.headlines__container}>
        <div className={styles.home__categories}>
          {categories.map((category, i) => (
            <Category dataSSR={articlesSSR} setCategory={setCategory} key={i} cate={category} />
          ))}
        </div>
        {( category === 'all') && (
          <>
          <div className={styles.headlines}>
            {/* <HumbleScraper /> */}
            <HeadlineCard image="https://newsghana.com.gh/wp-content/uploads/2021/04/zjwoqz4kiaq-696x392.jpg" />
            <HeadlineCard image="https://greatpeopleinside.com/wp-content/uploads/2017/05/HR-GR8-technology.jpg" />
            <HeadlineCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREn_4u__5oaROubmkAfBLtSgXyUz_M3WSOfG5P4-o5kA&s" />
          </div>
              <div className={styles.seeMore}>
              {/* <h3>Headlines</h3> */}
              <Button className={styles.seeMoreBtn}>See More</Button>
            </div>
            </>
        )}

    
      </div>

    {( category === 'all') && (
        <div className={styles.justForYou__container}>
        <Mincard />
        <Mincard />
        <Mincard />
      </div>
    )}

      {/* <div styles={styles.headlines__container}>
        <div className={styles.headlines__containerTop}>
          <h3>Headlines</h3>
          <h4>See More</h4>
        </div>
        <div className={styles.headlines}>
          <h1>Show random 10 topics on refresh </h1>
        </div>
      </div> */}

      {/* <div styles={styles.headlines__container}> */}
      <div className={`${styles.articles} ${(category.length && category !=='all') && styles.pushup}`}>
        <InfiniteScroll
          className={`${styles.articles__wrapper}`}
          dataLength={articles.length}
          next={getMorePost}
          hasMore={hasMore}
          loader={
            <Box className={styles.loadingState}>
              <CircularProgress className={styles.progress} />
            
            </Box>
          }
          endMessage={<h4>Nothing more to show</h4>}
        >
          {articles.map((article, i) => (
            <ArticleCard key={article._id + i} article={article} />
          ))}
        </InfiniteScroll>
      </div>

      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const { db } = await connectToDb();
  const data = await db
    .collection("articles")
    .aggregate([{ $sample: { size: 5 } }])
    .toArray();

  const articlesSSR = JSON.parse(JSON.stringify(data));

  return {
    props: { articlesSSR },
  };
};

export default Home;
