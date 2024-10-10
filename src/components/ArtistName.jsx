// Artist Name
export const ArtistName = ({ artists }) => {
    return (
        <div>
            {artists.map((artist, index) => (
                <p key={artist.id} className="artist-name">
                    {artist.name}
                </p>
            ))}
        </div>
    )
}