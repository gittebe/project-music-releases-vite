import PropTypes from 'prop-types'
import { albums } from "../data.json"


// Artist Name
export const ArtistName = ({ artists }) => {
    return (
        <div>
            {artists.map((artist, index) =>
                <span key={artist.id}>
                    <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                        <h3>{(index ? ", " : "") + artist.name}</h3>
                    </a>
                </span>
            )}
        </div>
    )
}


ArtistName.propTypes = {
    artists: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    artistsUrl: PropTypes.string.isRequired
};