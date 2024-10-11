import PropTypes from 'prop-types'

// Album Name
export const AlbumName = ({ name, albumUrl }) => {
    return (
        <a
            href={albumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className='album-url'>
            <h2 className="album-name">{name}</h2>
        </a>
    )
}

// Define PropTypes for AlbumName
AlbumName.propTypes = {
    name: PropTypes.string.isRequired,
    albumUrl: PropTypes.string.isRequired
};

