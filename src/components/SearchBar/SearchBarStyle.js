import styled from 'styled-components'

export const Wrapper = styled.div`
    background-image: linear-gradient(90deg, #4cafff, #2e93e6);
    height: 75px;
    padding: 12px;
    position: sticky;
    top: -2px;
    z-index: 222;
`

export const StyledInput = styled.input`
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
`

export const InputContainer = styled.div`
    position: relative;

    @media (max-width: 600px) {
        top: 7px;
    }
`

export const Error = styled.span`
    position: absolute;
    left: 0;
    bottom: -12px;
    color: red;
    font-weight: 600;
    font-size: 1rem;
`

export const SearchIcon = styled.span`
    padding: 1.5rem;
    position: absolute;
    right: 0;
    cursor: pointer;
`
