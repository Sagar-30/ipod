import style from "./page.module.css"

export default function Music(props) {
    return (
        <>
        {props.text==="All Songs" ?
        <div className={style.mainPageDiv}>
            <div className={style.coverImage}>
                <img src="https://upload.wikimedia.org/wikipedia/en/9/9f/RCityLockedAway.png" alt="Cover"></img>
            </div>
            <audio src="music.mp3" controls autoPlay className={style.audioPlayer}></audio>
        </div>
        :
        <div className={style.mainPageDiv}>
            <img src={props.url} alt={props.text}></img>
            <p>{props.text}</p>
        </div>
}
        </>
    )
}