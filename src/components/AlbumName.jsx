import PropTypes from 'prop-types'

// Album Name
export const AlbumName = ({ name }) => {
    return (
        <div>
            <h2 className="album-name">{name}</h2>
        </div>
    )
}

// Define PropTypes for AlbumName
AlbumName.propTypes = {
    name: PropTypes.string.isRequired,
};
