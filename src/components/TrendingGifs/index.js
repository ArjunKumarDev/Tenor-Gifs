/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { getTrendingGifs, setSearchText } from 'store/trending'
import { useDispatch, useSelector } from 'react-redux'
import { Title } from 'style/CommonStyle'
import { searchGifs } from 'store/featured'
import {
    Info,
    InnerCard,
    SearchTerm,
    StyledCarousel,
    StyledImg,
} from './TrendingGifStyle'

import { carouselsettings } from 'utils'

export default function TrendingGifs() {
    const dispatch = useDispatch()
    const { trendingList = [] } = useSelector((state) => state.trendingGifs)

    useEffect(() => {
        dispatch(getTrendingGifs())
    }, [])

    return (
        <>
            <Title>Trending Tenor Searches </Title>

            <StyledCarousel {...carouselsettings}>
                {/* Load only 10 Trending gifs */}
                {trendingList?.slice(0, 10)?.map((item, idx) => {
                    return (
                        <InnerCard
                            key={idx}
                            onClick={() => {
                                dispatch(
                                    searchGifs({
                                        searchValue: item?.searchterm,
                                        status: 'new',
                                    })
                                )
                                dispatch(setSearchText(item?.searchterm))
                            }}
                        >
                            <StyledImg src={item?.image} alt="trending_img" />
                            <Info>
                                <SearchTerm>{item?.searchterm}</SearchTerm>
                            </Info>
                        </InnerCard>
                    )
                })}
            </StyledCarousel>
        </>
    )
}
