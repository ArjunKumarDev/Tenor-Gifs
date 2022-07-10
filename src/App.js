import React from 'react'
import { NavBar, SearchBar, TrendingGifs } from 'components'
import styled from 'styled-components'
import { GlobalStyle } from 'GlobalStyle'
import { Container } from 'style/CommonStyle'
import { Provider } from 'react-redux'
import store from 'store/store'
import FeaturedGifs from 'components/FeaturedGifs'

const GifWrapper = styled.div`
    padding: 3rem 0;
`

const App = () => {
    return (
        <Provider store={store}>
            {/* Global style */}
            <GlobalStyle />
            <NavBar />
            <SearchBar />
            {/* Container for App */}
            <Container>
                <GifWrapper>
                    <TrendingGifs />
                    <FeaturedGifs />
                </GifWrapper>
            </Container>
        </Provider>
    )
}

export default App
