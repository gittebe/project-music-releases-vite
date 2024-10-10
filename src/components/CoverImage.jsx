import PropTypes from "prop-types"

export const CoverImage = ({ coverImg }) => {
    return (
        <div className="cover-image-container">
            <div className="cover-image">
                <img src={coverImg} />
            </div>
        </div>
    )
}

CoverImage.propTypes = {
    coverImg: PropTypes.string.isRequired
}