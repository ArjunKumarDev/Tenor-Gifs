import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "style/CommonStyle";
import { Wrapper } from "./SearchBarStyle";
import styled from "styled-components";
import { searchGifs } from "store/featured";

const StyledInput = styled.input`
  width: 100%;
  height: 5rem;
  color: #171717;
  border: 1px solid #e8e8e8;
  border-radius: 0.3rem;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.2rem 2rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 1px 0 rgba(0, 0, 0, 0.08);

  &::placeholder {
    color: #171717;
    font-size: 1.6rem;
    font-weight: 600;
    opacity: 0.3;
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

const SearchIcon = styled.span`
  padding: 1.5rem;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

export default function SearchBar() {
  const dispatch = useDispatch();
  const { searchText = "" } = useSelector((state) => state.trendingGifs);
  const [searchValue, setSearchValue] = useState(searchText);

  useEffect(() => {
    setSearchValue(searchText)
  },[searchText])

  const handleSubmit = (e) => {
    if (e?.key === "Enter") {
      dispatch(searchGifs(searchValue));
    }
  };
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
          <SearchIcon onClick={() => dispatch(searchGifs(searchValue))}>
            <box-icon name="search"></box-icon>
          </SearchIcon>
        </InputContainer>
      </Container>
    </Wrapper>
  );
}
