import React from 'react'
import { TagItem, TagList } from './FeaturedGifStyle'

const GifTags = ({ item }) => {
    return (
        <TagList>
            <TagItem>
                {item?.tags?.map((tag, i) => (
                    <a href="/" key={i}>
                        {' '}
                        #{tag}{' '}
                    </a>
                ))}
            </TagItem>
        </TagList>
    )
}

export default GifTags
