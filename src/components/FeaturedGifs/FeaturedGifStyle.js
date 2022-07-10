import styled from 'styled-components'
import { getGridDimension } from 'utils'

export const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 4fr));
    grid-gap: 15px;
    grid-auto-flow: dense;
    align-items: stretch;
    width: 100%;

    @media (max-width: 750px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 3fr));
    }

    @media (max-width: 426px) {
        grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
    }
`

export const ItemWrapper = styled.div`
    grid-row: span ${(props) => getGridDimension(props?.position)};
    position: relative;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05),
        0 2px 4px 0 rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.5s ease;

    .lazy-load-image-background {
        img {
            border: 1px solid #d9d9d9;
            border-radius: 0.5rem;
        }
    }

    &:hover {
        transform: scale(1.01);
    }
`
export const FavButton = styled.div`
    display: none;
    ${ItemWrapper}:hover & {
        position: absolute;
        display: inline-block;
        top: 0;
        padding: 1rem;
        z-index: 9;
    }
`

export const HeartIcon = styled.img`
    height: 30px;
    width: 30px;
`

export const TagList = styled.ul`
    display: none;
    ${ItemWrapper}:hover & {
        position: absolute;
        display: inline-block;
        bottom: 0;
        color: #fff;
        padding: 1rem;
        z-index: 9;
    }
`

export const TagItem = styled.li`
    a {
        color: #fff;
        font-size: 1.5rem;
        font-weight: 600;

        &:hover {
            text-decoration: underline;
        }
    }
`

export const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;

    img {
        height: 100px;
        width: 100px;
    }
`
