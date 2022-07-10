import React from 'react'
import { FavButton, HeartIcon } from './FeaturedGifStyle'

const FavoriteButton = () => {
    return (
        <FavButton>
            <HeartIcon
                src="https://tenor.com/assets/icons/fav-heart/heart-off-icon.svg"
                alt="fav-icon"
            />
        </FavButton>
    )
}

export default FavoriteButton
