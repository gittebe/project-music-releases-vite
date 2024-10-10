import PropTypes from "prop-types"
import heartIcon from "../assets/icons/heart.svg"
import playIcon from "../assets/icons/play.svg"
import dotsIcon from "../assets/icons/dots.svg"

export const CoverImage = ({ coverImg }) => {
    return (
        <div className="cover-image-container">
            <div className="cover-image">
                <img className="cover-image-img" alt="Album Cover" src={coverImg} />
                <span className="icon-container">
                    <button type="button" aria-label="like" className="heart-button">
                        <img src={heartIcon} className="heart-icon" />
                    </button>

                    <button type="button" aria-label="play" className="play-button">
                        <img src={playIcon} className="play-icon" />
                    </button>

                    <button type="button" aria-label="link artist" className="dots-button">
                        <img src={dotsIcon} className="dots-icon" />
                    </button>


                    {/* <button type="button" className="play-icon-button">

                        <img src="/play.svg" alt="Play Icon" className="white-icon" />
                    </button>
                    <button type="button" />
                    <img src="/dots.svg" alt="Dots Icon" className="white-icon" /> */}
                </span>
            </div>
        </div>
    )
}

CoverImage.propTypes = {
    coverImg: PropTypes.string.isRequired
}