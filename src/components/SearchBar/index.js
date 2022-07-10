import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'style/CommonStyle'
import {
    InputContainer,
    SearchIcon,
    StyledInput,
    Wrapper,
    Error,
} from './SearchBarStyle'
import { searchGifs } from 'store/featured'
import { setSearchText } from 'store/trending'

export default function SearchBar() {
    const dispatch = useDispatch()
    const { searchText = '' } = useSelector((state) => state.trendingGifs)
    // fetch searchText from store and initialize in state
    const [searchValue, setSearchValue] = useState(searchText)
    const [error, setError] = useState(false)

    useEffect(() => {
        setSearchValue(searchText)
    }, [searchText])

    const checkValueEmpty = () => {
        if (searchValue.trim() === '') {
            setError(true)
            return true
        } else {
            setError(false)
            return false
        }
    }

    const handleSubmit = (e) => {
        if (e?.key === 'Enter') {
            if (!checkValueEmpty()) {
                // store search value in redux store
                dispatch(setSearchText(searchValue))
                dispatch(searchGifs({ searchValue, status: 'new' }))
            }
        }
    }
    return (
        <Wrapper>
            <Container>
                <InputContainer>
                    <StyledInput
                        placeholder="Search for GIFs and Stickers"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyPress={(e) => handleSubmit(e)}
                    />
                    {error && <Error>Please enter something</Error>}
                    <SearchIcon
                        onClick={() =>
                            !checkValueEmpty() &&
                            dispatch(searchGifs({ searchValue, status: 'new' }))
                        }
                    >
                        <box-icon name="search"></box-icon>
                    </SearchIcon>
                </InputContainer>
            </Container>
        </Wrapper>
    )
}
