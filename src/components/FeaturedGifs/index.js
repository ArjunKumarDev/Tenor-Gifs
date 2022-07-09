import React, { useEffect } from "react";
import { getFeaturedGifs, searchGifs } from "store/featured";
import { Title } from "style/CommonStyle";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

const getPosition = (idx) => {
  switch (idx) {
    case 0:
      return 3;
    case 1:
      return 2;
    case 2:
      return 6;
    case 3:
      return 4;
    case 4:
      return 7;
    case 5:
      return 6;
    default:
      return 6;
  }
};

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 15px;
  grid-auto-flow: dense;
  align-items: stretch;
  width: 100%;
`;

const ItemWrapper = styled.div`
  grid-row: span ${(props) => getPosition(props?.position)};
  position: relative;
  cursor: pointer;
  transition: all 0.5s ease;
`;

const FavButton = styled.div`
  display: none;
  ${ItemWrapper}:hover & {
    position: absolute;
    display: inline-block;
    top: 0;
    padding: 1rem;
  }
`;

const HeartIcon = styled.img`
  height: 30px;
  width: 30px;
`;

const TagList = styled.ul`
  display: none;
  ${ItemWrapper}:hover & {
    position: absolute;
    display: inline-block;
    bottom: 0;
    padding: 1rem;
    color: red;
  }
`;

const TagItem = styled.li`
  a {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function FeaturedGifs() {
  const dispatch = useDispatch();

  const { featuredList } = useSelector((state) => state.featuredGifs);
  const { searchText } = useSelector((state) => state.trendingGifs);

  console.log("flist", featuredList?.results);
  useEffect(() => {
    dispatch(getFeaturedGifs({}));
  }, []);

  const loadMoreGifs = async () => {
    let data = {
      pos: featuredList?.next,
      limit: 5,
    };

    if (searchText === "") {
      dispatch(getFeaturedGifs(data));
    } else {
      dispatch(searchGifs({ searchValue: searchText, pos: data?.pos }));
    }
  };

  return (
    <>
      <Title>Featured GIFs</Title>
      <InfiniteScroll
        dataLength={featuredList?.results?.length}
        next={loadMoreGifs}
        hasMore={true}
      >
        <Gallery>
          {featuredList?.results?.map((item, idx) => {
            return (
              <ItemWrapper key={idx} position={idx}>
                <FavButton>
                  <HeartIcon
                    src="https://tenor.com/assets/icons/fav-heart/heart-off-icon.svg"
                    alt="fav-icon"
                  />
                </FavButton>
                <TagList>
                  <TagItem>
                    {item?.tags?.map((tag, i) => (
                      <a href="/" key={i}>
                        {" "}
                        #{tag}{" "}
                      </a>
                    ))}
                  </TagItem>
                </TagList>
                <img
                  src={item?.media_formats?.gif?.url}
                  alt="images"
                  loading="lazy"
                  height={"100%"}
                  width="100%"
                />{" "}
              </ItemWrapper>
            );
          })}
          ;
        </Gallery>
      </InfiniteScroll>
    </>
  );
}
