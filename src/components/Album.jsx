import { albums } from "../data.json"
import { AlbumName } from "./AlbumName"
import { ArtistName } from "./ArtistName";

// Album
export const Album = () => {
    return (
        <div className="album-container">
            {/* iterating over the album and rendering one card for each album */}
            {albums.items.map((album, index) => (
                <div key={album.id} className="album-card">
                    <AlbumName name={album.name} />
                    <ArtistName artists={album.artists} />
                    <a href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer">Listen</a>
                </div>
            ))}
        </div>
    )
}

// Define proptypes
Album.propTypes = {
    AlbumName: PropTypes.string.isRequired,
}