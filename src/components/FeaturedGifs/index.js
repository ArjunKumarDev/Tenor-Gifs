/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { getFeaturedGifs, searchGifs } from 'store/featured'
import { Title } from 'style/CommonStyle'
import { useDispatch, useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Gallery, ItemWrapper, Loader } from './FeaturedGifStyle'
import FavoriteButton from './FavoriteButton'
import GifTags from './GifTags'
import {
    LazyLoadImage,
    trackWindowScroll,
} from 'react-lazy-load-image-component'
import loader from 'assets/loader.gif'

const FeaturedGifs = ({ scrollPosition }) => {
    const dispatch = useDispatch()

    const { featuredList } = useSelector((state) => state.featuredGifs)
    const { searchText } = useSelector((state) => state.trendingGifs)

    useEffect(() => {
        dispatch(getFeaturedGifs({}))
    }, [])

    const loadMoreGifs = () => {
        let data = {
            pos: featuredList?.next,
            limit: 1,
        }

        // If Searchtext is empty call load more Featured gifs
        // If Searchtext is there / user chosen gif from Trending load user chosen gifs
        if (searchText === '') {
            dispatch(getFeaturedGifs(data))
        } else {
            dispatch(
                searchGifs({
                    searchValue: searchText,
                    pos: data?.pos,
                    status: 'old',
                })
            )
        }
    }

    return (
        <>
            <Title>Featured GIFs</Title>
            {/* Infinitescroll */}
            <InfiniteScroll
                dataLength={featuredList?.results?.length}
                next={loadMoreGifs}
                hasMore={true}
                loader={
                    <Loader>
                        {' '}
                        <img src={loader} alt="loader" />{' '}
                    </Loader>
                }
            >
                {/* Gallery Layout */}
                <Gallery>
                    {featuredList?.results?.map((item, idx) => {
                        return (
                            <ItemWrapper key={idx} position={idx}>
                                <FavoriteButton />
                                <GifTags item={item} />
                                <LazyLoadImage
                                    src={item?.media_formats?.mediumgif?.url}
                                    alt={item?.content_description}
                                    scrollPosition={scrollPosition}
                                    height="100%"
                                    width="100%"
                                    effect="blur"
                                />
                            </ItemWrapper>
                        )
                    })}
                    ;
                </Gallery>
            </InfiniteScroll>
        </>
    )
}

export default trackWindowScroll(FeaturedGifs)
