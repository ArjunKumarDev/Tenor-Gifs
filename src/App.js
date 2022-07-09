import React from "react";
import { GlobalStyle } from "GlobalStyle";
import styled from "styled-components";
import { FeaturedGifs, NavBar, SearchBar, TrendingGifs } from "components";
import { Container } from "style/CommonStyle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import  store from "store/store";

const GifWrapper = styled.div`
  padding: 3rem 0;
`;

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />

      <NavBar />

      <SearchBar />
      <Container>
        <GifWrapper>
          <TrendingGifs />
          <FeaturedGifs />
        </GifWrapper>
      </Container>
    </Provider>
  );
};

export default App;
