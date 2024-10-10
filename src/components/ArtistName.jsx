import PropTypes from 'prop-types'

// Artist Name
export const ArtistName = ({ artists }) => {
    return (
        <div>
            {artists.map((artist) => (
                <p key={artist.id} className="artist-name">
                    {artist.name}
                </p>
            ))}
        </div>
    )
}

// Define PropTypes for ArtistName
ArtistName.propTypes = {
    artists: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            // You can add more validations for other properties if necessary
        })
    ).isRequired, // Indicate that the artists prop is required
};