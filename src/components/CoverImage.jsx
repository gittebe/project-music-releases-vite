import PropTypes from "prop-types"
import { DotsButton } from "./DotsButton"
import { HeartButton } from "./HeartButton"
import { PlayButton } from "./PlayButton"

export const CoverImage = ({ coverImg, albumUrl }) => {
    return (
        <div className="cover-image-container">
            <a href={albumUrl} target="_blank" rel="noopener noreferrer">
                <div className="cover-image">
                    <img className="cover-image-img" alt="Album Cover" src={coverImg} />

                </div>
            </a>
            <div className="icon-container">
                <HeartButton />
                <PlayButton />
                <DotsButton />
            </div>
        </div>
    )
}

CoverImage.propTypes = {
    coverImg: PropTypes.string.isRequired,
    albumUrl: PropTypes.string.isRequired,
}