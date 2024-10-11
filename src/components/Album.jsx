import { albums } from "../data.json"
import { AlbumName } from "./AlbumName"
import { ArtistName } from "./ArtistName"
import { CoverImage } from "./CoverImage"

// Album
export const Album = () => {
    return (
        <div className="album-container">
            {/* iterating over the album and rendering one card for each album */}
            {albums.items.map((album) => (
                <div key={album.id} className="album-card">
                    <CoverImage coverImg={album.images.length > 0 ? album.images[0].url : 'fallback-image-url.jpg'}
                        albumUrl={album.external_urls.spotify} />
                    <div className="album-info">
                        <AlbumName name={album.name} />
                        <ArtistName artists={album.artists} />
                    </div>

                </div>
            ))
            }
        </div >
    )
}



{/* <div className="cover-image-container">
                        <Image /> */}
{/* <CoverImage coverImg={album.images.length > 0 ? album.images[0].url : 'fallback-image-url.jpg'} />
                        <div className="icon-container">
                            <HeartButton />
                            <PlayButton />
                            <DotsButton />
                        </div> */}
{/* </div> */ }