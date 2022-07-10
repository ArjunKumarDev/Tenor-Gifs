import Slider from 'react-slick'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styled from 'styled-components'

export const StyledCarousel = styled(Slider)`
    height: 160px;

    & .slick-next,
    .slick-prev {
        top: 30%;

        @media (max-width: 768px) {
            display: none !important;
        }
    }

    &.slick-next {
        @media (max-width: 600px) {
            right: -45px;
        }
    }

    & .slick-next::before,
    .slick-prev::before {
        color: #000;
    }
`

export const InnerCard = styled.div`
    max-width: 200px;
    color: #fff;
    transition: all 0.1s ease;
    cursor: pointer;

    @media (max-width: 500px) {
        max-width: 160px;
    }
`

export const StyledImg = styled(LazyLoadImage)`
    width: 100%;
    height: 90px;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 5%), 0 2px 4px 0 rgb(0 0 0 / 8%);
    transition: all 0.15s ease-in;

    &:hover {
        box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
        opacity: 0.9;
        transform: translateY(-1px);
    }
`

export const Info = styled.div`
    overflow: hidden;
    padding-top: 1.2rem;
`

export const SearchTerm = styled.span`
    color: #000;
    font-family: Inter, helvetica, arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
`
