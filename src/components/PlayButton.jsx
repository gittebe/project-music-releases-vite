import playIcon from "../assets/icons/play.svg"

export const PlayButton = () => {
    return (
        <span>
            <button type="button" aria-label="play" className="play-button">
                <img src={playIcon} className="play-icon" />
            </button>
        </span>
    )
}