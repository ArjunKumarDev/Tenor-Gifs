import React, { useEffect } from "react";
import Slider from "react-slick";
import { getTrendingGifs, setSearchText } from "store/trending";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "style/CommonStyle";
import styled from "styled-components";
import { searchGifs } from "store/featured";

const StyledCarousel = styled(Slider)`
  height: 160px;

  & .slick-next,
  .slick-prev {
    top: 30%;
  }

  & .slick-next::before,
  .slick-prev::before {
    color: #000;
  }
`;

const InnerCard = styled.div`
  max-width: 200px;
  color: #fff;
  transition: all 0.1s ease;
  cursor: pointer;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 90px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 5%), 0 2px 4px 0 rgb(0 0 0 / 8%);
`;

const Info = styled.div`
  overflow: hidden;
  padding-top: 1.2rem;
`;

const SearchTerm = styled.span`
  color: #000;
  font-family: Inter, helvetica, arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function TrendingGifs() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  const { trendingList = [] } = useSelector((state) => state.trendingGifs);

  useEffect(() => {
    dispatch(getTrendingGifs());
  }, []);

  return (
    <>
      <Title>Trending Tenor Searches</Title>

      <StyledCarousel {...settings}>
        {trendingList?.slice(0, 10)?.map((item, index) => {
          return (
            <InnerCard
              key={index}
              onClick={() => {
                dispatch(setSearchText(item?.searchterm));
                dispatch(searchGifs({ searchValue: item?.searchterm }));
              }}
            >
              <StyledImg src={item?.image} alt="hero_img" />
              <Info>
                <SearchTerm>{item?.searchterm}</SearchTerm>
              </Info>
            </InnerCard>
          );
        })}
      </StyledCarousel>
    </>
  );
}
